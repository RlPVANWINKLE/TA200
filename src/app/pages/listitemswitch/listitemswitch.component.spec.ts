import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemswitchComponent } from './listitemswitch.component';

describe('ListitemswitchComponent', () => {
  let component: ListitemswitchComponent;
  let fixture: ComponentFixture<ListitemswitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListitemswitchComponent]
    });
    fixture = TestBed.createComponent(ListitemswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
