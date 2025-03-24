import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../../../environments/environment';
import { Product } from '../../../../types/product.inteface';
import { CreateProductApiService } from './create-product-api.service';

describe('CreateProductApiService', () => {
  let service: CreateProductApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateProductApiService],
    });
    service = TestBed.inject(CreateProductApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all product categories from the API', () => {
    const mockCategories = ['electronics', "men's", 'jewelery'];
    service.getAllCategories().subscribe((categories) => {
      expect(categories).toEqual(mockCategories);
    });

    // Represents the intercepted HTTP request
    const req: TestRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/products/categories`,
    );
    expect(req.request.method).toEqual('GET');

    // Simula uma resposta do servidor
    req.flush(mockCategories);
  });

  it('should fetch get count all product from the API', () => {
    const mockProducts: Product[] = [
      {
        title: 'Shoes',
        description: 'nice shoes',
        category: 'shoes',
        price: '100',
        image: 'shoes.png',
        id: 1,
      },
      {
        title: 'Shoes 2',
        description: 'nice shoes 2',
        category: 'shoes 2',
        price: '200',
        image: 'shoes2.png',
        id: 2,
      },
    ];
    service.getCountProduct().subscribe((categories) => {
      expect(categories).toEqual(mockProducts.length);
    });

    // Represents the intercepted HTTP request
    const req: TestRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/products?limit=200`,
    );
    expect(req.request.method).toEqual('GET');

    // Simula uma resposta do servidor
    req.flush(mockProducts);

    // verifica se a conexão deve ser fechada ou não
    httpTestingController.verify();
  });
});
