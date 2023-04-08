import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtracoesPageComponent } from './lista-atracoes-page.component';

describe('ListaAtracoesPageComponent', () => {
  let component: ListaAtracoesPageComponent;
  let fixture: ComponentFixture<ListaAtracoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAtracoesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAtracoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
