import { WritableSignal } from '@angular/core';
import { Option } from '../../../../../../lib/src/public-api';

export interface IArg {
  label: string;
  type: string;
  value: WritableSignal<any>;
  options?: Option[];
  hidden?: boolean;
}
