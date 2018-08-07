import { Component, OnInit } from '@angular/core';
import { AuctionService, PlaceItem, Item } from '../auction.service';

@Component({
  selector: 'app-enter-item',
  templateUrl: './enter-item.component.html',
  styleUrls: ['./enter-item.component.css']
})
export class EnterItemComponent implements OnInit {
    
    public theItem: PlaceItem;

    constructor(private auctionService: AuctionService) { }

    ngOnInit() {
        this.theItem = new PlaceItem(undefined, new Item("", ""));
    }

    onButton() {
        this.auctionService.postItem(this.theItem).subscribe();
        this.theItem = new PlaceItem(undefined, new Item("", ""));
    }

}
