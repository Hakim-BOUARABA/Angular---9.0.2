import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptiemeComponent } from './septieme.component';

describe('SeptiemeComponent', () => {
  let component: SeptiemeComponent;
  let fixture: ComponentFixture<SeptiemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeptiemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
