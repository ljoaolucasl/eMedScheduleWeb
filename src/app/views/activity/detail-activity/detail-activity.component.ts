import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ListDoctorViewModel } from '../../doctor/models/list-doctor.view.model';
import { CompleteActivityViewModel } from '../models/complete-activity.view.model';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.scss'],
})
export class DetailActivityComponent implements OnInit {
  activity!: CompleteActivityViewModel;
  doctors: ListDoctorViewModel[] = [];
  idSelected!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idSelected = this.route.snapshot.paramMap.get('id');

    this.route.data.pipe(map((data) => data['activity'])).subscribe((data) => {
      this.activity = data;
      this.doctors = this.activity.doctors;
    });
  }
}
