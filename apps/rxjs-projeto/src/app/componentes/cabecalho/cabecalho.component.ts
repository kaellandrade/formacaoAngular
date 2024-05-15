import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cabecalho',
	templateUrl: './cabecalho.component.html',
	styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
	constructor(private router: Router) {}

	irParaTelaInicial(): void {
		this.router.routeReuseStrategy.shouldReuseRoute = (): boolean => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate([this.router.url]);
	}
}
