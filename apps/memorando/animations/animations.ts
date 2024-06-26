import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    }),
  ),
  state(
    'highlighted',
    style({
      border: '2px solid #B2B6FF',
      filter: 'brightness(92%)',
    }),
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      }),
    ),

    animate(200),
  ]),
]);

/* Utilizando coringa(wildcard) para elementos que ainda não foram anexados ao DOM... */
export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      }),
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      }),
    ),
  ]),
]);

export const checkStateTrigger = trigger('markedState', [
  state(
    'notMarked',
    style({
      background: 'transparent',
      'background-size': '0%',
      'background-position': 'center',
      'box-shadow': '0px 0px 0px 0px rgba(0,0,0,0.00)',
    }),
  ),
  state(
    'marked',
    style({
      'background-image': "url('/assets/icones/check-Feito.png')",
      'background-size': '100%',
      'background-position': 'center',
      'box-shadow': '0px 0px 0px 5px rgba(0,0,0,0.06)',
    }),
  ),
  transition('notMarked  <=> marked', [animate(300)]),
]);

export const showCardTrigger = trigger('showCard', [
  transition(':enter', [
    style({
      transform: 'scale(0)',
    }),
    animate(
      300,
      style({
        opacity: 1,
        transform: 'scale(1)',
      }),
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        transform: 'scale(0)',
      }),
    ),
  ]),
]);

export const checkRemoveTrigger = trigger('removeState', [
  state(
    'show',
    style({
      transform: 'scale(1)',
    }),
  ),
  state(
    'hidden',
    style({
      transform: 'scale(0)',
    }),
  ),
  transition('show  => hidden', [animate(300)]),
]);

export const highlightedStateEditTrigger = trigger('highlightedEditState', [
  state(
    'default',
    style({
      border: '3px solid #B2B6FF',
    }),
  ),
  state(
    'highlightedEdited',
    style({
      border: '2px solid #B2B6FF',
    }),
  ),
  transition('default => highlightedEdited', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      }),
    ),
    animate(200),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(
      '400ms cubic-bezier(0.33, 1, 0.68, 1)',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0)',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'scale(0.5)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1,
        }),
      ]),
    ),
  ]),
  transition(':leave', [
    animate(
      '400ms cubic-bezier(0.33, 1, 0.68, 1)',
      keyframes([
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'scale(0.5)',
          offset: 0,
        }),
        style({
          opacity: 0,
          transform: 'scale(0)',
          offset: 1,
        }),
      ]),
    ),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(
          200,
          style({
            backgroundColor: '#63B77C',
          }),
        ),
        animate(
          100,
          style({
            transform: 'scale(1.1)',
          }),
        ),
      ]),
      animate(
        200,
        style({
          transform: 'scale(1)',
        }),
      ),
    ]),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(
          200,
          style({
            backgroundColor: '#6C757D',
          }),
        ),
        animate(
          100,
          style({
            transform: 'scale(1.1)',
          }),
        ),
      ]),
      animate(
        200,
        style({
          transform: 'scale(1)',
        }),
      ),
    ]),
  ]),
]);

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query(
      'input.ng-invalid:focus, select.ng-invalid:focus',
      [
        animate(
          '0.5s',
          keyframes([
            style({ border: '1px solid red' }),
            style({ transform: 'translateX(0)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(0)' }),
          ]),
        ),
      ],
      { optional: true },
    ),
  ]),
]);

export const showMsgTrigger = trigger('showMsg', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      }),
    ),
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        stagger(200, [
          animate(
            '500ms ease-out',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4,
              }),
              style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1,
              }),
            ]),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
