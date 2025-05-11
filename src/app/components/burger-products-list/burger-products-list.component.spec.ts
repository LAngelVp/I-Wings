import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerProductsListComponent } from './burger-products-list.component';

describe('BurgerProductsListComponent', () => {
  let component: BurgerProductsListComponent;
  let fixture: ComponentFixture<BurgerProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerProductsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgerProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
