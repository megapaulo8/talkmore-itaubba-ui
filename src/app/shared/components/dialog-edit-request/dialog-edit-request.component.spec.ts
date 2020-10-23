import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditRequestComponent } from './dialog-edit-request.component';

describe('DialogEditRequestComponent', () => {
  let component: DialogEditRequestComponent;
  let fixture: ComponentFixture<DialogEditRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
