import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovinaFormaComponent } from './kupovina-forma.component';

describe('KupovinaFormaComponent', () => {
  let component: KupovinaFormaComponent;
  let fixture: ComponentFixture<KupovinaFormaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KupovinaFormaComponent]
    });
    fixture = TestBed.createComponent(KupovinaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
