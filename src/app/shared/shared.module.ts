import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ButtonFloatingComponent } from './button-floating/button-floating.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardHoverDirective } from './directives/card-hover.directive';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardHoverDirective, ButtonFloatingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    CardHoverDirective,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ButtonFloatingComponent,
  ],
})
export class SharedModule {}
