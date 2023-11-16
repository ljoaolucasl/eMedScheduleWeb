import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivityComponent } from './list-activity.component';

describe('ListActivityComponent', () => {
  let component: ListActivityComponent;
  let fixture: ComponentFixture<ListActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListActivityComponent]
    });
    fixture = TestBed.createComponent(ListActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
