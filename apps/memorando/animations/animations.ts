import {
  animate,
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
