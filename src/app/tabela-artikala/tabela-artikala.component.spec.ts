import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaArtikalaComponent } from './tabela-artikala.component';

describe('TabelaArtikalaComponent', () => {
  let component: TabelaArtikalaComponent;
  let fixture: ComponentFixture<TabelaArtikalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaArtikalaComponent]
    });
    fixture = TestBed.createComponent(TabelaArtikalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
