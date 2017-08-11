import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaFicheComponent } from './text-area-fiche.component';

describe('TextAreaFicheComponent', () => {
  let component: TextAreaFicheComponent;
  let fixture: ComponentFixture<TextAreaFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
