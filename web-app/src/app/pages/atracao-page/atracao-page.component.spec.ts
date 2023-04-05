import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtracaoPageComponent } from './atracao-page.component';

describe('AtracaoPageComponent', () => {
  let component: AtracaoPageComponent;
  let fixture: ComponentFixture<AtracaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtracaoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtracaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
