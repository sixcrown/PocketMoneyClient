import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyChildrenComponent } from './get-my-children.component';



describe('GetMyChildrenComponent', () => {
  let component: GetMyChildrenComponent;
  let fixture: ComponentFixture<GetMyChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
