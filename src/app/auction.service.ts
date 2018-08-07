import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

export class Item {
    constructor(
        public itemId: string,
        public description: string
    ) { }
}

export interface AuctionItem {
    auctionItemId: string;
    currentBid: number;
    reservePrice: number;
    item: Item;
}

// place item up for auction; no id yet
export class PlaceItem {
    constructor(
        public reservePrice: number,
        public item: Item
    ) { }
}

export class PlaceBid {
    constructor(
        public auctionItemId: number,
        public maxBidAutoAmount: number,
        public bidderName: string
    ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
    auctionItemsUrl = '/api/auctionItems';
    bidsUrl = '/api/bids';

    constructor(private http: HttpClient) { }

    getAuctionItems() {
        return this.http.get<AuctionItem[]>(this.auctionItemsUrl);
    }

    postItem(auctionItem: PlaceItem) {
        return this.http.post<PlaceItem>(this.auctionItemsUrl, auctionItem, httpOptions);
    }

    placeBid(bid: PlaceBid) {
        return this.http.post<PlaceBid>(this.bidsUrl, bid, httpOptions);
    }
}
