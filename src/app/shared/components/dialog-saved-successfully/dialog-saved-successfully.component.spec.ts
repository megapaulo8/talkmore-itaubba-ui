import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSavedSuccessfullyComponent } from './dialog-saved-successfully.component';

describe('DialogSavedSuccessfullyComponent', () => {
  let component: DialogSavedSuccessfullyComponent;
  let fixture: ComponentFixture<DialogSavedSuccessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSavedSuccessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSavedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
