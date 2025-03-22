import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Product } from '../../../types/product.inteface';

@Injectable()
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getAllProducts(itemPerPage: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/products?limit=${itemPerPage}`,
    );
  }
}
