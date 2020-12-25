import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniWebComponent } from './omni-web.component';

describe('OmniWebComponent', () => {
  let component: OmniWebComponent;
  let fixture: ComponentFixture<OmniWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
