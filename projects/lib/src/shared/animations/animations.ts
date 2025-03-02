import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
  sequence,
  animateChild,
} from '@angular/animations';

export const errorStateTrigger = trigger('errorStateTrigger', [
  state(
    'true',
    style({
      color: 'var(--error-foreground, #c40000ab)',
      backgroundColor: 'var(--error, #fff0f0)',
      borderColor: 'var(--error-foreground, #c40000ab)',
    })
  ),
  state(
    'false',
    style({
      color: 'var(--input-foreground, #798194)',
      backgroundColor:
        'color-mix(in srgb, var(--foreground, #798194) 5%, var(--background, #ffffff))',
      borderColor: 'var(--border-color, transparent)',
    })
  ),
  transition('false <=> true', animate('0.2s')),
]);

export const selectErrorStateTrigger = trigger('selectErrorStateTrigger', [
  state(
    'true',
    style({
      color: 'var(--error-foreground, #c40000ab)',
      borderColor: 'var(--error-foreground, #c40000ab)',
    })
  ),
  state(
    'false',
    style({
      color: 'var(--input-foreground, #798194)',
      borderColor: 'var(--border-color, transparent)',
    })
  ),
  transition('false <=> true', animate('0.2s')),
]);

export const labelErrorStateTrigger = trigger('labelErrorStateTrigger', [
  state(
    'true',
    style({
      color: 'var(--error-foreground, #c40000ab)',
    })
  ),
  state(
    'false',
    style({
      color: 'var(--input-foreground, #798194)',
    })
  ),
  transition('false <=> true', animate('0.2s')),
]);

export const errorRightButtonStateTrigger = trigger(
  'errorRightButtonStateTrigger',
  [
    state(
      'true',
      style({
        color: 'var(--error-foreground, #c40000ab)',
        background:
          'linear-gradient(to right, transparent, var(--error, #fff0f0) 50%)',
        borderColor: 'var(--error-foreground, #c40000ab)',
      })
    ),
    state(
      'false',
      style({
        color: 'var(--input-foreground, #798194)',
        background:
          'linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--foreground, #798194) 5%, var(--background, #ffffff)) 50%)',
        borderColor: 'var(--border-color, transparent)',
      })
    ),
    transition('false <=> true', animate('0.2s')),
  ]
);

export const selectErrorRightButtonStateTrigger = trigger(
  'selectErrorRightButtonStateTrigger',
  [
    state(
      'true',
      style({
        color: 'var(--error-foreground, #c40000ab)',
        background:
          'linear-gradient(to right, transparent, var(--error, #fff0f0) 50%)',
        borderColor: 'var(--error-foreground, #c40000ab)',
      })
    ),
    state(
      'false',
      style({
        color: 'var(--input-foreground, #798194)',
        background:
          'linear-gradient(90deg, transparent 0%, var(--bg-color, #ffffff) 50%)',
        borderColor: 'var(--border-color, transparent)',
      })
    ),
    transition('false <=> true', animate('0.2s')),
  ]
);

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

export const labelStateTrigger = trigger('labelStateTrigger', [
  state(
    'normal',
    style({ top: '50%', fontSize: '100%', transform: 'translateY(-50%)' })
  ),
  state(
    'small',
    style({ top: '0.344rem', fontSize: '70%', transform: 'translateY(0)' })
  ),
  transition('normal <=> small', [animate('0.2s')]),
]);

export const rotateArrowTrigger = trigger('rotateArrowTrigger', [
  state('expanded', style({ transform: 'rotate(180deg)' })),
  state('collapsed', style({ transform: 'rotate(0deg)' })),
  transition('expanded <=> collapsed', animate('200ms ease-in-out')),
]);

export const textareaLabelStateTrigger = trigger('textareaLabelStateTrigger', [
  state(
    'normal',
    style({
      top: '0.688rem',
      fontSize: '100%',
      transform: 'translateY(0)',
    })
  ),
  state(
    'small',
    style({
      top: '0.344rem',
      fontSize: '70%',
      transform: 'translateY(0)',
    })
  ),
  transition('normal <=> small', [animate('0.2s')]),
]);

export const inputPaddingStateTrigger = trigger('inputPaddingStateTrigger', [
  state('normal', style({ padding: '0.688rem var(--padding-left)' })),
  state('small', style({ padding: '1.1rem var(--padding-left) 0.22rem' })),
  transition('normal <=> small', animate('0.1s')),
]);

export const selectInputPaddingStateTrigger = trigger(
  'selectInputPaddingStateTrigger',
  [
    state('normal', style({ padding: '0.688rem var(--padding-left)' })),
    state('small', style({ padding: '1.1rem var(--padding-left) 0.22rem' })),
    transition('normal => small', [
      sequence([
        animate('0.1s'),
        query('@fadeInFadeOutTrigger', [animateChild()]),
      ]),
    ]),
    transition('small => normal', [
      sequence([
        query('@fadeInFadeOutTrigger', [animateChild()]),
        animate('0.1s'),
      ]),
    ]),
  ]
);

export const disabledStateTrigger = trigger('disabledStateTrigger', [
  state(
    'true',
    style({
      opacity: 0.5,
      pointerEvents: 'none',
    })
  ),
  state(
    'false',
    style({
      opacity: 1,
      pointerEvents: 'auto',
    })
  ),
  transition('false <=> true', animate('0.2s')),
]);
