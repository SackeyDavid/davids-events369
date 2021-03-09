import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalContainerComponent } from './external-container.component';

describe('ExternalContainerComponent', () => {
  let component: ExternalContainerComponent;
  let fixture: ComponentFixture<ExternalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
