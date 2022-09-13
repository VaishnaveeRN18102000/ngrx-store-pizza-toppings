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
}
