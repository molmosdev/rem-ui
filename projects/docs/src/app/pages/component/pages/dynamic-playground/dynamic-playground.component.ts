import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  computed,
  inject,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  Select,
  Text,
  Number,
  Switch,
  Option,
} from '../../../../../../../lib/src/public-api';
import { ActivatedRoute } from '@angular/router';
import { IComponentData } from '../../component.routes';

@Component({
  selector: 'app-dynamic-playground',
  imports: [NgComponentOutlet, Text, Number, Select, Option, Switch],
  templateUrl: './dynamic-playground.component.html',
})
export default class DynamicPlaygroundComponent {
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
