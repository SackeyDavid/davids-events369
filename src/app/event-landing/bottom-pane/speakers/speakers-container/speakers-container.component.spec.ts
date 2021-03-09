import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersContainerComponent } from './speakers-container.component';

describe('SpeakersContainerComponent', () => {
  let component: SpeakersContainerComponent;
  let fixture: ComponentFixture<SpeakersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
