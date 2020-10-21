import {animate, state, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('flyInOut', [
    state('in',
      style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    state('out',
      style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
    transition('in => out', [
      animate(100)
    ]),
    transition('out => in', [
      animate(200)
    ])
  ]);

export const fadeInOut =
  trigger('fadeInOut', [
    state('in',
      style({
        opacity: 1
      })),
    state('out',
      style({
        opacity: 0
      })),
    transition('in => out', [
      animate(100)
    ]),
    transition('out => in', [
      animate(200)
    ])
  ]);
