import { Component, signal } from '@angular/core';
import { Search } from '../../../../../lib/src/core/components/search/search.component';
import { Option } from '../../../../../lib/src/public-api';

@Component({
  selector: 'app-introduction',
  imports: [Search, Option],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export default class IntroductionComponent {
  searchValue = signal<string>('');

  handleSearchChange(value: string) {
    this.searchValue.set(value);
  }
}
