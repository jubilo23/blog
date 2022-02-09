import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAseoComponent } from './list-aseo.component';

describe('ListAseoComponent', () => {
  let component: ListAseoComponent;
  let fixture: ComponentFixture<ListAseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
