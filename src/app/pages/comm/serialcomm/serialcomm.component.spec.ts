import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialcommComponent } from './serialcomm.component';

describe('SerialcommComponent', () => {
  let component: SerialcommComponent;
  let fixture: ComponentFixture<SerialcommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerialcommComponent]
    });
    fixture = TestBed.createComponent(SerialcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
