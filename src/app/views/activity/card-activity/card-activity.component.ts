import { Component, Input } from '@angular/core';
import { ListActivityViewModel } from '../models/list-activity.view.model';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss'],
})
export class CardActivityComponent {
  @Input({ required: true }) activity!: ListActivityViewModel;
}
