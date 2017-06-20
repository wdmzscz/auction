import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Menu[];

  currentMenuId: number;


  constructor(public router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, ' main' , 'dashboard'),
      new Menu(2, ' stock manager', 'stock')
    ]
  }

  nav(menu: Menu) {
    this.router.naviagateByUrl(menu.link);

    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string) {

  }
}
