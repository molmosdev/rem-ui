import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'r-user',
  imports: [NgClass],
  templateUrl: './user.component.html',
})
export class User {
  id = input<string>('user');
  placeholder = input<string>('Password');
  label = input<string | undefined>(undefined);
  error = input<boolean>(false);
  changeEmitter = output<string | null>();
}
