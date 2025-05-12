import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnesConQuesoComponentComponent } from './carnes-con-queso-component.component';

describe('CarnesConQuesoComponentComponent', () => {
  let component: CarnesConQuesoComponentComponent;
  let fixture: ComponentFixture<CarnesConQuesoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarnesConQuesoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarnesConQuesoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
