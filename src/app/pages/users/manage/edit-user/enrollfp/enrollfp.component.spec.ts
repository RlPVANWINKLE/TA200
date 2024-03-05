import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollfpComponent } from './enrollfp.component';

describe('EnrollfpComponent', () => {
  let component: EnrollfpComponent;
  let fixture: ComponentFixture<EnrollfpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollfpComponent]
    });
    fixture = TestBed.createComponent(EnrollfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
