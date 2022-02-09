import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirigirComponent } from './list-dirigir.component';

describe('ListDirigirComponent', () => {
  let component: ListDirigirComponent;
  let fixture: ComponentFixture<ListDirigirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDirigirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirigirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
