import { IUser } from './user';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  allUsers;
  private _url:string = 'http://127.0.0.1:8000/user/'
  constructor(private http:HttpClient) { }
  
  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message|| 'Server Error');
  }
  getUsers():Observable<any>{
    this.allUsers = this.http.get<any>(this._url)
    return this.http.get<any>(this._url)
  }
  addUser(user):Observable<any>{
    const body = {Firstname:user.firstname,Lastname:user.lastname,Email:user.email,Password:user.password,Role:user.role};
    console.log(body)
    return this.http.post(this._url,body)
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

}

