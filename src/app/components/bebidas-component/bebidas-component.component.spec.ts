import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasComponentComponent } from './bebidas-component.component';

describe('BebidasComponentComponent', () => {
  let component: BebidasComponentComponent;
  let fixture: ComponentFixture<BebidasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebidasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
