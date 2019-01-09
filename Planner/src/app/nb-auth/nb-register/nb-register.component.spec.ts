import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbRegisterComponent } from './nb-register.component';

describe('NbRegisterComponent', () => {
  let component: NbRegisterComponent;
  let fixture: ComponentFixture<NbRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
