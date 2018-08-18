import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchItemsComponent } from './ui-search-items.component';

describe('UiSearchItemsComponent', () => {
  let component: UiSearchItemsComponent;
  let fixture: ComponentFixture<UiSearchItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSearchItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSearchItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
