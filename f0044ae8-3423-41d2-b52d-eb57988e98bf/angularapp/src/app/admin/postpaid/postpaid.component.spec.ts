import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidComponent } from './postpaid.component';

describe('PostpaidComponent', () => {
  let component: PostpaidComponent;
  let fixture: ComponentFixture<PostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
