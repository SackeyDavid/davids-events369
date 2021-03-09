import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPortComponent } from './board-port.component';

describe('BoardPortComponent', () => {
  let component: BoardPortComponent;
  let fixture: ComponentFixture<BoardPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
