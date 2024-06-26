import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  contatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      motivoContato: [''],
      melhorFormaContato: ['email'],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      this.contatoForm.reset();
    }
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/');
  }
}
