import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuctionService } from './auction.service';
import { AuctionItemsComponent } from './auction-items/auction-items.component';
import { EnterItemComponent } from './enter-item/enter-item.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionItemsComponent,
    EnterItemComponent,
    PlaceBidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
