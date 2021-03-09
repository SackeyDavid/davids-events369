import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPane1Component } from './tab-pane1.component';

describe('TabPane1Component', () => {
  let component: TabPane1Component;
  let fixture: ComponentFixture<TabPane1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPane1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPane1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
