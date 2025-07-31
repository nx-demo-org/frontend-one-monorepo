import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subfeature2 } from './subfeature2';

describe('Subfeature2', () => {
  let component: Subfeature2;
  let fixture: ComponentFixture<Subfeature2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subfeature2],
    }).compileComponents();

    fixture = TestBed.createComponent(Subfeature2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
