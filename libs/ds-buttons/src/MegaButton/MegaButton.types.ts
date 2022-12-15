import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type RequiredMegaButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
  'accessKey' | 'onBlur' | 'onClick' | 'onFocus'
>;

type MegaButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface MegaButtonPropsHTMLAttributes extends MegaButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export type MegaButtonDiscriminatedProp =
  | {
      /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
      href: string;
      disabled?: never;
      /** Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen er en lenke til en side på et annet domene. */
      isExternal?: boolean;
      type?: never;
    }
  | {
      /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
      href?: never;
      disabled?: boolean;
      /** Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen er en lenke til en side på et annet domene. */
      isExternal?: never;
      type?: 'submit' | 'reset' | 'button';
    };

export interface MegaButtonComponentCommonProps
  extends MegaButtonPropsHTMLAttributes,
    BaseProps {
  /** Tekst på knapp */
  children: string;
}

export type MegaButtonProps = MegaButtonComponentCommonProps &
  MegaButtonDiscriminatedProp;
