import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatahambreComponentComponent } from './matahambre-component.component';

describe('MatahambreComponentComponent', () => {
  let component: MatahambreComponentComponent;
  let fixture: ComponentFixture<MatahambreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatahambreComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatahambreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
