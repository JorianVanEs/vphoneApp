import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponentComponent } from './features-component.component';

describe('FeaturesComponentComponent', () => {
  let component: FeaturesComponentComponent;
  let fixture: ComponentFixture<FeaturesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
