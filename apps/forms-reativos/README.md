Basicamente o Angular possui duas formas de trabalhar com formulário e validá-los, são:

- [Template Drive](https://angular.io/guide/forms#building-a-template-driven-form);

  - Todo implementado no template do componente;
  - Necessário o módulo `FormsModule`;
  - É assíncrono;

- Data Driven ou Reactive Forms

  - Lógica fica do lado do componente;
  - Utiliza o `ReactiveFormsModule`;
  - É síncrono,
  - [Artigo Alura](https://www.alura.com.br/artigos/como-aplicar-validacao-formularios-reativos-angular)

- Exemplo de ambos

  [Formulário 1 (Exemplo app cadastro): Formulário Template-Driven](./src/app/cadastro/cadastro.component.html)

  Este é um exemplo de um formulário Template-Driven. Neste tipo de formulário, a lógica é baseada no template, não na classe do componente. Aqui estão alguns pontos-chave:

  - `#f="ngForm"`: Isso cria uma referência local para o formulário.
  - `(ngSubmit)="cadastrar(f)"`: Isso liga o evento de submissão do formulário à função `cadastrar()`, passando o formulário como argumento.
  - `ngModel`: Isso cria uma ligação bidirecional entre o campo do formulário e a propriedade do componente.
  - `required` e `minlength`: São validadores que garantem que o campo é preenchido e tem um comprimento mínimo.

  [Formulário 2 (Exemplo Memoteca app): Formulário Reativo](../memoteca/src/app/componentes/pensamentos/criar-pensamento/criar-pensamento.component.html)

  Este é um exemplo de um formulário Reativo. Neste tipo de formulário, a lógica é baseada na classe do componente. Aqui estão alguns pontos-chave:

  - `[formGroup]="formulario"`: Isso associa o formulário HTML ao FormGroup `formulario` definido na classe do componente.
  - `formControlName="autoria"`: Isso liga o campo de entrada ao FormControl chamado `autoria` dentro do FormGroup.

  Em resumo, os formulários Template-Driven são úteis para cenários simples e os formulários Reativos oferecem mais flexibilidade e são mais adequados para cenários complexos.

### Criando diretivas personalizadas

- `ng g directive directives/nomeDaDiretiva`
  Exemplo de um Validador para data:

```Typescript
  import { Directive } from "@angular/core";
  import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
  } from "@angular/forms";

  @Directive({
    selector: "[maiorIdadeValidator]",
    providers: [
      {
        provide: NG_VALIDATORS,
        useExisting: MaiorIdadeDirective,
        multi: true,
      },
    ],
  })
  export class MaiorIdadeDirective implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
      const dataDeNascimento = <string>control.value;
      const ano = new Date(dataDeNascimento).getFullYear();
      const anoNascimento18 = ano + 18;

      const anoAtual = new Date().getFullYear();
      const maiorDeIdade = anoNascimento18 <= anoAtual;

      return maiorDeIdade ? null : { maiorIdadeValidator: true };
    }

    registerOnValidatorChange?(fn: () => void): void {
      throw new Error("Method not implemented.");
    }
  }
```

As diretivas no Angular são classes que adicionam ou modificam um comportamento existente no DOM. Elas funcionam como funções que são chamadas quando o compilador as encontra.

Existem 3 tipos de diretivas:

Diretivas de atributos;
Diretivas Estruturais;
Componentes.
As Diretivas de atributo alteram a aparência e o comportamento dos elementos DOM e componentes, alterando estilos, tornando-os visíveis ou não por meio de uma condição. Alguns exemplos de diretivas são NgClass, NgStyle e NgModel.

As Diretivas estruturais alteram a estrutura do DOM. O nome das diretivas sempre vem com o prefixo asterisco \*. Elas adicionam ou removem elementos DOM, diferente das diretivas de atributos, que alteram a aparência e o comportamento. As diretivas estruturais mais comuns são NgIf, NgFor e NgSwitch.

Componente é uma diretiva com um modelo. Como assim? As diretivas basicamente manipulam o DOM, seja alterando a aparência ou adicionando e removendo elementos do DOM, e o que é feito com um componente é mostrar algo no DOM, portanto, o componente é uma diretiva com um template.

Entenda mais sobre as diretivas presentes no Angular, lendo a documentação.

Agora vou apresentar uma diretiva que irá alterar a cor quando escutar um evento. Veja como a estrutura da classe de uma diretiva é bem parecida com a de um componente.

```typescript
@Directive({
  selector: '[mudandoCor]',
})
export class MudarCorDirective {
  constructor() {}
}
```

Logo que batemos o olho já é possível notar algumas diferenças, como o decorador @Directive com um objeto que possui um selector, onde é passado o nome do selector. O nome é encapsulado por [], isso faz com que a diretiva seja encontrada como atributo no DOM.

```html
<p class="”paragrafo”" mudandoCor>Texto exemplo</p>
```

Caso queira que ele seja aplicado como classe, basta retirar os colchetes e adicionar o prefixo “.”.

```typescript
@Directive({
    selector: '.mudandoCor',
})

```

E para aplicar, é só acrescentar na classe do elemento DOM.

```HTML
<p class=”paragrafo mudandoCor”>Texto exemplo</p>

```

Na classe da diretiva, vou injetar a dependência de ElementRef para que eu tenha acesso ao elemento DOM. Em seguida, vou declarar o método @HostListener, que vai escutar o evento “mouseover” e chamar uma função que vai acessar o elemento e alterar sua cor para “red”, e depois outro método @HostListener que vai ouvir o evento “mouseleave” e alterar para a cor “#EB9B00”.

```Typescript
export class MudarCorDirective {
    // @Input() mudandoCor: any;
    constructor(
        private eleRef: ElementRef
    ) {}
    @HostListener('mouseover') onMouseOver() {
        this.eleRef.nativeElement.style.color = 'red';
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.eleRef.nativeElement.style.color = 'var(--laranja)';
    }
}

```

Assim, quando o mouse estiver sobre o parágrafo, o texto vai ficar na cor vermelha e quando tirar o mouse ficará laranja.

Desse modo, criei uma diretiva de atributos para alterar a aparência de um elemento DOM.
Para saber mais sobre as diretivas veja a documentação do [Angular](https://angular.dev/guide/directives#built-in-attribute-directives)
