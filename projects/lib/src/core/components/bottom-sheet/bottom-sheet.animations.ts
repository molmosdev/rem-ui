import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const verticalSlideTrigger = trigger('verticalSlideTrigger', [
  state('open', style({ transform: 'translateY(0)' })),
  state('closed', style({ transform: 'translateY(100%)' })),
  state(
    'intermediate',
    style({ transform: 'translateY({{currentTranslateY}}px)' }),
    {
      params: { currentTranslateY: 0 },
    }
  ),
  transition('open <=> closed', animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')),
  transition(
    'intermediate => open',
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
  ),
  transition(
    'intermediate => closed',
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
  ),
]);
