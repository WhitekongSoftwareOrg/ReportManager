import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAddComponent } from './security-add.component';

describe('SecurityAddComponent', () => {
  let component: SecurityAddComponent;
  let fixture: ComponentFixture<SecurityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
