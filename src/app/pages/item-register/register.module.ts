import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { MarketService } from './../services/market.service';
import { ItemRegisterComponent } from './item-register.component';

@NgModule({
    declarations: [
        ItemRegisterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ItemRegisterComponent],
    providers: [MarketService]
})

export class RegisterModule { }