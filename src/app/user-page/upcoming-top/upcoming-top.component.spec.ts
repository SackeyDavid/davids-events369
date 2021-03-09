import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTopComponent } from './upcoming-top.component';

describe('UpcomingTopComponent', () => {
  let component: UpcomingTopComponent;
  let fixture: ComponentFixture<UpcomingTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
