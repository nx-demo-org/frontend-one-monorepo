import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subfeature3 } from './subfeature3';

describe('Subfeature3', () => {
  let component: Subfeature3;
  let fixture: ComponentFixture<Subfeature3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subfeature3],
    }).compileComponents();

    fixture = TestBed.createComponent(Subfeature3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
