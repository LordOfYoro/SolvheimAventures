import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0AppComponent } from './auth0-app.component';

describe('Auth0AppComponent', () => {
  let component: Auth0AppComponent;
  let fixture: ComponentFixture<Auth0AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
