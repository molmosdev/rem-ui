import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'rem-ui',
    brandUrl: 'https://rem.molmos.dev',
    brandImage: './rem-logo.png',
    brandTarget: '_self',
    fontBase: '"Inter", sans-serif',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
  }),
});
