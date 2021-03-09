import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerThumbComponent } from './speaker-thumb.component';

describe('SpeakerThumbComponent', () => {
  let component: SpeakerThumbComponent;
  let fixture: ComponentFixture<SpeakerThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
