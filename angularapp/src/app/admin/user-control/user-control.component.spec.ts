import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlComponent } from './user-control.component';

describe('UserControlComponent', () => {
  let component: UserControlComponent;
  let fixture: ComponentFixture<UserControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
