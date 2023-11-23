import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserverService } from 'src/app/core/mobile-responsive/services/breakpoint-observer.service';
import { EditData } from 'src/app/shared/edit-data/edit-data';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { FormsDoctorViewModel } from '../models/forms-doctor.view.model';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';
import { DoctorService } from '../services/doctor.service';
import { map } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { DoctorValidator } from '../services/doctor.validator.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss'],
})
export class UpdateDoctorComponent
  extends EditData<
    DoctorService,
    FormsDoctorViewModel,
    ListDoctorViewModel,
    CompleteDoctorViewModel
  >
  implements OnInit
{
  crmMask: string = '00000-SS';

  constructor(
    public breakpointService: BreakpointObserverService,
    protected fb: FormBuilder,
    protected doctorService: DoctorService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected override notificationService: NotificationService
  ) {
    super(doctorService, notificationService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        DoctorValidator.nameValidator,
      ]),
      crm: new FormControl('', [
        Validators.required,
        DoctorValidator.crmValidator,
      ]),
      profilePictureBase64: new FormControl(null),
    });

    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['doctor'])).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  override processSuccess(doctor: ListDoctorViewModel) {
    this.notificationService.success(
      `Doctor '${doctor.name}' was edited successfully!`
    );
    this.router.navigate(['/doctor/list']);
  }

  protected override updateData(): void {
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

    this.dataService.put(this.idSelected!, data).subscribe({
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
      const digitosFormatados = matches[1].padStart(5, '0');
      const letraFormatada = matches[2].toUpperCase();

      return `${digitosFormatados}-${letraFormatada}`;
    }

    return crm;
  }

  getErrorMessage(name: string) {
    if (name == 'name') {
      if (this.form.get('name')!.hasError('required')) {
        return 'You must enter a value';
      }

      if (this.form.get('name')!.hasError('invalidName')) {
        return 'Minimum 3 characters';
      }
    }

    if (name == 'crm') {
      if (this.form.get('crm')!.hasError('required')) {
        return 'You must enter a value';
      }

      return this.form.get('crm')!.hasError('invalidCrm')
        ? 'CRM in invalid format'
        : '';
    }

    return '';
  }
}
