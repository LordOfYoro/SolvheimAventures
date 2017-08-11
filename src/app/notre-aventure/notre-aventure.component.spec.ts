import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreAventureComponent } from './notre-aventure.component';

describe('NotreAventureComponent', () => {
  let component: NotreAventureComponent;
  let fixture: ComponentFixture<NotreAventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreAventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreAventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
