import { RouterModule } from '@angular/router';
import { MarketService } from './pages/services/market.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './pages/item-register/register.module';
import { ListModule } from './pages/item-list/list.module';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemRegisterComponent } from './pages/item-register/item-register.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    ListModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'item-list', component: ItemListComponent},
      {path: 'item-register', component: ItemRegisterComponent},
      {path: '', redirectTo: '/item-register', pathMatch: 'full'},
    ])
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
