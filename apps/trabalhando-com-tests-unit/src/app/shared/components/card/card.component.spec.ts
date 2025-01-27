import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Product } from '../../../types/product.inteface';
import { CardComponent } from './card.component';

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  /**
   * TestBed módulo onde iremos passar as configurações para tal component.
   * Iremos passar todo contexto para um determinado componente para testá-lo.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // add configurações... (bem parecido com o que fazemos no Angular)
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendering product in the view', () => {
    const product: Product = {
      id: 1,
      title: 'Samsung Galaxy A55',
      price: '3000',
      category: 'eletrônico',
      description: 'Smartphone',
      image: '/src/assets/image.png',
    };

    component.product = product;
    fixture.detectChanges();

    const productImg = fixture.debugElement.query(By.css('img')).nativeElement;
    const productTitle = fixture.debugElement.query(By.css('h2')).nativeElement;
    const productDescription = fixture.debugElement.query(
      By.css('p'),
    ).nativeElement;
    const productPrice = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(productImg.src).toContain(product.image);
    expect(productTitle.textContent).toContain(product.title);
    expect(productDescription.textContent).toContain(product.description);
    expect(productPrice.textContent).toContain(product.price);
  });

  it('should be emitted event onDelete when clicked delete button', () => {
    const product: Product = {
      id: 2,
      title: 'Samsung Galaxy S25',
      price: '6000',
      category: 'eletrônico',
      description: 'Smartphone',
      image: '/src/assets/image.png',
    };
    component.product = product;
    fixture.detectChanges();

    const spy = spyOn(component.onDelete, 'emit');

    component.isManagable = true;

    fixture.detectChanges();

    const managableElement = fixture.debugElement.query(
      By.css('span'),
    ).nativeElement;
    expect(managableElement).not.toBeNull();

    component.onDeleteClick();
    expect(spy).toHaveBeenCalledWith(product);
  });

  it('should be emitted event onEdit when clicked Edit button', () => {
    const product: Product = {
      id: 2,
      title: 'Samsung Galaxy S25',
      price: '6000',
      category: 'eletrônico',
      description: 'Smartphone',
      image: '/src/assets/image.png',
    };
    component.product = product;
    fixture.detectChanges();

    const spy = spyOn(component.onEdit, 'emit');

    component.isManagable = true;

    fixture.detectChanges();

    const managableElement = fixture.debugElement.query(
      By.css('span'),
    ).nativeElement;
    expect(managableElement).not.toBeNull();

    component.onEditClick();
    expect(spy).toHaveBeenCalledWith(product);
  });
  // TODO...
});
