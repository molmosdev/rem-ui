import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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

export const overlayTrigger = trigger('overlayTrigger', [
  state(
    'hidden',
    style({
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
    })
  ),
  transition('hidden <=> visible', [animate('0.3s ease-out')]),
]);
