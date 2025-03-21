import { Component, input } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import {
  Select,
  Switch,
  Button,
  TextField,
  Icon,
} from '../../../../../../../lib/src/public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-args',
  imports: [TextField, Select, Switch, Button, Icon, FormsModule],
  templateUrl: './args.component.html',
  styleUrl: './args.component.css',
})
export class ArgsComponent {
  /** List of arguments to display */
  args = input.required<IArg[]>();
}
