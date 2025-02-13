import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  computed,
  inject,
  signal,
  ViewContainerRef,
  TemplateRef,
  viewChild,
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

/**
 * Component for displaying dynamic content based on route data.
 */
@Component({
  selector: 'app-component',
  standalone: true,
  imports: [NgComponentOutlet, Text, Number, Select, Option, Switch],
  templateUrl: './component.component.html',
})
export default class ComponentComponent {
  /** Injected ActivatedRoute to access route data. */
  route = inject(ActivatedRoute);

  /** Injected ViewContainerRef to manage view containers. */
  vcr = inject(ViewContainerRef);

  /** Signal to hold the component data from the route snapshot. */
  componentData = signal<IComponentData>(
    this.route.snapshot.data as IComponentData
  );

  /** Computed property to derive the component from componentData. */
  component = computed(() => this.componentData().component);

  /** Computed property to derive the inputs from componentData. */
  inputs = computed(() => this.componentData().inputs);

  /** Computed property to resolve inputs into a key-value pair object. */
  resolvedInputs = computed(() => {
    const inputsArray = this.inputs();
    return Object.fromEntries(
      inputsArray.map(input => [input.key, input.value()])
    );
  });

  /** ViewChild to get reference to the ng-content template. */
  ngContentTemplate = viewChild<TemplateRef<any>>('ngContentTemplate');

  /** Computed property to create embedded views from the templates.*/
  myContent = computed(() => {
    return this.ngContentTemplate()
      ? [this.vcr.createEmbeddedView(this.ngContentTemplate()!).rootNodes]
      : [];
  });
}
