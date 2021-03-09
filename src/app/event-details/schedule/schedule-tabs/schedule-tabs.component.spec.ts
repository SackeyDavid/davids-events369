import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTabsComponent } from './schedule-tabs.component';

describe('ScheduleTabsComponent', () => {
  let component: ScheduleTabsComponent;
  let fixture: ComponentFixture<ScheduleTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
