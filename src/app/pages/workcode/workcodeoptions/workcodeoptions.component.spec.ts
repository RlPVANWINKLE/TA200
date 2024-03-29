import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcodeoptionsComponent } from './workcodeoptions.component';

describe('WorkcodeoptionsComponent', () => {
  let component: WorkcodeoptionsComponent;
  let fixture: ComponentFixture<WorkcodeoptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkcodeoptionsComponent]
    });
    fixture = TestBed.createComponent(WorkcodeoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
