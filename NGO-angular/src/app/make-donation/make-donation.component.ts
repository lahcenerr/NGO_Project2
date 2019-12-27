import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {

  public submmitted = false;
  public errorMsg;
  public donation = {
    id: "",
    UserID: "",
    EventID: "",
    Date: "",
    Amount: 0,
  };

  constructor(private donationService: DonationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submmitted = true;
    console.log(this.donation);
    this.donationService.postDonation(this.donation).subscribe(
      (data) => this.donation = data,
      () => this.errorMsg = "error",
      () => console.log('success')

    )
      this.router.navigate(["/donation"]);
  }

}
