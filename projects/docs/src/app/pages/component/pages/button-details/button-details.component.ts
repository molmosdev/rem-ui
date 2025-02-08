import { Component, signal } from '@angular/core';
import {
  Button,
  Text,
  Select,
  Option,
  Switch,
} from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-button-details',
  imports: [Button, Text, Select, Option, Switch],
  templateUrl: './button-details.component.html',
  styleUrl: './button-details.component.css',
})
export default class ButtonDetailsComponent {
  /** The type of the button. */
  type = signal<'primary' | 'secondary' | 'ghost'>('primary');

  /** The label of the button. */
  label = signal<string>('This is a button');

  /** Indicates whether the button is in a loading state. */
  loading = signal<boolean>(false);

  /** Indicates whether the button is disabled. */
  disabled = signal<boolean>(false);

  /** Configuration for the link, if the button is used as a link. */
  href = signal<string>('https://www.rem.molmos.dev');
}
