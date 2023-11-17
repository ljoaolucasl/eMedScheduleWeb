import { Component, OnInit } from '@angular/core';
import { CompleteDoctorViewModel } from '../models/complete-doctor.view.model';
import { ListActivityViewModel } from '../../activity/models/list-activity.view.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.scss'],
})
export class DetailDoctorComponent implements OnInit {
  doctor!: CompleteDoctorViewModel;
  activities: ListActivityViewModel[] = [];
  idSelected!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['doctor'])).subscribe((data) => {
      this.doctor = data;
      this.activities = this.doctor.activities;
    });
  }
}
