import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsListListComponent } from './emails-list-list.component';

describe('EmailsListListComponent', () => {
  let component: EmailsListListComponent;
  let fixture: ComponentFixture<EmailsListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
