import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarnicionesComponentComponent } from './guarniciones-component.component';

describe('GuarnicionesComponentComponent', () => {
  let component: GuarnicionesComponentComponent;
  let fixture: ComponentFixture<GuarnicionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarnicionesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuarnicionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
