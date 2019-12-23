import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User} from './user.model';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "";


  constructor( private http: HttpClient) { }

  public postUser(user: User):Observable<User>{
    return this.http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
