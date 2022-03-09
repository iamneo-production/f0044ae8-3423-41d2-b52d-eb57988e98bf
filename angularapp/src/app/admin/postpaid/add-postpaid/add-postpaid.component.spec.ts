import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostpaidComponent } from './add-postpaid.component';

describe('AddPostpaidComponent', () => {
  let component: AddPostpaidComponent;
  let fixture: ComponentFixture<AddPostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
