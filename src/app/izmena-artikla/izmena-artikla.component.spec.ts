import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaArtiklaComponent } from './izmena-artikla.component';

describe('IzmenaArtiklaComponent', () => {
  let component: IzmenaArtiklaComponent;
  let fixture: ComponentFixture<IzmenaArtiklaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IzmenaArtiklaComponent]
    });
    fixture = TestBed.createComponent(IzmenaArtiklaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
