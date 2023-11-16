import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityComponent } from './delete-activity.component';

describe('DeleteActivityComponent', () => {
  let component: DeleteActivityComponent;
  let fixture: ComponentFixture<DeleteActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteActivityComponent]
    });
    fixture = TestBed.createComponent(DeleteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
