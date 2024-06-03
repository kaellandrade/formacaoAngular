import { AbstractControl, ValidatorFn } from '@angular/forms';

import { EnumsValidators } from './EnumsValidators';

export class CustomValidators {
  public static apenasMinusculas(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: unknown } | null => {
      const forbidden = !/^[a-z \d\W]+$/.test(control.value);
      return forbidden
        ? { [EnumsValidators.APENAS_MINUSCULAS]: { value: control.value } }
        : null;
    };
  }

  public static campoPreenchidoSoComEspacos(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: unknown } | null => {
      const forbiden = !/(.|\s)*\S(.|\s)*/.test(control.value);

      return forbiden
        ? { [EnumsValidators.SEM_ESPACOS]: { value: control.value } }
        : null;
    };
  }
}
