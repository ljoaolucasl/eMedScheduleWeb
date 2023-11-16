import { Component, Input, OnInit } from '@angular/core';
import { ListDoctorViewModel } from '../models/list-doctor.view.model';

@Component({
  selector: 'app-card-doctor',
  templateUrl: './card-doctor.component.html',
  styleUrls: ['./card-doctor.component.scss'],
})
export class CardDoctorComponent {
  @Input({ required: true }) doctor!: ListDoctorViewModel;
  profile: string = 'assets/default-avatar.jpg';

  constructor() {
    console.log(this.doctor);
  }
}
