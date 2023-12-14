import { dsI18n, Languages } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPicker } from '../../../../../libs/ds-layout/src/TopBannerLangPicker/TopBannerLangPicker';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPickerProps } from '../../../../../libs/ds-layout/src/TopBannerLangPicker/TopBannerLangPicker.types';

const meta = {
  component: TopBannerLangPicker,
  title: 'Tester/TopBanner/TopBannerLangPicker (intern)',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    locale: { table: { disable: true } },
    showSami: { table: { disable: true } },
    // Events
    onLanguageClick: { table: { disable: true } },
  },
} as Meta<typeof TopBannerLangPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

const menuText = dsI18n.t('ds_layout:topbannerbutton.Menu');
const bokmalText = 'Bokmål';
const englishText = 'English';
const defaultArgs: TopBannerLangPickerProps = {};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (LanguagePicker A1, A2 delvis, A4, A7, B1, B2, B3)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: `${bokmalText} ${menuText}`,
    });
    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('UL');
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(4);
    const bokmalButton = canvas.getByRole('button', { name: bokmalText });
    await expect(bokmalButton).toHaveAttribute('lang', 'nb');
    await expect(bokmalButton).toHaveAttribute('aria-current', 'true');
    const nynorskButton = canvas.getByRole('button', { name: 'Nynorsk' });
    await expect(nynorskButton).toHaveAttribute('lang', 'nn');
    const englishButton = canvas.getByRole('button', { name: englishText });
    await expect(englishButton).toHaveAttribute('lang', 'en');
    const samiskButton = canvas.getByRole('button', { name: 'Sámegiella' });
    await expect(samiskButton).toHaveAttribute('lang', 'se');
    // eslint-disable-next-line testing-library/no-node-access
    const html = document.querySelector('html');
    await expect(html).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const WithShowSami = {
  name: 'With ShowSami (LanguagePicker A2 delvis)',
  args: {
    ...defaultArgs,
    showSami: false,
  },
  argTypes: { showSami: { table: { disable: false } } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button');
    await menuButton.click();
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(3);
    for (const item of listItems) {
      await expect(item).not.toHaveAttribute('lang', 'se');
    }
  },
} satisfies Story;

export const WithLocale = {
  name: 'With Locale (LanguagePicker A7, A4, B2)',
  args: {
    ...defaultArgs,
    locale: Languages.Engelsk,
  },
  argTypes: { locale: { table: { disable: false } } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: `${englishText} ${menuText}`,
    });
    await expect(menuButton).toBeInTheDocument();

    await menuButton.click();
    const englishButton = canvas.getByRole('button', { name: englishText });
    await expect(englishButton).toHaveAttribute('aria-current', 'true');
    // eslint-disable-next-line testing-library/no-node-access
    const html = document.querySelector('html');
    await expect(html).toHaveAttribute('lang', 'en');
  },
} satisfies Story;

// TODO Lukke menyskuffen når et språk valg gjøres A4
