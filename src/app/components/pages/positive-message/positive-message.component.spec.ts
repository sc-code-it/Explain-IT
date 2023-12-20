import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveMessageComponent } from './positive-message.component';

describe('PositiveMessageComponent', () => {
  let component: PositiveMessageComponent;
  let fixture: ComponentFixture<PositiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositiveMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
