import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbLoginComponent } from './nb-login.component';

describe('NbLoginComponent', () => {
  let component: NbLoginComponent;
  let fixture: ComponentFixture<NbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
