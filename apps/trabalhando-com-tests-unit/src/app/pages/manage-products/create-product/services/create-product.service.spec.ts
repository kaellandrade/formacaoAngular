import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CreateProductService } from './create-product.service';
import { CreateProductApiService } from './create-product-api.service';

describe('CreateProductService', () => {
  let service: CreateProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateProductService, CreateProductApiService],
    });
    service = TestBed.inject(CreateProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
