import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerselectionComponent } from './fingerselection.component';

describe('FingerselectionComponent', () => {
  let component: FingerselectionComponent;
  let fixture: ComponentFixture<FingerselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FingerselectionComponent]
    });
    fixture = TestBed.createComponent(FingerselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
