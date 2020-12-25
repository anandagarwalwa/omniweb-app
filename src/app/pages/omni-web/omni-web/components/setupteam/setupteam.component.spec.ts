import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupteamComponent } from './setupteam.component';

describe('SetupteamComponent', () => {
  let component: SetupteamComponent;
  let fixture: ComponentFixture<SetupteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
