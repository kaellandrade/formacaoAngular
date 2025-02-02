import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from '../../shared/services/products/products.service';
import { Product } from '../../types/product.inteface';
import { SearchProductsComponent } from './search-products.component';

fdescribe('SearchProductsComponent', () => {
  /*
  let component: SearchProductsComponent;
  let fixture: ComponentFixture<SearchProductsComponent>;
  let mockProductsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    mockProductsService = jasmine.createSpyObj('ProductsService', [
      'fetchAllProducts',
      'find',
    ]);
    (mockProductsService as any).products = signal<Product[]>([
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: '22.3',
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      },
    ]);

    await TestBed.configureTestingModule({
      imports: [SearchProductsComponent, BrowserAnimationsModule],
      providers: [{ provide: ProductsService, useValue: mockProductsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch initial products on init', () => {
    expect(mockProductsService.fetchAllProducts).toHaveBeenCalledOnceWith(5);
  });

  it('should call fetchAllProducts on scroll', () => {
    component.onScroll();
    expect(mockProductsService.fetchAllProducts).toHaveBeenCalledWith(10);
  });

  it('should reset products and fetch initial products when search text is empty', () => {
    component.onSearchText('');
    expect(mockProductsService.currentItemPerPage).toBe(0);
    expect(mockProductsService.fetchAllProducts).toHaveBeenCalledWith(5);
  });

  it('should call find method when search text is provided', () => {
    component.onSearchText('Product A');
    expect(mockProductsService.find).toHaveBeenCalledWith('Product A');
  });
 */
});
