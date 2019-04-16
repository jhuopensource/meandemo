import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { entryEditComponent } from './entry-edit.component';

describe('entryEditComponent', () => {
  let component: entryEditComponent;
  let fixture: ComponentFixture<entryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ entryEditComponent ]
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
