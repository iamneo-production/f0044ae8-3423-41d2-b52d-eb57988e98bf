import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostpaidComponent } from './edit-postpaid.component';

describe('EditPostpaidComponent', () => {
  let component: EditPostpaidComponent;
  let fixture: ComponentFixture<EditPostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
