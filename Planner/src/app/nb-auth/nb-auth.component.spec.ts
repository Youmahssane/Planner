import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbAuthComponent } from './nb-auth.component';

describe('NbAuthComponent', () => {
  let component: NbAuthComponent;
  let fixture: ComponentFixture<NbAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
