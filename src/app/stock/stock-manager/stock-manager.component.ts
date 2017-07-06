import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})


export class StockManagerComponent implements OnInit {

  private stocks : Array<Stock>;
  constructor(public router:Router) {

  }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"chase ",2.99,3.5,"这是第一只股票",["it","互联网"]),
      new Stock(2,"united",2.99,3.5,"这是第二只股票",["it","互联网"]),
      new Stock(3,"nike",2.99,3.5,"这是第三只股票",["it","互联网"]),
      new Stock(4,"apple",2.99,3.5,"这是第四只股票",["it","互联网"])
    ];
  }

  create () {
    this.router.navigateByUrl('/stock/0');
  }

  update (stock:Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}


export class Stock {


  constructor(public id:number,
              public name:string,
              public price :number,
              public rating:number,
              public description:string,
              public categories:Array<string>){

  }
}
