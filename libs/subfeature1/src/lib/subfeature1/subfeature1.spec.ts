import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subfeature1 } from './subfeature1';

describe('Subfeature1', () => {
  let component: Subfeature1;
  let fixture: ComponentFixture<Subfeature1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subfeature1],
    }).compileComponents();

    fixture = TestBed.createComponent(Subfeature1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
