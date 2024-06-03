import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';

import { Cep } from '../interfaces/cep';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Directive({
  selector: '[validandorCep]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidandoCepDirective,
      multi: true,
    },
  ],
})
export class ValidandoCepDirective implements AsyncValidator {
  constructor(private serviceCep: ConsultaCepService) {}

  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.serviceCep
      .consultarCep(cep)
      .pipe(
        map((resultado: Cep) =>
          resultado.erro ? { validandorCep: true } : null,
        ),
      );
  }
}
