import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersProductComponent } from './burgers-product.component';

describe('BurgersProductComponent', () => {
  let component: BurgersProductComponent;
  let fixture: ComponentFixture<BurgersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgersProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
