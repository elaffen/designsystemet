import { BaseProps } from '@skatteetaten/ds-core-utils';

import { LinkProps } from '../Link/Link.types';

export const linkGroupVariantArr = ['list', 'anchors'] as const;
export type LinkGroupVariant = typeof linkGroupVariantArr[number];

export interface LinkGroupComponentCommonProps extends BaseProps {
  /** Margin under lenkegruppen */
  hasSpacing?: boolean;
  /** Definerer stilen til lenkegruppen. */
  variant: LinkGroupVariant;
  /** Link-komponenter */
  children: React.ReactNode | React.ReactNode[];
}

export type LinkGroupProps = LinkGroupComponentCommonProps;

export interface LinkGroupComponent
  extends React.ForwardRefExoticComponent<
    LinkGroupProps & React.RefAttributes<HTMLUListElement>
  > {
  Link: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
