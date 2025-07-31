import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subfeature4 } from './subfeature4';

describe('Subfeature4', () => {
  let component: Subfeature4;
  let fixture: ComponentFixture<Subfeature4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subfeature4],
    }).compileComponents();

    fixture = TestBed.createComponent(Subfeature4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
