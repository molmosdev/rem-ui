import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component',
  imports: [JsonPipe],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export default class ComponentComponent {
  route = inject(ActivatedRoute);
  componentData = signal(this.route.snapshot.data);
}
