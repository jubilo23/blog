import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPredicaComponent } from './list-predica.component';

describe('ListPredicaComponent', () => {
  let component: ListPredicaComponent;
  let fixture: ComponentFixture<ListPredicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPredicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPredicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
