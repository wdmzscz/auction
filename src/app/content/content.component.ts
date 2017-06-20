import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDescritpion = '';

  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      if(event.url == '/dashboard'){
        this.pageTitle = 'this is main page';
        this.pageDescritpion = '';
      }else if(event.url.startsWith('/stock')){
          this.pageTitle = 'this is stock management page';
          this.pageDescritpion = 'curd';
      }
    });
   }

  ngOnInit() {
  }

}
