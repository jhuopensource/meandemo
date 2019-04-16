import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { entryComponent } from './entry.component';

describe('entryComponent', () => {
  let component: entryComponent;
  let fixture: ComponentFixture<entryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ entryComponent ]
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
