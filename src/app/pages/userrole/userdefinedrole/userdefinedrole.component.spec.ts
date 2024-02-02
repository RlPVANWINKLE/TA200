import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdefinedroleComponent } from './userdefinedrole.component';

describe('UserdefinedroleComponent', () => {
  let component: UserdefinedroleComponent;
  let fixture: ComponentFixture<UserdefinedroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdefinedroleComponent]
    });
    fixture = TestBed.createComponent(UserdefinedroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
