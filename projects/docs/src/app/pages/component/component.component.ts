import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  computed,
  inject,
  signal,
  ViewContainerRef,
  TemplateRef,
  viewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComponentData } from './component.routes';
import {
  Option,
  Select,
  Text,
  Switch,
  Number,
} from '../../../../../lib/src/public-api';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [NgComponentOutlet, Text, Number, Select, Option, Switch],
  templateUrl: './component.component.html',
})
export default class ComponentComponent {
  route = inject(ActivatedRoute);
  vcr = inject(ViewContainerRef);

  // Initialize the signal with the route snapshot data
  componentData = signal<IComponentData>(
    this.route.snapshot.data as IComponentData
  );

  // Computed properties to derive values from componentData
  component = computed(() => this.componentData().component);
  inputs = computed(() => this.componentData().inputs);

  resolvedInputs = computed(() => {
    const inputsArray = this.inputs();
    return Object.fromEntries(
      inputsArray.map(input => [input.key, input.value()])
    );
  });

  // ViewChildren to get references to the templates
  ngContentTemplates = viewChildren<TemplateRef<any>>('ngContentTemplate');

  // Computed property to create embedded views from the templates
  myContent = computed(() => {
    const templates = this.ngContentTemplates();
    if (templates) {
      return templates.map(
        template => this.vcr.createEmbeddedView(template).rootNodes
      );
    }
    return [];
  });
}
