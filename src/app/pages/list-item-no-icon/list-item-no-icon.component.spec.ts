import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemNoIconComponent } from './list-item-no-icon.component';

describe('ListItemNoIconComponent', () => {
  let component: ListItemNoIconComponent;
  let fixture: ComponentFixture<ListItemNoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemNoIconComponent]
    });
    fixture = TestBed.createComponent(ListItemNoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
