import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllworkcodesComponent } from './allworkcodes.component';

describe('AllworkcodesComponent', () => {
  let component: AllworkcodesComponent;
  let fixture: ComponentFixture<AllworkcodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllworkcodesComponent]
    });
    fixture = TestBed.createComponent(AllworkcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
