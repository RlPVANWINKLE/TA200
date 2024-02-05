import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdoorpromptComponent } from './backdoorprompt.component';

describe('BackdoorpromptComponent', () => {
  let component: BackdoorpromptComponent;
  let fixture: ComponentFixture<BackdoorpromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackdoorpromptComponent]
    });
    fixture = TestBed.createComponent(BackdoorpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
