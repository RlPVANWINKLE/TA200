import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchstateoptionsComponent } from './punchstateoptions.component';

describe('PunchstateoptionsComponent', () => {
  let component: PunchstateoptionsComponent;
  let fixture: ComponentFixture<PunchstateoptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PunchstateoptionsComponent]
    });
    fixture = TestBed.createComponent(PunchstateoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
