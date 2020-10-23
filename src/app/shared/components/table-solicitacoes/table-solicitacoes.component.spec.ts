import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSolicitacoesComponent } from './table-solicitacoes.component';

describe('TableSolicitacoesComponent', () => {
  let component: TableSolicitacoesComponent;
  let fixture: ComponentFixture<TableSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
