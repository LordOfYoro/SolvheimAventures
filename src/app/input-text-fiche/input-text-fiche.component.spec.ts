import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextFicheComponent } from './input-text-fiche.component';

describe('InputTextFicheComponent', () => {
  let component: InputTextFicheComponent;
  let fixture: ComponentFixture<InputTextFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
