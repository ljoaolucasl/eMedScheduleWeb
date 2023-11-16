import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivityComponent } from './card-activity.component';

describe('CardActivityComponent', () => {
  let component: CardActivityComponent;
  let fixture: ComponentFixture<CardActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardActivityComponent]
    });
    fixture = TestBed.createComponent(CardActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
