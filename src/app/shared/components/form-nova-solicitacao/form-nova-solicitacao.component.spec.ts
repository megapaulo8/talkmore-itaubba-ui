import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovaSolicitacaoComponent } from './form-nova-solicitacao.component';

describe('FormNovaSolicitacaoComponent', () => {
  let component: FormNovaSolicitacaoComponent;
  let fixture: ComponentFixture<FormNovaSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNovaSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNovaSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
