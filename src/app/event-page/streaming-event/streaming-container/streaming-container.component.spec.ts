import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingContainerComponent } from './streaming-container.component';

describe('StreamingContainerComponent', () => {
  let component: StreamingContainerComponent;
  let fixture: ComponentFixture<StreamingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
