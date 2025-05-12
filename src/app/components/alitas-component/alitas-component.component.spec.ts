import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlitasComponentComponent } from './alitas-component.component';

describe('AlitasComponentComponent', () => {
  let component: AlitasComponentComponent;
  let fixture: ComponentFixture<AlitasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlitasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlitasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
