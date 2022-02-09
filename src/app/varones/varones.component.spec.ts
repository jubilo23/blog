import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaronesComponent } from './varones.component';

describe('VaronesComponent', () => {
  let component: VaronesComponent;
  let fixture: ComponentFixture<VaronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
