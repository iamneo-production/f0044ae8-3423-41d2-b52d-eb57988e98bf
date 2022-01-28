import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrepaidComponent } from './view-prepaid.component';

describe('ViewPrepaidComponent', () => {
  let component: ViewPrepaidComponent;
  let fixture: ComponentFixture<ViewPrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
