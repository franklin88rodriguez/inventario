import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarequipoComponent } from './asignarequipo.component';

describe('AsignarequipoComponent', () => {
  let component: AsignarequipoComponent;
  let fixture: ComponentFixture<AsignarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
