import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStatisticsAverageLevelComponent } from './get-statistics-average-level.component';

describe('GetStatisticsAverageLevelComponent', () => {
  let component: GetStatisticsAverageLevelComponent;
  let fixture: ComponentFixture<GetStatisticsAverageLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStatisticsAverageLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStatisticsAverageLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
