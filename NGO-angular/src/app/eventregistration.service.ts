import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Eventregistration } from './eventregistration.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventregistrationService {
  private _url: string = "http://127.0.0.1:8000/register/";

  constructor( private http: HttpClient) { }

  public registerEvent(eventregistration: Eventregistration): Observable<Eventregistration>{
    return this.http.post<any>(this._url, eventregistration)
    .pipe(catchError(this.errorHandler));

  }
  getEventName(id): Observable<Event>{
      return this.http.get<Event>(this._url+id+"/").
      pipe(catchError(this.errorHandler));
  
}

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
