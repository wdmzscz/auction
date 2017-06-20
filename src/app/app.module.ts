import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
import { StarsComponent } from './stars/stars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';

const routeConfig: Routes = [
  {path: 'stock', component: StockManagerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', credirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock/:id', compoonent:StockFormComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManagerComponent,
    StarsComponent,
    StockFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
