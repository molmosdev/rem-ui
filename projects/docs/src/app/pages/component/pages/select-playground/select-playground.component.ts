import { Component, computed, inject, signal } from '@angular/core';
import { Select } from '../../../../../../../lib/src/core/components/select/select.component';
import { Option } from '../../../../../../../lib/src/shared/components/option/option.component';
import { List } from '../../../../../../../lib/src/core/components/list/list.component';
import {
  ListItem,
  ListItemContent,
} from '../../../../../../../lib/src/core/components/list/components/list-item/list-item.component';
import { Tabs } from '../../../../../../../lib/src/core/components/tabs/tabs.component';
import { Tab } from '../../../../../../../lib/src/core/components/tabs/components/tab/tab.component';
import { ResponsiveService } from '../../../../../../../lib/src/public-api';
import { Text } from '../../../../../../../lib/src/core/components/text/text.component';
import { Switch } from '../../../../../../../lib/src/core/components/switch/switch.component';

@Component({
  selector: 'app-select-playground',
  imports: [Select, Option, List, ListItem, Tabs, Tab, Text, Switch],
  templateUrl: './select-playground.component.html',
})
/**
 * Component for the select playground.
 */
export default class SelectPlaygroundComponent {
  selectedValue = signal<string | null>(null);
  options = signal<{ id: string; listContent: ListItemContent[] }[]>([
    {
      id: 'Option 1',
      listContent: [{ label: 'Option 1', value: 'Monday', type: 'string' }],
    },
    {
      id: 'Option 2',
      listContent: [{ label: 'Option 2', value: 'Tuesday', type: 'string' }],
    },
    {
      id: 'Option 3',
      listContent: [{ label: 'Option 3', value: 'Wednesday', type: 'string' }],
    },
  ]);
  selectedTab = signal<'controls' | 'list'>('controls');
  responsiveService = inject(ResponsiveService);
  isMobile = computed(
    () => this.responsiveService.currentDevice() === 'mobile'
  );
  label = signal<string>('Select an option');
  clearable = signal<boolean>(true);
  error = signal<boolean>(false);
  positioning = signal<'up' | 'down'>('down');
  noResultsMessage = signal<string>('No results found');

  /**
   * Returns the string value of the content at the specified index.
   * @param index The index of the content.
   * @returns A computed string or null value.
   */
  returnString = (value: string | number | null) =>
    computed(() => value as string);

  /**
   * Removes an option by its ID.
   * @param id The ID of the option to remove.
   */
  removeOption(id: string): void {
    const options = [...this.options()];
    const index = options.findIndex(option => option.id === id);
    if (index !== -1) {
      options.splice(index, 1);
      this.options.set(options);
    }
  }

  /**
   * Adds a new option to the list.
   */
  addOption(): void {
    const options = [...this.options()];
    options.push({
      id: `Option ${options.length + 1}`,
      listContent: [
        {
          label: `Option ${options.length + 1}`,
          value: 'New Option',
          type: 'string',
        },
      ],
    });
    this.options.set(options);
  }
}
