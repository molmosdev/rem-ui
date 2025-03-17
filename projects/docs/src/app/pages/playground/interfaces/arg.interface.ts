import { WritableSignal } from '@angular/core';

export interface IArg {
  label: string;
  type: string;
  value: WritableSignal<any>;
  options?: {
    value: string | null;
    text: string;
    disabled?: boolean;
  }[];
  hidden?: boolean;
}
