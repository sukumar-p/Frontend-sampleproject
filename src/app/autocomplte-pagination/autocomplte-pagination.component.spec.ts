import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompltePaginationComponent } from './autocomplte-pagination.component';

describe('AutocompltePaginationComponent', () => {
  let component: AutocompltePaginationComponent;
  let fixture: ComponentFixture<AutocompltePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompltePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompltePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
