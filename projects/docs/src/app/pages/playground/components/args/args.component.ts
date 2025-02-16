import { Component, input } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import {
  Text,
  Number,
  Select,
  Option,
  Switch,
} from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-args',
  imports: [Text, Number, Select, Option, Switch],
  templateUrl: './args.component.html',
  styleUrl: './args.component.css',
})
export class ArgsComponent {
  /** List of arguments to display */
  args = input.required<IArg[]>();
}
