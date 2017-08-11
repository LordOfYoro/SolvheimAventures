import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdrPresentationComponent } from './jdr-presentation.component';

describe('JdrPresentationComponent', () => {
  let component: JdrPresentationComponent;
  let fixture: ComponentFixture<JdrPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdrPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdrPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
