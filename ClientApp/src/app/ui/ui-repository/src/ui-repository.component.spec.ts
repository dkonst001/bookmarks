import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRepositoryComponent } from './ui-repository.component';

describe('UiRepositoryComponent', () => {
  let component: UiRepositoryComponent;
  let fixture: ComponentFixture<UiRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
