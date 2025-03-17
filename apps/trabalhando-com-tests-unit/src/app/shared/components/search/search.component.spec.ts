import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be emitted event search', () => {
    const spy = spyOn(component.searchText, 'emit');
    const inputElement = fixture.debugElement.query(
      By.css('[data-testid="search-input"]'),
    ).nativeElement as HTMLInputElement;

    inputElement.value = 'Smartphone';
    inputElement.dispatchEvent(new Event('input')); // simula digitação
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('Smartphone');
  });
  it('should be created button search', () => {
    const btnElement = fixture.debugElement.query(
      By.css('[data-testid="search-btn"]'),
    ).nativeElement as HTMLButtonElement;
    expect(btnElement).toBeTruthy();
  });
});
