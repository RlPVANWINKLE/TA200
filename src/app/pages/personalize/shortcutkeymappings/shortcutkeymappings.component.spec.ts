import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutkeymappingsComponent } from './shortcutkeymappings.component';

describe('ShortcutkeymappingsComponent', () => {
  let component: ShortcutkeymappingsComponent;
  let fixture: ComponentFixture<ShortcutkeymappingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortcutkeymappingsComponent]
    });
    fixture = TestBed.createComponent(ShortcutkeymappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
