import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemenilComponent } from './femenil.component';

describe('FemenilComponent', () => {
  let component: FemenilComponent;
  let fixture: ComponentFixture<FemenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemenilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
