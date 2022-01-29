import { TestBed } from '@angular/core/testing';

import { UserControlService } from './user-control.service';

describe('UserControlService', () => {
  let service: UserControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
