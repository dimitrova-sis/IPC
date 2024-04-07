import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMgmtComponent } from './person-mgmt.component';

describe('PersonMgmtComponent', () => {
  let component: PersonMgmtComponent;
  let fixture: ComponentFixture<PersonMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
