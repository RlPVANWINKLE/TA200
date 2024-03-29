import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcodeComponent } from './workcode.component';

describe('WorkcodeComponent', () => {
  let component: WorkcodeComponent;
  let fixture: ComponentFixture<WorkcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkcodeComponent]
    });
    fixture = TestBed.createComponent(WorkcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
