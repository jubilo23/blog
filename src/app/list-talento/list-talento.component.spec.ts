import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTalentoComponent } from './list-talento.component';

describe('ListTalentoComponent', () => {
  let component: ListTalentoComponent;
  let fixture: ComponentFixture<ListTalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTalentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
