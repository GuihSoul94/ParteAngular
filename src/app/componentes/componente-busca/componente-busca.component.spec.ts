import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBuscaComponent } from './componente-busca.component';

describe('ComponenteBuscaComponent', () => {
  let component: ComponenteBuscaComponent;
  let fixture: ComponentFixture<ComponenteBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
