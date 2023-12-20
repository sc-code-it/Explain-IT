import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveInfoComponent } from './positive-info.component';

describe('PositiveInfoComponent', () => {
  let component: PositiveInfoComponent;
  let fixture: ComponentFixture<PositiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositiveInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
