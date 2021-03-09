import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingExtrasComponent } from './upcoming-extras.component';

describe('UpcomingExtrasComponent', () => {
  let component: UpcomingExtrasComponent;
  let fixture: ComponentFixture<UpcomingExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
