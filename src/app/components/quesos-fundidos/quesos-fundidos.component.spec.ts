import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesosFundidosComponent } from './quesos-fundidos.component';

describe('QuesosFundidosComponent', () => {
  let component: QuesosFundidosComponent;
  let fixture: ComponentFixture<QuesosFundidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuesosFundidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuesosFundidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
