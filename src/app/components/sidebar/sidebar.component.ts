import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  isClosedSideBar: boolean = true;
  @Output() onClose = new EventEmitter();

  formSearch = new FormGroup({
    search: new FormControl('')
  });

  listMenu = [
    {
      url: 'javascript:void(0)',
      icon: 'grade',
      name: 'favoritos',
    },
    {
      url: 'javascript:void(0)',
      icon: 'home',
      name: 'tela inicial',
    },
    {
      url: 'javascript:void(0)',
      icon: 'sms',
      name: 'atendimento',
    },
    {
      url: 'javascript:void(0)',
      icon: 'list_alt',
      name: 'cadastro',
    },
    {
      url: 'javascript:void(0)',
      icon: 'account_balance',
      name: 'demais telas / rotinas',
    },
  ]
  filteredMenu = [...this.listMenu];

  constructor() { }

  setFilteredMenu() {
    let filter = this.formSearch.get('search')?.value || '';
    this.filteredMenu = this.listMenu.filter(menu => menu.name.includes(filter.toLocaleLowerCase()));
  }

  toogleSideBar() {
    this.isClosedSideBar = !this.isClosedSideBar
    this.onClose.emit(this.isClosedSideBar);
  }

}
