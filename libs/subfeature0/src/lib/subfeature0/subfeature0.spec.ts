import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subfeature0 } from './subfeature0';

describe('Subfeature0', () => {
  let component: Subfeature0;
  let fixture: ComponentFixture<Subfeature0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subfeature0],
    }).compileComponents();

    fixture = TestBed.createComponent(Subfeature0);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have version initialized to 1.0.0', () => {
    expect(component.version).toBe('1.0.1');
  });
});
