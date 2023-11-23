import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkedDoctorComponent } from './list-worked-doctor.component';

describe('ListWorkedDoctorComponent', () => {
  let component: ListWorkedDoctorComponent;
  let fixture: ComponentFixture<ListWorkedDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWorkedDoctorComponent]
    });
    fixture = TestBed.createComponent(ListWorkedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
