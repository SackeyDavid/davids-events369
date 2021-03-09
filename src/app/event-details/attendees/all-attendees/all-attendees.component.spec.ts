import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendeesComponent } from './all-attendees.component';

describe('AllAttendeesComponent', () => {
  let component: AllAttendeesComponent;
  let fixture: ComponentFixture<AllAttendeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAttendeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
