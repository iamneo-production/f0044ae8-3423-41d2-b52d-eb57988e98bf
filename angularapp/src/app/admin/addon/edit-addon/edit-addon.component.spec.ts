import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddonsComponent } from './edit-addons.component';

describe('EditAddonsComponent', () => {
  let component: EditAddonsComponent;
  let fixture: ComponentFixture<EditAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
