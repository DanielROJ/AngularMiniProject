import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCEmpleadoComponent } from './uc-empleado.component';

describe('UCEmpleadoComponent', () => {
  let component: UCEmpleadoComponent;
  let fixture: ComponentFixture<UCEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
