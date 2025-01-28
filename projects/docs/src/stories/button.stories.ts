import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from '@rem-ui/angular';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  render: args => {
    // @ts-expect-error ngContent is not a property of Button
    const { ngContent, ...props } = args;
    return {
      props,
      template: `
        <r-button [type]="type" [loading]="loading" [disabled]="disabled">
          ${ngContent}
        </r-button>
      `,
    };
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'ghost'] },
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    // @ts-expect-error ngContent is not a property of Button
    ngContent: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    loading: false,
    disabled: false,
    // @ts-expect-error ngContent is not a property of Button
    ngContent: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    loading: false,
    disabled: false,
    // @ts-expect-error ngContent is not a property of Button
    ngContent: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    loading: false,
    disabled: false,
    // @ts-expect-error ngContent is not a property of Button
    ngContent: 'Ghost Button',
  },
};

export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
    disabled: false,
    // @ts-expect-error ngContent is not a property of Button
    ngContent: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    loading: false,
    disabled: true,
    // @ts-expect-error ngContent is not a property of Button
    ngContent: 'Disabled Button',
  },
};
