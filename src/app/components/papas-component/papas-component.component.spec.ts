import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapasComponentComponent } from './papas-component.component';

describe('PapasComponentComponent', () => {
  let component: PapasComponentComponent;
  let fixture: ComponentFixture<PapasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
