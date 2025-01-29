import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';

import { BASE64_IMAGE } from '../../../shared/mocks/base64-image-mock';
import { Product } from '../../../types/product.inteface';
import { CreateProductComponent } from './create-product.component';
import { CreateProductService } from './services/create-product.service';
import { CreateProductApiService } from './services/create-product-api.service';

// TODO: rever esses mocks
class MockCreateProductApiService {
  getAllCategories(): Observable<string[]> {
    return of([
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothings",
    ]);
  }
}

const productMock: Product = {
  id: 1,
  title: 'Produto',
  description: 'Descrição',
  category: 'Categoria',
  price: '10',
  image: BASE64_IMAGE,
};

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateProductComponent,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        CreateProductService,
        CreateProductApiService,
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: productMock,
        },
      ],
    }).compileComponents();

    TestBed.overrideComponent(CreateProductComponent, {
      set: {
        providers: [
          {
            provide: CreateProductApiService,
            useClass: MockCreateProductApiService,
          },
        ],
      },
    });

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be listing categories', () => {
    const categories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothings",
    ];
    component.categories$.subscribe((result) => {
      expect(categories).toEqual(result);
    });
  });

  fit('should be check th form is filled in with the product information', () => {
    expect(component.formGroup.get('id')?.value).toEqual(productMock.id);
  });
});
