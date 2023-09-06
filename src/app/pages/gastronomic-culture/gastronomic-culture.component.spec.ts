import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomicCultureComponent } from './gastronomic-culture.component';

describe('GastronomicCultureComponent', () => {
  let component: GastronomicCultureComponent;
  let fixture: ComponentFixture<GastronomicCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastronomicCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastronomicCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
