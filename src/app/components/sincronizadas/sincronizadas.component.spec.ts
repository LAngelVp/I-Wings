import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronizadasComponent } from './sincronizadas.component';

describe('SincronizadasComponent', () => {
  let component: SincronizadasComponent;
  let fixture: ComponentFixture<SincronizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SincronizadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SincronizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
