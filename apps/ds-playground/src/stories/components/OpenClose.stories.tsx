import { OpenClose } from '@skatteetaten/ds-collections';
import {
  densityArr,
  headingAsArr,
  positionArr,
} from '@skatteetaten/ds-core-utils';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: OpenClose,
  title: 'Komponenter/OpenClose',
  argTypes: {
    // Props
    title: {
      control: 'text',
      table: {
        category: category.props,
      },
    },
    titleAs: {
      options: [...headingAsArr],
      // eslint-disable-next-line sonarjs/no-duplicate-string
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    variant: {
      options: [...densityArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    iconPosition: {
      options: [...positionArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    isOnClickOnlyFiredOnOpen: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    isExpanded: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    showUnderline: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    //Events
    onClick: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof OpenClose>;

export const Preview: StoryObj<typeof OpenClose> = {
  args: {
    children: 'Innhold som vises bare når OpenClose er expanded',
    title: 'OpenClose (Åpne og lukke)',
  },
};

const exampleTitle = 'Hva er aksjesparekonto';
const exampleContent =
  'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. ' +
  'Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ';

export const Example: StoryFn<typeof OpenClose> = (_args) => (
  <>
    <Heading level={4} as={'h2'}>
      {'Aksjesparekonto (ASK)'}
    </Heading>
    <Paragraph>
      {
        'Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler.'
      }
    </Paragraph>
    <OpenClose title={exampleTitle} isExpanded>
      {exampleContent}
    </OpenClose>
    <OpenClose title={exampleTitle}>{exampleContent}</OpenClose>
    <OpenClose title={exampleTitle} showUnderline>
      {exampleContent}
    </OpenClose>
    <OpenClose title={exampleTitle} iconPosition={'right'}>
      {exampleContent}
    </OpenClose>
    <OpenClose title={exampleTitle} variant={'compact'}>
      {exampleContent}
    </OpenClose>
    <OpenClose
      title={exampleTitle}
      iconPosition={'right'}
      variant={'compact'}
      showUnderline
    >
      {exampleContent}
    </OpenClose>
  </>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
