import { IconBtnComponent } from '@test/ui-ds';
import type { Meta, StoryObj } from '@storybook/angular';
import { iconNameStoryType } from '../storiesModals/icon-btn-modal';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconBtnComponent> = {
  title: 'Example/Icon-button',
  component: IconBtnComponent,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ["control", "_renderer", "isRequired", "errorParams", "parentFormContainer", "controlValidity", "ngOnDestroy", "ngOnInit", "overrideInlineStyles", "focusEmitter", "elementRef"]
    }
  },
  render: (args) => ({
    props: args,
  }),
  argTypes: {
    icon: {
      control: 'select',
      options: [...iconNameStoryType]
    },
    fontSize: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    Class: {
      control: 'text',
    },
    Style: {
      control: 'text',
      type: 'string'
    }
  },
};

export default meta;
type Story = StoryObj<IconBtnComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Iconbutton: Story = {
  args: {
    icon: "location",
    fontSize: "fs-1",
    disabled: false,
    title: "Land Area",
    Class: "btn text-primary",
    Style: "font-size: 3rem; padding:1rem;",
  },
};
