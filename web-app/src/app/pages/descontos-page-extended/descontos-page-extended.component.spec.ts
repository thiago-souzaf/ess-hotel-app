import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontosPageExtendedComponent } from './descontos-page-extended.component';

describe('DescontosPageExtendedComponent', () => {
  let component: DescontosPageExtendedComponent;
  let fixture: ComponentFixture<DescontosPageExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescontosPageExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescontosPageExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
