import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityComponent } from './update-activity.component';

describe('UpdateActivityComponent', () => {
  let component: UpdateActivityComponent;
  let fixture: ComponentFixture<UpdateActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateActivityComponent]
    });
    fixture = TestBed.createComponent(UpdateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
