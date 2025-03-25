import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProductsService } from '../../shared/services/products/products.service';
import { ProductsApiService } from '../../shared/services/products/products-api.service';
import { Product } from '../../types/product.inteface';
import { SearchProductsComponent } from './search-products.component';

describe('SearchProductsComponent', () => {
  let component: SearchProductsComponent;
  let fixture: ComponentFixture<SearchProductsComponent>;
  let productsService: ProductsService;
  let productsApiService: ProductsApiService;

  const mockProducts: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: '10',
      category: 'Category 1',
      description: 'Description 1',
      image: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: '20',
      category: 'Category 2',
      description: 'Description 2',
      image: 'image2.jpg',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SearchProductsComponent],
      providers: [ProductsService, ProductsApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProductsComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    productsApiService = TestBed.inject(ProductsApiService);

    jest
      .spyOn(productsApiService, 'getAllProducts')
      .mockReturnValue(of(mockProducts));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    jest.spyOn(productsService, 'fetchAllProducts');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(productsService.fetchAllProducts).toHaveBeenCalledWith(5);
      expect(component.products().length).toBe(1); // Assuming mockProducts are returned
    });
  });

  it('should filter products based on search text', () => {
    component.products.set(mockProducts); // Set initial products
    component.onSearchText('Product 1');
    expect(component.products().length).toBe(1);
    expect(component.products()[0].title).toBe('Product 1');

    component.onSearchText('');
    expect(component.products().length).toBe(1); // Should reset to all products
  });
});
