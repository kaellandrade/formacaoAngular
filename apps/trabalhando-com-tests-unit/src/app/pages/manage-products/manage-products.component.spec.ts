import { HttpClientTestingModule } from '@angular/common/http/testing';
import { signal, WritableSignal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ProductsService } from '../../shared/services/products/products.service';
import { ProductsApiService } from '../../shared/services/products/products-api.service';
import { Product } from '../../types/product.inteface';
import { ManageProductsComponent } from './manage-products.component';

// TODO: Centralizar esses mocks em outro path
class MockProductsService {
  fetchAllProductsCreated(): WritableSignal<Array<Product>> {
    const mock: Product[] = [
      {
        id: 1,
        title: 'Sapato Nike Air 1020',
        image: 'xpto-imagem-link',
        category: 'corrida',
        price: '500',
        description: 'Sapato muito bom para corredores profissionais!',
      },
    ];
    return signal<Array<Product>>(mock);
  }
}

// TODO: Centralizar esses mocks em outro path
class MockProductsApiService {
  getAllProducts(itemPerPage: number): Observable<Product[]> {
    return of<Product[]>([]);
  }
}

describe('ManageProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService, ProductsApiService],
    }).compileComponents();

    TestBed.overrideComponent(ManageProductsComponent, {
      set: {
        providers: [
          {
            provide: ProductsService,
            useClass: MockProductsService,
          },
          {
            provide: ProductsApiService,
            useClass: MockProductsApiService,
          },
        ],
      },
    });

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be listing products', () => {
    const mockSignal = signal<Array<Product>>([
      {
        id: 1,
        title: 'Sapato Nike Air 1020',
        image: 'xpto-imagem-link',
        category: 'corrida',
        price: '500',
        description: 'Sapato muito bom para corredores profissionais!',
      },
    ]);
    spyOn(productsService, 'fetchAllProductsCreated').and.returnValue(
      mockSignal,
    );
    fixture.whenStable().then(() => {
      expect(component.products()).toEqual(mockSignal());
    });
  });

  it('should be search products with empty string', () => {
    const spy = spyOn(component, 'onSearchText').and.callThrough();
    component.onSearchText('');
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('');
  });

  it('should be search products with string', () => {
    const spy = spyOn(component, 'onSearchText').and.callThrough();
    component.onSearchText('Sapato Nike Air 1020');
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('Sapato Nike Air 1020');
  });
});
