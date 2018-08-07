import { Component, OnInit } from '@angular/core';
import { AuctionService, PlaceBid } from '../auction.service';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {
    
  public theBid: PlaceBid;

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
      this.theBid = new PlaceBid(undefined, undefined, "");
  }

  onButton() {
      this.auctionService.placeBid(this.theBid).subscribe();
      this.theBid = new PlaceBid(undefined, undefined, "");
  }

}
