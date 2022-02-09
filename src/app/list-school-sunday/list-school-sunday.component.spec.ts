import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolSundayComponent } from './list-school-sunday.component';

describe('ListSchoolSundayComponent', () => {
  let component: ListSchoolSundayComponent;
  let fixture: ComponentFixture<ListSchoolSundayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSchoolSundayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSchoolSundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
