import { Component, signal } from '@angular/core';
import { Spinner, Switch } from '../../../../../../../lib/src/public-api';
import { Number } from '../../../../../../../lib/src/core/components/number/number.component';

@Component({
  selector: 'app-spinner-details',
  imports: [Spinner, Switch, Number],
  templateUrl: './spinner-details.component.html',
  styleUrl: './spinner-details.component.css',
})
export default class SpinnerDetailsComponent {
  /** Indicates whether the spinner is active. */
  active = signal<boolean>(true);

  /** The size of the spinner. */
  size = signal<number>(30);
}
