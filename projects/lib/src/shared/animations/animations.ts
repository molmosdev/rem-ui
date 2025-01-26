import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOutTrigger = trigger('fadeInOutTrigger', [
  transition(
    ':enter',
    [
      style({
        opacity: 0,
        scale: '{{ scaleFrom }}',
        transform: '{{ translateFrom }}',
      }),
      animate(
        '{{ duration }}',
        style({
          opacity: 1,
          scale: '{{ scaleTo }}',
          transform: '{{ translateTo }}',
        })
      ),
    ],
    {
      params: {
        scaleFrom: 1,
        scaleTo: 1,
        translateFrom: '',
        translateTo: '',
        duration: '0.1s',
      },
    }
  ),
  transition(
    ':leave',
    [
      animate(
        '{{ duration }}',
        style({
          opacity: 0,
          scale: '{{ scaleFrom }}',
          transform: '{{ translateFrom }}',
        })
      ),
    ],
    {
      params: {
        scaleFrom: 1,
        translateFrom: '',
        duration: '0.1s',
      },
    }
  ),
]);
