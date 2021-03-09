import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsWrapperComponent } from './thumbs-wrapper.component';

describe('ThumbsWrapperComponent', () => {
  let component: ThumbsWrapperComponent;
  let fixture: ComponentFixture<ThumbsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
