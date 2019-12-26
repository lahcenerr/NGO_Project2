import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User} from './user.model';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "http://127.0.0.1:8000/user/";


  constructor( private http: HttpClient) { }

  public postUser(user: User):Observable<User>{
    console.log('this');
    return this.http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  public getUsers(): Observable<User>{
    return this.http.get<User>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  deleteUser (id: string): Observable<User> {
    return this.http.delete<User>(this._url+id+"/")
      .pipe(
        catchError(this.errorHandler));
      
  }
  getOneUser(id): Observable<User> {
    return this.http.get<User>(this._url+id+"/").
    pipe(catchError(this.errorHandler));

  }
  updateUser(id: number, value: any){
    return this.http.put<any>(this._url+id+'/', value)
    .pipe(catchError(this.errorHandler));

  }
}
