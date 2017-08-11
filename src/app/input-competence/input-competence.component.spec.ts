import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompetenceComponent } from './input-competence.component';

describe('InputCompetenceComponent', () => {
  let component: InputCompetenceComponent;
  let fixture: ComponentFixture<InputCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
