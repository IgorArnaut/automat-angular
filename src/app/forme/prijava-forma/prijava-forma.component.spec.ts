import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaFormaComponent } from './prijava-forma.component';

describe('PrijavaFormaComponent', () => {
  let component: PrijavaFormaComponent;
  let fixture: ComponentFixture<PrijavaFormaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrijavaFormaComponent]
    });
    fixture = TestBed.createComponent(PrijavaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
