import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  private url: string = 'https://peticiones.online/api/users';


  constructor(private http: HttpClient) { }

  getPageByPageNumber(page: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}`);
  }

  getUsersByPage(page: number): Observable<User[]> {
    return this.http.get<any>(`${this.url}?page=${page}`).pipe(
      map(response => response.results)
    );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<any>(`${this.url}/${userId}`);
  }

  deleteUserById(userId: string) {
    return this.http.delete<any>(`${this.url}/${userId}`);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${userId}`, userData);
  }

}
