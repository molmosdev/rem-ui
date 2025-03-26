import { Component, input } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Select, Switch, Input } from '../../../../../../../lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { Label } from '../../../../../../../lib/src/shared/components/label/label.component';

@Component({
  selector: 'app-args',
  imports: [Input, Select, Switch, FormsModule, Label],
  templateUrl: './args.component.html',
  styleUrl: './args.component.css',
})
export class ArgsComponent {
  /** List of arguments to display */
  readonly args = input.required<IArg[]>();
}
