import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLevelsComponent } from './get-levels.component';

describe('GetLevelsComponent', () => {
  let component: GetLevelsComponent;
  let fixture: ComponentFixture<GetLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
