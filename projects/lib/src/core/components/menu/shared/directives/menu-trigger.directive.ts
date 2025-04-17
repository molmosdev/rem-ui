import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive, inject, input, OnInit } from '@angular/core';
import { Position } from '../../../attached-box/types/position.type';
import { ConnectedPosition } from '@angular/cdk/overlay';

@Directive({
  selector: '[menuTriggerFor]',
  hostDirectives: [
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: menuTriggerFor'],
    },
  ],
})
export class MenuTrigger implements OnInit {
  trigger = inject(CdkMenuTrigger);
  readonly menuTriggerPosition = input<Position>('right-top');

  ngOnInit(): void {
    this.setPosition();
  }

  setPosition(): void {
    const positionMap: Record<Position, ConnectedPosition> = {
      'top-left': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
      },
      'top-center': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      },
      'top-right': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
      },
      'bottom-left': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      },
      'bottom-center': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
      'bottom-right': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
      },
      'left-top': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
      },
      'left-center': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
      },
      'left-bottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
      },
      'right-top': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
      },
      'right-center': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
      },
      'right-bottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
      },
    };

    const connectedPosition = positionMap[this.menuTriggerPosition()];
    this.trigger.menuPosition = [connectedPosition];
  }
}
