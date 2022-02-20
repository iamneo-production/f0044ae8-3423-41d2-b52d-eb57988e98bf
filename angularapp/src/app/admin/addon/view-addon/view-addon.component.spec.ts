import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddonComponent } from './view-addon.component';

describe('ViewAddonComponent', () => {
  let component: ViewAddonComponent;
  let fixture: ComponentFixture<ViewAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});