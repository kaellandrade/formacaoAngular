import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendering title in the view', () => {
    component.title = 'Teste título';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector("[data-testid='banner-title']")?.textContent,
    ).toContain('Teste título');
  });
});
