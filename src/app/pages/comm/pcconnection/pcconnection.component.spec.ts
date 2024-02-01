import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcconnectionComponent } from './pcconnection.component';

describe('PcconnectionComponent', () => {
  let component: PcconnectionComponent;
  let fixture: ComponentFixture<PcconnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcconnectionComponent]
    });
    fixture = TestBed.createComponent(PcconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
