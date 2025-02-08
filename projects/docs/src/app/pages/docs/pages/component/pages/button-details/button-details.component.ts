import { Component, signal } from '@angular/core';
import { Button } from '../../../../../../../../../lib/src/core/components/button/button.component';
import { Text } from '../../../../../../../../../lib/src/core/components/text/text.component';
import { Select } from '../../../../../../../../../lib/src/core/components/select/select.component';
import { Option } from '../../../../../../../../../lib/src/shared/components/option/option.component';
import { Switch } from '../../../../../../../../../lib/src/core/components/switch/switch.component';

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
