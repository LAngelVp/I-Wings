import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCategoriesFoodComponent } from './buttons-categories-food.component';

describe('ButtonsCategoriesFoodComponent', () => {
  let component: ButtonsCategoriesFoodComponent;
  let fixture: ComponentFixture<ButtonsCategoriesFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsCategoriesFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsCategoriesFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
