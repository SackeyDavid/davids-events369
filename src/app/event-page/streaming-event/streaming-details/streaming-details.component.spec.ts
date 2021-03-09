import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingDetailsComponent } from './streaming-details.component';

describe('StreamingDetailsComponent', () => {
  let component: StreamingDetailsComponent;
  let fixture: ComponentFixture<StreamingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
