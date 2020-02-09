import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChildrenListComponent } from './get-children-list.component';

describe('GetChildrenListComponent', () => {
  let component: GetChildrenListComponent;
  let fixture: ComponentFixture<GetChildrenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetChildrenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChildrenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
