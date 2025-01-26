import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'r-password',
  imports: [NgClass],
  templateUrl: './password.component.html',
})
export class Password {
  id = input<string>('password');
  placeholder = input<string>('Password');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  changeEmitter = output<string | null>();
}
