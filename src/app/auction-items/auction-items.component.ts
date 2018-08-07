import { Component, OnInit } from '@angular/core';
import { AuctionService, AuctionItem } from '../auction.service';

@Component({
  selector: 'app-auction-items',
  templateUrl: './auction-items.component.html',
  styleUrls: ['./auction-items.component.css']
})
export class AuctionItemsComponent implements OnInit {

    public auctionItems: AuctionItem[];

    getAuctionItems() {
        this.auctionService.getAuctionItems()
        .subscribe((data: AuctionItem[]) => this.auctionItems = data);
    }

    constructor(private auctionService: AuctionService) { }

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.getAuctionItems();
    }

    onButton() {
        this.loadItems();
    }

}
