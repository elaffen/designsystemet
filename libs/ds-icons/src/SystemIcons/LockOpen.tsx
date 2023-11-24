import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LockOpenSVGpath = (
  <path
    d={
      'M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9V6a3 3 0 0 0-6 0H7a5 5 0 1 1 10 0v2h1Zm-6 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
    }
  />
);

export function LockOpenIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LockOpenSVGpath} />;
}
