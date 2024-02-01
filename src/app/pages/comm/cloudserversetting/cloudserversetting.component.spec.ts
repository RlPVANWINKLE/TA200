import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudserversettingComponent } from './cloudserversetting.component';

describe('CloudserversettingComponent', () => {
  let component: CloudserversettingComponent;
  let fixture: ComponentFixture<CloudserversettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudserversettingComponent]
    });
    fixture = TestBed.createComponent(CloudserversettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
