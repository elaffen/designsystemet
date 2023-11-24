import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PencilOffSVGpath = (
  <path
    d={
      'M18.66 2c-.26 0-.5.09-.69.28l-1.84 1.85 3.75 3.75 1.84-1.85c.39-.39.39-1.03 0-1.4l-2.34-2.35c-.2-.19-.47-.28-.72-.28ZM3.28 4 2 5.28l6.5 6.47-4.5 4.5V20h3.75l4.5-4.5 6.47 6.5L20 20.72l-6.5-6.47-3.75-3.75L3.28 4Zm11.78 1.19-4.03 4.03 3.75 3.75 4.03-4.03-3.75-3.75Z'
    }
  />
);

export function PencilOffIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PencilOffSVGpath} />;
}
