import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonelessComponentComponent } from './boneless-component.component';

describe('BonelessComponentComponent', () => {
  let component: BonelessComponentComponent;
  let fixture: ComponentFixture<BonelessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonelessComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonelessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
