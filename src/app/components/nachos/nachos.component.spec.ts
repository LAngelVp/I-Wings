import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachosComponent } from './nachos.component';

describe('NachosComponent', () => {
  let component: NachosComponent;
  let fixture: ComponentFixture<NachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NachosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
