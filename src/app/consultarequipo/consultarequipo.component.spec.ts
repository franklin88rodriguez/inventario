import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarequipoComponent } from './consultarequipo.component';

describe('ConsultarequipoComponent', () => {
  let component: ConsultarequipoComponent;
  let fixture: ComponentFixture<ConsultarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
