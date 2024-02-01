import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthernetComponent } from './ethernet.component';

describe('EthernetComponent', () => {
  let component: EthernetComponent;
  let fixture: ComponentFixture<EthernetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthernetComponent]
    });
    fixture = TestBed.createComponent(EthernetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
