import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Donation} from "./donation.model"
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private _url: string = "http://127.0.0.1:8000/donation/";

  constructor(private http: HttpClient) { }


    public getDonations(): Observable<Donation>{
      return this.http.get<Donation>(this._url)
      .pipe(catchError(this.errorHandler));
    }

    public postDonation(donation: Donation):Observable<Donation>{
      console.log(this);
      return this.http.post<any>(this._url, donation)
      .pipe(catchError(this.errorHandler));

    }

    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }

}
