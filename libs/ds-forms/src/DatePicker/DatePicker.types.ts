import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
} from 'react';

import {
  BaseProps,
  FormDiscriminatedRequiredProps,
  FormSize,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

type RequiredDatePickerHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'autoComplete' | 'disabled' | 'name' | 'placeholder' | 'readOnly' | 'required'
>;

type DatePickerHTMLAttributes = Partial<RequiredDatePickerHTMLAttributes>;

interface DatePickerPropsHTMLAttributes extends DatePickerHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

interface DatePickerCommonProps
  extends DatePickerPropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    label?: string;
    dateContainer?: string;
    errorMessage?: string;
  };
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Definerer stilen til DatePicker */
  variant?: FormSize;
  /** Hvilken dato som skal være satt. */
  value?: Date | null;

  /** Initielt uthevet dato. (Hvis value har en dato, så blir den datoen uthevet istedenfor.) */
  initialPickerDate?: Date;
  /** Minste tillatte dato */
  minDate?: Date;
  /** Maksimal tillatte dato */
  maxDate?: Date;
  /** Overskriver default datoformat for input-felt. Formater som kan brukes: https://date-fns.org/v3.3.1/docs/parse. */
  dateFormat?: string;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Kalles når en dato-knapp klikkes på. */
  onSelectDate?: (date: Date | null) => void;
}

export type DatePickerDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om form-komponent har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om form-komponent har en feil */
      hasError?: never;
    };

export type DatePickerProps = DatePickerCommonProps &
  FormDiscriminatedRequiredProps &
  DatePickerDiscriminatedErrorProps;
