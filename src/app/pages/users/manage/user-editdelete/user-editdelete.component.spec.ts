import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditdeleteComponent } from './user-editdelete.component';

describe('UserEditdeleteComponent', () => {
  let component: UserEditdeleteComponent;
  let fixture: ComponentFixture<UserEditdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditdeleteComponent]
    });
    fixture = TestBed.createComponent(UserEditdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
