import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { entryComponent } from './entry.component';

describe('entryComponent', () => {
  let component: entryComponent;
  let fixture: ComponentFixture<entryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MatTableModule, HttpClientTestingModule ],
      declarations: [ entryComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(entryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
