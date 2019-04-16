import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { entryCreateComponent } from './entry-create.component';

describe('entryCreateComponent', () => {
  let component: entryCreateComponent;
  let fixture: ComponentFixture<entryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ entryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(entryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
