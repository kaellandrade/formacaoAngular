import { AbstractControl, ValidatorFn } from '@angular/forms';
import { EnumsValidators } from './EnumsValidators';

export class CustomValidators {
  public static apenasMinusculas(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden: boolean = !/^[a-z \d\W]+$/.test(control.value);
      return forbidden ? { [EnumsValidators.APENAS_MINUSCULAS]: { value: control.value } }:null;
    };
  }

  public static campoPreenchidoSoComEspacos(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbiden: boolean = !/(.|\s)*\S(.|\s)*/.test(control.value);


      return forbiden ? { [EnumsValidators.SEM_ESPACOS]: { value: control.value } }:null;

    };
  }
}