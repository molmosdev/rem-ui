import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const overlayTrigger = trigger('overlayTrigger', [
  state(
    'hidden',
    style({
      opacity: 0,
      visibility: 'hidden',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      visibility: 'visible',
    })
  ),
  transition('hidden <=> visible', [animate('0.3s ease-out')]),
]);

export const horizontalSlideTrigger = trigger('horizontalSlideTrigger', [
  state(
    'closedRight',
    style({
      transform: 'translateX(100%)',
      right: '0',
    })
  ),
  state(
    'openRight',
    style({
      transform: 'translateX(0)',
      right: '0',
    })
  ),
  state(
    'closedLeft',
    style({
      transform: 'translateX(-100%)',
      left: '0',
    })
  ),
  state(
    'openLeft',
    style({
      transform: 'translateX(0)',
      left: '0',
    })
  ),
  transition('closedRight <=> openRight', [
    animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)'),
  ]),
  transition('closedLeft <=> openLeft', [
    animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)'),
  ]),
]);
