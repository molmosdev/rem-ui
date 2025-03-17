import { Component, input } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import {
  Select,
  Switch,
  Button,
  TextField,
  Icon,
  Option,
} from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-args',
  imports: [TextField, Select, Option, Switch, Button, Icon],
  templateUrl: './args.component.html',
  styleUrl: './args.component.css',
})
export class ArgsComponent {
  /** List of arguments to display */
  args = input.required<IArg[]>();
}
