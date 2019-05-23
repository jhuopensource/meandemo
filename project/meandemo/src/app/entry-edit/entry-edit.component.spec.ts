import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { entryEditComponent } from './entry-edit.component';

describe('entryEditComponent', () => {
  let component: entryEditComponent;
  let fixture: ComponentFixture<entryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ entryEditComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(entryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
