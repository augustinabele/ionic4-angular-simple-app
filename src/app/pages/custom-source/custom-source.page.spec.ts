import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSourcePage } from './custom-source.page';

describe('CustomSourcePage', () => {
  let component: CustomSourcePage;
  let fixture: ComponentFixture<CustomSourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSourcePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
