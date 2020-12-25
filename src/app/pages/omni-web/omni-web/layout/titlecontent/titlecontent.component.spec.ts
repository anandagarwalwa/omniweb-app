import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecontentComponent } from './titlecontent.component';

describe('TitlecontentComponent', () => {
  let component: TitlecontentComponent;
  let fixture: ComponentFixture<TitlecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
