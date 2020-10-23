import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserData } from '../../../shared/models/user/user-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public toolTip: string;
  @Input() userInfo: UserData;
  @Output() logout = new EventEmitter();

  constructor() {
    this.toolTip = 'TalkMore foi feito para você que deseja adquirir um plano de ligação da maneira mais simples e menos burocrática possível!';
  }

  ngOnInit(): void {
  }
}
