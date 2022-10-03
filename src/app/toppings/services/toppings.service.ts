import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, catchError } from 'rxjs';

import { Topping } from '../models/topping.model';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`http://localhost:3000/toppings`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createTopping(payload: Topping): Observable<Topping> {
    return this.http
      .post<Topping>(`http://localhost:3000/toppings`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updateTopping(payload: Topping): Observable<Topping> {
    return this.http
      .put<Topping>(`http://localhost:3000/toppings/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removeTopping(payload: Topping): Observable<Topping> {
    return this.http
      .delete<any>(`http://localhost:3000/toppings/${payload.id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
