import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosEventosComponent } from './projetos-eventos.component';

describe('ProjetosEventosComponent', () => {
  let component: ProjetosEventosComponent;
  let fixture: ComponentFixture<ProjetosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
