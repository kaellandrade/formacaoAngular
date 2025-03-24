import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { Product } from '../../../types/product.inteface';
import { StorageService } from '../storage/storage.service';
import { ProductsService } from './products.service';
import { ProductsApiService } from './products-api.service';

const productStorage: Product[] = [
  {
    id: 3,
    title: 'Produto C',
    category: 'eletronic',
    description: 'Product C',
    price: '100',
    image: 'image.png',
  },
  {
    id: 4,
    title: 'Produto D',
    category: `woman's clothes`,
    description: 'Product D',
    price: '10.5',
    image: 'image.png',
  },
];

class MockProductsApiService {
  getAllProducts(itemPerPage: number): Observable<Product[]> {
    return of<Product[]>(productStorage);
  }
}

class StorageServiceMock {
  private data: { [key: string]: any } = {};

  getAll(): any[] {
    return Object.values(this.data);
  }

  setValue(key: string, value: any): void {
    this.data[key] = value;
  }

  remove(key: string): void {
    delete this.data[key];
  }
}

describe('ProductsService', () => {
  let service: ProductsService;
  const sessionStorage = new StorageServiceMock();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService,
        {
          provide: ProductsApiService,
          useClass: MockProductsApiService,
        },
        { provide: StorageServiceMock, useClass: StorageServiceMock },
      ],
    });
    sessionStorage.setValue('products', productStorage);
    TestBed.overrideProvider(StorageService, { useValue: sessionStorage });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be init products from the session storage', () => {
    const [product1, product2] = service.products().flat();
    const [product1Storage, product2Storage] = productStorage;

    expect(product1).toEqual(product1Storage);
    expect(product2).toEqual(product2Storage);
  });
});
