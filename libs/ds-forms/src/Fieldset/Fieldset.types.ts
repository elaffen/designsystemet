import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { HelpProps } from '../Help/Help.types';

type RequiredFieldsetHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled'
>;

export interface FieldsetProps
  extends RequiredFieldsetHTMLAttributes,
    BaseProps {
  /** Innhold */
  children: JSX.Element | JSX.Element[];
  /** Ledetekst */
  legend: React.ReactNode;
  /** Skjuler ledetekst, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: boolean;
  /** Tilleggstekst */
  description?: string;
  /** Margin under fieldset */
  hasSpacing?: boolean;
  /** Hjelpetekst */
  helpText?: HelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: HelpProps['helpSvgPath'];
  /** Title-element til hjelpeikon */
  titleHelpSvg?: HelpProps['titleHelpSvg'];
  /** Om legend skal markeres med stjerne */
  showRequiredMark?: boolean;
}
