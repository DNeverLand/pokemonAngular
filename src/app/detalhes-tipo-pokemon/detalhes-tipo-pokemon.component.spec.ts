import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTipoPokemonComponent } from './detalhes-tipo-pokemon.component';

describe('DetalhesTipoPokemonComponent', () => {
  let component: DetalhesTipoPokemonComponent;
  let fixture: ComponentFixture<DetalhesTipoPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesTipoPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesTipoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
