import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountCardComponent } from './add-account-card.component';

describe('AddAccountCardComponent', () => {
  let component: AddAccountCardComponent;
  let fixture: ComponentFixture<AddAccountCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
