import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { Donation } from '../donation.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donations = new Donation();
  errorMsg: string;

  constructor(private donationService: DonationService) { }

  ngOnInit() {
    this.donationService.getDonations().subscribe(
      (data) => this.donations = data,
      () => this.errorMsg="No Data Found!",
      () => console.log("success")
    )
  }

}
