import {
  getParagraphVariantDefault,
  Heading,
  Paragraph,
  paragraphVariantArr,
} from '@skatteetaten/ds-typography';
import { StoryFn, Meta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { getVersion } from '../utils/version.utils';

export default {
  component: Paragraph,
  title: 'Komponenter/Paragraph',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    variant: {
      options: [...paragraphVariantArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getParagraphVariantDefault() },
      },
    },
  },
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Paragraph>;

export const Default: StoryFn<typeof Paragraph> = () => (
  <Paragraph>{loremIpsum}</Paragraph>
);

export const Example: StoryFn<typeof Paragraph> = () => (
  <>
    <Heading as={'h1'} level={1} hasSpacing>
      {'Flere oppgir kryptoverdier i skattemeldingen'}
    </Heading>
    <Paragraph variant={'ingress'} hasSpacing>
      {'Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15.000 til 41.000. ' +
        'Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere.'}
    </Paragraph>
    <Paragraph hasSpacing>
      {'- Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. ' +
        'Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektør Nina Schanke Funnemark.'}
    </Paragraph>
    <Paragraph>
      {'Sammenlignet med '}
      <a
        href={
          'https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/'
        }
      >
        {'tidligere år'}
      </a>
      {
        ' oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig.'
      }
    </Paragraph>
  </>
);
