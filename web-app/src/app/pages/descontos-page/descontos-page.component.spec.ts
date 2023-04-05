import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontosPageComponent } from './descontos-page.component';

describe('DescontosPageComponent', () => {
  let component: DescontosPageComponent;
  let fixture: ComponentFixture<DescontosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescontosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescontosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
