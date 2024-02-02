import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollerComponent } from './enroller.component';

describe('EnrollerComponent', () => {
  let component: EnrollerComponent;
  let fixture: ComponentFixture<EnrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollerComponent]
    });
    fixture = TestBed.createComponent(EnrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
