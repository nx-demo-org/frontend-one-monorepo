import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feature4 } from './feature4';

describe('Feature4', () => {
  let component: Feature4;
  let fixture: ComponentFixture<Feature4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature4],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
