import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrganisersComponent } from './all-organisers.component';

describe('AllOrganisersComponent', () => {
  let component: AllOrganisersComponent;
  let fixture: ComponentFixture<AllOrganisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrganisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrganisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
