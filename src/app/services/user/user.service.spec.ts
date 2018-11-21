import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('Should accept a minimum password lenght of 6', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isPasswordValid("123456")).toBeTruthy();
  });

  it('Should accept a minimum name lenght of 2', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isNameValid("Ib")).toBeTruthy();
  });

  it('Should accept a minimum email lenght of 8', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isEmailValid("123@56.8")).toBeTruthy();
  });
});
