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

const dialogRefMock = {
  close: jest.fn(),
};

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let createProductService: CreateProductService;

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
          useValue: dialogRefMock,
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

    createProductService = TestBed.inject(CreateProductService);
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

  it('should be check then form is filled in with the product information', () => {
    const { formGroup } = component;
    expect(formGroup.get('id')?.value).toEqual(productMock.id);
    expect(formGroup.get('title')?.value).toEqual(productMock.title);
    expect(formGroup.get('description')?.value).toEqual(
      productMock.description,
    );
    expect(formGroup.get('category')?.value).toEqual(productMock.category);
    expect(formGroup.get('price')?.value).toEqual(productMock.price);
  });

  it('should be called close method when clicked btn cancelar', () => {
    component.onCancelClick();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });

  it('should must call the createProductService save method when submitting the form', () => {
    jest.spyOn(createProductService, 'save').mockReturnValue(Promise.resolve());
    const evento = {
      target: {
        files: [new File([''], 'imagem.jpeg', { type: 'image/jpeg' })],
      },
    };
    component.onImageSelected(evento);
    component.onSubmitForm();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(createProductService.save).toHaveBeenCalled();
    });
  });
});
