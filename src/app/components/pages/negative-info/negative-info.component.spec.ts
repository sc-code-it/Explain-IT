import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeInfoComponent } from './negative-info.component';

describe('NegativeInfoComponent', () => {
  let component: NegativeInfoComponent;
  let fixture: ComponentFixture<NegativeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegativeInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegativeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
