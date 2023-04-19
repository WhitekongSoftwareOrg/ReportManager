import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsListEditComponent } from './emails-list-edit.component';

describe('EmailsListEditComponent', () => {
  let component: EmailsListEditComponent;
  let fixture: ComponentFixture<EmailsListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
