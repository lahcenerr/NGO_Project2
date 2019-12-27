import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { Donation } from '../donation.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donations: Donation;
  errorMsg: string;

  constructor(private donationService: DonationService) { }

  ngOnInit() {
    console.log(this.donations);
    this.donationService.getDonations().subscribe(
      (data) => this.donations = data,
      () => this.errorMsg="No Data Found!",
      () => console.log(this.donations)
    );
    console.log(this.donations);

  }

}
