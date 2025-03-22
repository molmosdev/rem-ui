import { Component, input } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Select, Switch, Input } from '../../../../../../../lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from '../../../../../../../lib/src/shared/components/float-label/float-label.component';

@Component({
  selector: 'app-args',
  imports: [Input, Select, Switch, FormsModule, FloatLabel],
  templateUrl: './args.component.html',
  styleUrl: './args.component.css',
})
export class ArgsComponent {
  /** List of arguments to display */
  args = input.required<IArg[]>();
}
