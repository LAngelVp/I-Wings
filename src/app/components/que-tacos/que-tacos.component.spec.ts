import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueTacosComponent } from './que-tacos.component';

describe('QueTacosComponent', () => {
  let component: QueTacosComponent;
  let fixture: ComponentFixture<QueTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueTacosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
