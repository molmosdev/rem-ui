import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { createCustomElement } from '@angular/elements';
import {
  Button,
  Dialog,
  DialogTitle,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTitle,
  DropdownTrigger,
  Number,
  Option,
  Password,
  Row,
  RowItem,
  Search,
  Select,
  Spinner,
  Switch,
  Tab,
  Table,
  Tabs,
  Text,
  Textarea,
  User,
  VerticalNav,
  VerticalNavGroup,
  VerticalNavItem,
  SidePanel,
} from '@rem-ui/angular';

createApplication(appConfig)
  .then(app => {
    const rButton = createCustomElement(Button, { injector: app.injector });
    customElements.define('r-button', rButton);

    const rDialog = createCustomElement(Dialog, { injector: app.injector });
    customElements.define('r-dialog', rDialog);

    const rDialogTitle = createCustomElement(DialogTitle, {
      injector: app.injector,
    });
    customElements.define('r-dialog-title', rDialogTitle);

    const rDropdown = createCustomElement(Dropdown, { injector: app.injector });
    customElements.define('r-dropdown', rDropdown);

    const rDropdownContent = createCustomElement(DropdownContent, {
      injector: app.injector,
    });
    customElements.define('r-dropdown-content', rDropdownContent);

    const rDropdownItem = createCustomElement(DropdownItem, {
      injector: app.injector,
    });
    customElements.define('r-dropdown-item', rDropdownItem);

    const rDropdownTitle = createCustomElement(DropdownTitle, {
      injector: app.injector,
    });
    customElements.define('r-dropdown-title', rDropdownTitle);

    const rDropdownTrigger = createCustomElement(DropdownTrigger, {
      injector: app.injector,
    });
    customElements.define('r-dropdown-trigger', rDropdownTrigger);

    const rNumber = createCustomElement(Number, { injector: app.injector });
    customElements.define('r-number', rNumber);

    const rOption = createCustomElement(Option, { injector: app.injector });
    customElements.define('r-option', rOption);

    const rPassword = createCustomElement(Password, { injector: app.injector });
    customElements.define('r-password', rPassword);

    const rSearch = createCustomElement(Search, { injector: app.injector });
    customElements.define('r-search', rSearch);

    const rSelect = createCustomElement(Select, { injector: app.injector });
    customElements.define('r-select', rSelect);

    const rSpinner = createCustomElement(Spinner, { injector: app.injector });
    customElements.define('r-spinner', rSpinner);

    const rSwitch = createCustomElement(Switch, { injector: app.injector });
    customElements.define('r-switch', rSwitch);

    const rTable = createCustomElement(Table, { injector: app.injector });
    customElements.define('r-table', rTable);

    const rRow = createCustomElement(Row, { injector: app.injector });
    customElements.define('r-row', rRow);

    const rRowItem = createCustomElement(RowItem, { injector: app.injector });
    customElements.define('r-row-item', rRowItem);

    const rTabs = createCustomElement(Tabs, { injector: app.injector });
    customElements.define('r-tabs', rTabs);

    const rTab = createCustomElement(Tab, { injector: app.injector });
    customElements.define('r-tab', rTab);

    const rText = createCustomElement(Text, { injector: app.injector });
    customElements.define('r-text', rText);

    const rTextarea = createCustomElement(Textarea, { injector: app.injector });
    customElements.define('r-textarea', rTextarea);

    const rUser = createCustomElement(User, { injector: app.injector });
    customElements.define('r-user', rUser);

    const rVerticalNav = createCustomElement(VerticalNav, {
      injector: app.injector,
    });
    customElements.define('r-vertical-nav', rVerticalNav);

    const rVerticalNavGroup = createCustomElement(VerticalNavGroup, {
      injector: app.injector,
    });
    customElements.define('r-vertical-nav-group', rVerticalNavGroup);

    const rVerticalNavItem = createCustomElement(VerticalNavItem, {
      injector: app.injector,
    });
    customElements.define('r-vertical-nav-item', rVerticalNavItem);

    const rSidePanel = createCustomElement(SidePanel, {
      injector: app.injector,
    });
    customElements.define('r-side-panel', rSidePanel);
  })
  .catch(err => console.error(err));
