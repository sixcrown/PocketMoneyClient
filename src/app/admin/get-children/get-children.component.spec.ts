import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChildrenComponent } from './get-children.component';

describe('GetChildrenComponent', () => {
  let component: GetChildrenComponent;
  let fixture: ComponentFixture<GetChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
