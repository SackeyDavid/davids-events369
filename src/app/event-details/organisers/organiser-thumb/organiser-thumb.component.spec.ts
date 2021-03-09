import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserThumbComponent } from './organiser-thumb.component';

describe('OrganiserThumbComponent', () => {
  let component: OrganiserThumbComponent;
  let fixture: ComponentFixture<OrganiserThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiserThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiserThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
