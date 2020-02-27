import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinquiemeComponent } from './cinquieme.component';

describe('CinquiemeComponent', () => {
  let component: CinquiemeComponent;
  let fixture: ComponentFixture<CinquiemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinquiemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinquiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
