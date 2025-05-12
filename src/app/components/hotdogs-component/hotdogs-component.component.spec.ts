import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdogsComponentComponent } from './hotdogs-component.component';

describe('HotdogsComponentComponent', () => {
  let component: HotdogsComponentComponent;
  let fixture: ComponentFixture<HotdogsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotdogsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotdogsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
