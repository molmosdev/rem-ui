import { Component, signal } from '@angular/core';
import { Switch, Text } from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-switch-details',
  imports: [Switch, Text],
  templateUrl: './switch-details.component.html',
  styleUrl: './switch-details.component.css',
})
export default class SwitchDetailsComponent {
  /** The label of the switch. */
  label = signal<string>('This is a switch');

  /** Indicates whether the switch is on. */
  value = signal<boolean>(false);
}
