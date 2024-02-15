import {Component, OnInit} from '@angular/core';
import {PensamentoService} from '../pensamento.service';
import {ModelosPensamentos} from '../../../../interfaces/ModelosPensamentos';
import {Pensamento} from '../../../../interfaces/Pensamento';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-criar-pensamento',
    templateUrl: './criar-pensamento.component.html',
    styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
    public modeloscards = ModelosPensamentos;

    pensamento: Pensamento = {
        conteudo: '',
        autoria: '',
        modelo: ModelosPensamentos.MODELO3,
    };
    formulario!: FormGroup;

    constructor(
            private service: PensamentoService,
            private router: Router,
            private formBuilder: FormBuilder
    ) {
    }

    criarPensamento(): void {
        this.service.criar(this.pensamento).subscribe(() => {
            this.router.navigate(['/listarPensamento']).then(r => {
                alert('Pensamento criado com sucesso!');
            });
        });
    }

    cancelarPensamento(): void {
        this.router.navigate(['/listarPensamento']).then(r => {
        });
    }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            conteudo: ['Formulário reativo'],
            autoria: [''],
            modelo: [ModelosPensamentos.MODELO1]
        })
    }
}
