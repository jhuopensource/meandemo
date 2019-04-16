import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { entryDetailComponent } from './entry-detail.component';

describe('entryDetailComponent', () => {
  let component: entryDetailComponent;
  let fixture: ComponentFixture<entryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ entryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(entryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
