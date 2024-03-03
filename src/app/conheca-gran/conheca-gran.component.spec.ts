import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaGranComponent } from './conheca-gran.component';

describe('ConhecaGranComponent', () => {
  let component: ConhecaGranComponent;
  let fixture: ComponentFixture<ConhecaGranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConhecaGranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConhecaGranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
