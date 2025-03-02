import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const expandCollapseTrigger = trigger('expandCollapseTrigger', [
  state('expanded', style({ height: '*', opacity: 1 })),
  state('collapsed', style({ height: '0px', opacity: 0 })),
  transition('expanded <=> collapsed', animate('200ms ease-in-out')),
]);
