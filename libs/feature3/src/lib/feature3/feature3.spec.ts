import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feature3 } from './feature3';

describe('Feature3', () => {
  let component: Feature3;
  let fixture: ComponentFixture<Feature3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature3],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
