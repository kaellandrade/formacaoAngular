import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ElementoService } from '../../shared/service/elemento.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrl: './element-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementDetailsComponent {
  constructor(public elementoService: ElementoService) {}
}
