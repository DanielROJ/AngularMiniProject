import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDEmpleadoComponent } from './rd-empleado.component';

describe('RDEmpleadoComponent', () => {
  let component: RDEmpleadoComponent;
  let fixture: ComponentFixture<RDEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
