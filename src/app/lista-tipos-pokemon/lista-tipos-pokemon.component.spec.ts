import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposPokemonComponent } from './lista-tipos-pokemon.component';

describe('ListaTiposPokemonComponent', () => {
  let component: ListaTiposPokemonComponent;
  let fixture: ComponentFixture<ListaTiposPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTiposPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
