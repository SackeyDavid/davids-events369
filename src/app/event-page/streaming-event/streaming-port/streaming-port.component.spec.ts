import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingPortComponent } from './streaming-port.component';

describe('StreamingPortComponent', () => {
  let component: StreamingPortComponent;
  let fixture: ComponentFixture<StreamingPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingPortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
