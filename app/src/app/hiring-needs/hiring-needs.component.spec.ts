import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringNeedsComponent } from './hiring-needs.component';

describe('HiringNeedsComponent', () => {
  let component: HiringNeedsComponent;
  let fixture: ComponentFixture<HiringNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiringNeedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
