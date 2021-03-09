import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeThumbComponent } from './attendee-thumb.component';

describe('AttendeeThumbComponent', () => {
  let component: AttendeeThumbComponent;
  let fixture: ComponentFixture<AttendeeThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
