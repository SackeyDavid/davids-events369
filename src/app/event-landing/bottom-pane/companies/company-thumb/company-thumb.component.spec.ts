import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyThumbComponent } from './company-thumb.component';

describe('CompanyThumbComponent', () => {
  let component: CompanyThumbComponent;
  let fixture: ComponentFixture<CompanyThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
