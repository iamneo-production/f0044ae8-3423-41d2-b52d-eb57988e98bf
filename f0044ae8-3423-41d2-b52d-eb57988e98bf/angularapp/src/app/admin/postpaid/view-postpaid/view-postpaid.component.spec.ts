import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostpaidComponent } from './view-postpaid.component';

describe('ViewPostpaidComponent', () => {
  let component: ViewPostpaidComponent;
  let fixture: ComponentFixture<ViewPostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
