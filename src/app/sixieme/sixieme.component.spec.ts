import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixiemeComponent } from './sixieme.component';

describe('SixiemeComponent', () => {
  let component: SixiemeComponent;
  let fixture: ComponentFixture<SixiemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixiemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
