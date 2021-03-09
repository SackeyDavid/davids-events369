import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomContainerComponent } from './showroom-container.component';

describe('ShowroomContainerComponent', () => {
  let component: ShowroomContainerComponent;
  let fixture: ComponentFixture<ShowroomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
