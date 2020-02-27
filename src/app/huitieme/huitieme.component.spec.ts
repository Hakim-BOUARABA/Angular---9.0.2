import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuitiemeComponent } from './huitieme.component';

describe('HuitiemeComponent', () => {
  let component: HuitiemeComponent;
  let fixture: ComponentFixture<HuitiemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuitiemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuitiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
