import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Event } from './event.model';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _url: string = "http://127.0.0.1:8000/event/";

  constructor(private http: HttpClient) { }

  public postEvent(event: Event):Observable<Event>{
    console.log('this');
    return this.http.post<any>(this._url, event)
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  public getEvents(): Observable<Event>{
    return this.http.get<Event>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  deleteEvent (id: string): Observable<Event> {
    return this.http.delete<Event>(this._url+id+"/")
      .pipe(
        catchError(this.errorHandler));

  }
  getOneEvent(id): Observable<Event> {
    return this.http.get<Event>(this._url+id+"/").
    pipe(catchError(this.errorHandler));

  }
  updateEvent(id: number, value: any){
    return this.http.put<any>(this._url+id+'/', value)
    .pipe(catchError(this.errorHandler));

  }
}
