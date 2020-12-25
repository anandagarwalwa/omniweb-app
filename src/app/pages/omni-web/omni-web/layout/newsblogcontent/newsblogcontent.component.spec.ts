import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsblogcontentComponent } from './newsblogcontent.component';

describe('NewsblogcontentComponent', () => {
  let component: NewsblogcontentComponent;
  let fixture: ComponentFixture<NewsblogcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsblogcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsblogcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
