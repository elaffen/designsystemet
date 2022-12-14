import {
  getVisibilityThresholdDefault,
  ScrollToTopButton,
  ScrollToTopButtonProps,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { ComponentStory, Meta } from '@storybook/react';
// @skatteeteaten/ds-core-designtokens er angitt som symlink i package.json
// derfor vil typecheck feile hvis pakken ikke er bygget, derfor bryter vi nx module boundaries her
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import palette from 'libs/ds-core-designtokens/lib/designtokens/palette.json';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import { category } from '../../../.storybook/helpers';

const wrapper = '[data-test-block]';
const defaultButtonText = 'Til toppen';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};
export default {
  component: ScrollToTopButton,
  title: 'Tests / ScrollToTopButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },

    // Props
    classNames: {
      table: { disable: true },
    },
    visibilityThreshold: {
      table: {
        category: category.props,
        disable: true,
        //type: { summary: 'number' },
        defaultValue: { summary: getVisibilityThresholdDefault() },
      },
    },
    shadowRootNode: { table: { disable: true } },
    children: { table: { disable: true, category: category.props } },
    // HTML
    // Aria
    // Events
  },
  parameters: {
    backgrounds: {
      default: 'graphite-70',
      values: [
        {
          name: 'graphite-70',
          value: palette[':root,\n:host']['--palette-graphite-70'],
        },
      ],
    },
  },
} as Meta<ScrollToTopButtonProps>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
  <div style={{ height: '100vh' }} className={'noTransition'} data-test-block>
    <ExternalLayout />
    <ScrollToTopButton {...args} />
  </div>
);

const defaultArgs = {
  visibilityThreshold: 0,
};

// Når ScrollToTopButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';

WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};

WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > div > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når MegaButton har en id, så har button-element id
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'htmlid',
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const elementid = await page.$eval(`${wrapper} > div > button`, (el) =>
      el.getAttribute('id')
    );
    expect(elementid).toBe('htmlid');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når ScrollToTopButton har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3 - 1 av 2)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname ',
};
WithCustomCss.argTypes = {
  ...WithCustomCss.argTypes,
  className: {
    table: { disable: false },
  },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(
      `${wrapper}> div:nth-child(2)`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton har en custom classNames, så vises custom stil på riktig sted
export const WithCustomClassNames = Template.bind({});
WithCustomClassNames.storyName = 'With Custom classNames (FA3 - 2 av 2)';
WithCustomClassNames.args = {
  ...defaultArgs,
  classNames: {
    container: 'dummyClassname',
    button: 'dummyClassname',
    iconContainer: 'dummyClassname',
    icon: 'dummyClassname',
    label: 'dummyClassname',
  },
};
WithCustomClassNames.argTypes = {
  ...WithCustomClassNames.argTypes,
  classNames: {
    table: { disable: false },
  },
};
WithCustomClassNames.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(
      `${wrapper}> div > button`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en lang, så har button-element lang
export const WithLang = Template.bind({});
WithLang.storyName = 'With Lang (FA4)';
WithLang.args = {
  ...defaultArgs,
  lang: 'nb',
};
WithLang.argTypes = {
  ...WithLang.argTypes,
  lang: { table: { disable: false } },
};
WithLang.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const langAttribute = await page.$eval(`${wrapper} > div > button`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når ScrollToTopButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestid = await page.$eval(`${wrapper} > div > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når ScrollToTopButton instansieres, så får den riktige default-verdier og rendrer riktig
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, A3 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  visibilityThreshold: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper}> div > button`);
    expect(buttonElement).toMatchSnapshot();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper}> div > button`, (el: any) => el.blur());

    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > div > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton har children, så settes teksten i button-elementet
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With Children(A2)';
WithChildren.args = {
  ...defaultArgs,
  children: 'dummy string',
};
WithChildren.argTypes = {
  ...WithChildren.argTypes,
  children: { table: { disable: false } },
};
WithChildren.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper}> div > button`);
    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('dummy string');

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton lastes i en small skjerm så får den riktig plassering
export const WithMobileScreen = Template.bind({});
WithMobileScreen.storyName = 'With Small screen (A5)';
WithMobileScreen.args = {
  ...defaultArgs,
};
WithMobileScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton lastes i en bred skjerm så får den riktig plassering
export const WithWideScreen = Template.bind({});
WithWideScreen.storyName = 'With Wide screen (A6)';
WithWideScreen.args = {
  ...defaultArgs,
};
WithWideScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton har visibilityThreshold så vises/skjules knappen ved riktig innslagspunkt for scroll
export const WithVisibilityThreshold = Template.bind({});
WithVisibilityThreshold.storyName =
  'With visibilityThreshold and scrolling (A7, A8)';
WithVisibilityThreshold.args = {
  ...defaultArgs,
  visibilityThreshold: 3,
};
WithVisibilityThreshold.argTypes = {
  ...WithVisibilityThreshold.argTypes,
  visibilityThreshold: { table: { disable: false } },
};
WithVisibilityThreshold.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const className = await page.$eval(
      `${wrapper} > div > button`,
      (el) => el.className
    );
    expect(className.match('visible')).toBeFalsy();

    const imageAtTop = await page.screenshot(screenShotOptions);
    expect(imageAtTop).toMatchImageSnapshot();

    await page.evaluate(() => {
      window.scrollBy(0, 3);
    });

    const classNameScrolledDown = await page.$eval(
      `${wrapper} > div > button`,
      (el) => el.className
    );
    expect(classNameScrolledDown.match('visible')).toBeTruthy();

    const imageScrolledDown = await page.screenshot(screenShotOptions);
    expect(imageScrolledDown).toMatchImageSnapshot();

    await page.evaluate(() => {
      window.scrollBy(0, -3);
    });

    const classNameScrolledUp = await page.$eval(
      `${wrapper} > div > button`,
      (el) => el.className
    );
    expect(classNameScrolledUp.match('visible')).toBeFalsy();

    const imageScrolledUp = await page.screenshot(screenShotOptions);
    expect(imageScrolledUp).toMatchImageSnapshot();
  },
};

//TODO FRONT-891 when clicked (B4 - 1 av 2)

//TODO FRONT-891 when clicked shadowRootNode (B4 - 2 av 2)
