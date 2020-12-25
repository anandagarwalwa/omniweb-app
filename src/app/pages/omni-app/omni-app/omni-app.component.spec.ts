import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniAppComponent } from './omni-app.component';

describe('OmniAppComponent', () => {
  let component: OmniAppComponent;
  let fixture: ComponentFixture<OmniAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
