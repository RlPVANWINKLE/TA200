import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbupgradeComponent } from './usbupgrade.component';

describe('UsbupgradeComponent', () => {
  let component: UsbupgradeComponent;
  let fixture: ComponentFixture<UsbupgradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsbupgradeComponent]
    });
    fixture = TestBed.createComponent(UsbupgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
