import { Component, OnInit } from '@angular/core';
import { AddData } from 'src/app/shared/add-data/add-data';
import { DoctorService } from '../services/doctor.service';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent
  extends AddData<
    DoctorService,
    FormsDoctorViewModel,
    ListDoctorViewModel,
    CompleteDoctorViewModel
  >
  implements OnInit
{
  crmMask: string = '00000-AA';

  constructor(
    protected breakpointService: BreakpointObserverService,
    protected fb: FormBuilder,
    protected doctorService: DoctorService,
    protected router: Router,
    protected override notificationService: NotificationService
  ) {
    super(doctorService, notificationService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      crm: new FormControl('', [Validators.required]),
      profilePictureBase64: new FormControl(''),
    });
  }

  override processSuccess(doctor: ListDoctorViewModel) {
    this.notificationService.success(
      `Doctor ${doctor.name} has been successfully registered!`
    );
    this.router.navigate(['/doctor/list']);
  }

  protected override addData(): void {
    this.form
      .get('crm')
      ?.setValue(this.formatCRM(this.form.get('crm')?.value), {
        emitEvent: false,
      });

    if (this.form.invalid) {
      for (let error of this.form.validate()) {
        this.notificationService.warning(error);
      }

      return;
    }

    const data: FormsDoctorViewModel = this.form.value;

    this.dataService.post(data).subscribe({
      next: (data: ListDoctorViewModel) => this.processSuccess(data),
      error: (error: Error) => this.processError(error),
    });
  }

  public selectProfilePicture(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const base64String = e.target?.result?.toString().split(',')[1];
          this.form.get('profilePictureBase64')?.setValue(base64String);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  private formatCRM(crm: string): string {
    const matches = crm.match(/^(\d+)([A-Za-z]+)$/);

    if (matches && matches.length === 3) {
      const formattedDigits = matches[1].padStart(5, '0');
      const formattedLetter = matches[2].toUpperCase();

      return `${formattedDigits}-${formattedLetter}`;
    }

    return crm;
  }
}
