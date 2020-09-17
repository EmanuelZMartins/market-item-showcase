import { NgModule } from '@angular/core';

import { MarketService } from './../services/market.service';
import { ItemListComponent } from './item-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        ItemListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [ItemListComponent],
    providers: [MarketService]
})
export class ListModule { }