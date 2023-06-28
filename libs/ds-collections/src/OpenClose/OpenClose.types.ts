import { MouseEventHandler, ReactNode } from 'react';

import {
  BaseProps,
  Density,
  HeadingAs,
  Position,
} from '@skatteetaten/ds-core-utils';

export interface OpenCloseProps extends BaseProps {
  /** Posisjonen til ikonet: 'left', 'right'. */
  iconPosition?: Position;
  /** Tekst på knappen */
  title: string;
  /** Rendrer knappen som heading på gitt nivå */
  titleAs?: HeadingAs;
  /** Viser en kompakt versjon med mindre tekst og avstander */
  variant?: Density;
  /** Om innholdet skal vises */
  isExpanded?: boolean;
  /** Om onClick bare skal kalles når innholdet åpnes */
  isOnClickOnlyFiredOnOpen?: boolean;
  /** Om teksten på knappen skal ha understrek */
  showUnderline?: boolean;
  /** Callback når knappen OpenClose trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
