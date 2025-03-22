import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../playground/components/code-block/code-block.component';
import { Button, Icon } from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-button-documentation',
  templateUrl: './button-documentation.component.html',
  styleUrl: './button-documentation.component.css',
  imports: [CodeBlockComponent, Button, Icon],
})
export default class ButtonDocumentationComponent {}
