import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrepaidComponent } from './edit-prepaid.component';

describe('EditPrepaidComponent', () => {
  let component: EditPrepaidComponent;
  let fixture: ComponentFixture<EditPrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});