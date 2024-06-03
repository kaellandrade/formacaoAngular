import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.css',
})
export class SharedUiComponent {}
