import { MegaButton } from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, storyDefault } from '../../.storybook/helpers';
import './classnames.stories.css';

export default {
  component: MegaButton,
  title: 'Design System/MegaButton',
  argTypes: {
    accessKey: {
      control: 'text',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: '' },
      },
    },
    ariaDescribedby: { table: { category: category.aria } },
    children: { table: { category: category.props } },
    className: { ...storyDefault.className },
    disabled: {
      description:
        'Hvis knapp er disabled så overskrives variant-stilene med :disable stil',
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    href: {
      description: 'Gjør det mulig å bruke knappen som en lenke',
      control: 'text',
      table: { category: category.props },
    },
    id: { ...storyDefault.id },
    isExternal: {
      defaultValue: false,
      control: 'boolean',
      description:
        'Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen  er en lenke til en side på et annet domene.',
      table: {
        category: category.props,
      },
    },
    key: { ...storyDefault.key },
    onClick: { ...storyDefault.onEvent },
    onFocus: { ...storyDefault.onEvent },
    onBlur: { ...storyDefault.onEvent },
    ref: { ...storyDefault.ref },
    tabIndex: { table: { category: category.htmlAttribute } },
  },
} as ComponentMeta<typeof MegaButton>;

const TemplateDefault: ComponentStory<typeof MegaButton> = (args) => (
  <MegaButton {...args} onClick={action('KlikkEvent MegaButton')}>
    {args.children}
  </MegaButton>
);

export const Default = TemplateDefault.bind({});

const baseArgs = {
  children: 'Klikk her',
};
const designUrlTilstander =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1717%3A8893';
const designUrlLuft =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1717%3A8987';
Default.args = {
  ...baseArgs,
};

Default.storyName = 'Default';
Default.parameters = {
  displayName: 'MegaButton',
  design: [
    {
      name: 'Varianter og tilstander',
      type: 'figma',
      url: designUrlTilstander,
    },
    {
      name: 'Luft og fontstørrelser',
      type: 'figma',
      url: designUrlLuft,
    },
  ],
  backgrounds: {
    values: [
      { name: 'Svart', value: '#000' },
      { name: 'Hvit', value: '#fff' },
    ],
  },
};
