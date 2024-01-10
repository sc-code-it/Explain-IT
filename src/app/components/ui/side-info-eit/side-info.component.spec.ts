import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/components/ui/main/main.component.spec.ts
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComponent);
========
import { SideInfoComponent } from './side-info.component';

describe('SideInfoComponent', () => {
  let component: SideInfoComponent;
  let fixture: ComponentFixture<SideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideInfoComponent);
>>>>>>>> header:src/app/components/ui/side-info/side-info.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
