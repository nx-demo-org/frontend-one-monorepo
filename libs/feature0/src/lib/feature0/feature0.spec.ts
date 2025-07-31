import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feature0 } from './feature0';

describe('Feature0', () => {
  let component: Feature0;
  let fixture: ComponentFixture<Feature0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature0],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature0);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
