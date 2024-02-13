import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: Observable<any>;

  constructor(private http: HttpClient) {}

  loginUser(loginUserData: object[]): Observable<any> {

    return this.http.post<any>('www.localhost:3000/api/login', loginUserData)
  }
}