import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessnetworkComponent } from './wirelessnetwork.component';

describe('WirelessnetworkComponent', () => {
  let component: WirelessnetworkComponent;
  let fixture: ComponentFixture<WirelessnetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelessnetworkComponent]
    });
    fixture = TestBed.createComponent(WirelessnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
