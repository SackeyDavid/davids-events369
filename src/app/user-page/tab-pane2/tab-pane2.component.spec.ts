import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPane2Component } from './tab-pane2.component';

describe('TabPane2Component', () => {
  let component: TabPane2Component;
  let fixture: ComponentFixture<TabPane2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPane2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPane2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
