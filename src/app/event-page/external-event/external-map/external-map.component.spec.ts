import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalMapComponent } from './external-map.component';

describe('ExternalMapComponent', () => {
  let component: ExternalMapComponent;
  let fixture: ComponentFixture<ExternalMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
