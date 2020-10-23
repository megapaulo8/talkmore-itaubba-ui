import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteRequestComponent } from './dialog-confirm-delete-request.component';

describe('DialogConfirmDeleteRequestComponent', () => {
  let component: DialogConfirmDeleteRequestComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmDeleteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
