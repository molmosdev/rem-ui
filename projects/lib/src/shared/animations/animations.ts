import { animate, style, transition, trigger } from '@angular/animations';

/* Used in dropdown-content, dialog y navigation */
export const fadeInFadeOutTrigger = trigger('fadeInFadeOutTrigger', [
  transition(
    ':enter',
    [
      style({
        opacity: 0,
        scale: '{{ scaleFrom }}',
        transform: '{{ translateFrom }}',
      }),
      animate(
        '{{ duration }} {{ enterDelay }}',
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
        enterDelay: '0s',
      },
    }
  ),
  transition(
    ':leave',
    [
      animate(
        '{{ duration }} {{ leaveDelay }}',
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
        leaveDelay: '0s',
      },
    }
  ),
]);
