import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomItemComponent } from './showroom-item.component';

describe('ShowroomItemComponent', () => {
  let component: ShowroomItemComponent;
  let fixture: ComponentFixture<ShowroomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
