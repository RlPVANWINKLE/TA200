import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellschedulesComponent } from './bellschedules.component';

describe('BellschedulesComponent', () => {
  let component: BellschedulesComponent;
  let fixture: ComponentFixture<BellschedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BellschedulesComponent]
    });
    fixture = TestBed.createComponent(BellschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
