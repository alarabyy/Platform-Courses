import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOFCoursesComponent } from './list-of-courses.component';

describe('ListOFCoursesComponent', () => {
  let component: ListOFCoursesComponent;
  let fixture: ComponentFixture<ListOFCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOFCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOFCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
