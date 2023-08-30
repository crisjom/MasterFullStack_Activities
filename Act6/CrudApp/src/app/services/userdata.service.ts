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

  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.url}`).pipe(
      map(response => response.results)
    );
  }
}
