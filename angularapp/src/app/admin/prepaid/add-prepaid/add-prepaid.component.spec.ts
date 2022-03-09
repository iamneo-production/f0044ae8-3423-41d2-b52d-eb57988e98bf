import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrepaidComponent } from './add-prepaid.component';

describe('AddPrepaidComponent', () => {
  let component: AddPrepaidComponent;
  let fixture: ComponentFixture<AddPrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});