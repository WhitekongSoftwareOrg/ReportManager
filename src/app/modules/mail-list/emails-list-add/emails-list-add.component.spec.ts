import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsListAddComponent } from './emails-list-add.component';

describe('EmailsListAddComponent', () => {
  let component: EmailsListAddComponent;
  let fixture: ComponentFixture<EmailsListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
