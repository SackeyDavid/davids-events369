import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorThumbComponent } from './sponsor-thumb.component';

describe('SponsorThumbComponent', () => {
  let component: SponsorThumbComponent;
  let fixture: ComponentFixture<SponsorThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
