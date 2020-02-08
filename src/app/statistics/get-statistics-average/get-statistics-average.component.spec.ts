import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStatisticsAverageComponent } from './get-statistics-average.component';

describe('GetStatisticsAverageComponent', () => {
  let component: GetStatisticsAverageComponent;
  let fixture: ComponentFixture<GetStatisticsAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStatisticsAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStatisticsAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
