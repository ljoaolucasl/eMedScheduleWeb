import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorComponent } from './update-doctor.component';

describe('UpdateDoctorComponent', () => {
  let component: UpdateDoctorComponent;
  let fixture: ComponentFixture<UpdateDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDoctorComponent]
    });
    fixture = TestBed.createComponent(UpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
