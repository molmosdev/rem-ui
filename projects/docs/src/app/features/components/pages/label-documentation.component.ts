import { Component } from '@angular/core';
import { Alert } from '../../../../../../lib/src/core/components/alert/alert.component';

@Component({
  selector: 'article[app-label-documentation]',
  template: `
    <r-alert type="info" title="Components are in alpha" icon="Rocket">
      Try them out! We'd love to hear your feedback! Expect breaking changes!
    </r-alert>
  `,
  imports: [Alert],
})
export default class LabelDocumentationComponent {}
