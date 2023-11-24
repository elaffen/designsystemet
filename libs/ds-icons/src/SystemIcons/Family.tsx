import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FamilySVGpath = (
  <path
    d={
      'M15.5 10c1.63 0 3.12.35 4.5 1.05 1.34.71 2 1.56 2 2.56v7.13h-6.61V19c0-.95-.86-1.62-2.58-2.03-.56-.13-1-.19-1.31-.19-.87 0-1.7.17-2.46.52-.77.34-1.23.78-1.38 1.31 1.986.623 3.916.696 4.589.701h.185l.065-.001h.001v2.63h-.064l-.11.002h-.368c-1.3-.005-4.683-.088-7.348-.752-.33-.14-.64-.29-.91-.45-1.14-.67-1.7-1.46-1.7-2.36v-4.77c0-.87.51-1.64 1.53-2.29.15-.09.3-.18.47-.27C5.38 10.35 6.87 10 8.5 10c1.25 0 2.41.2 3.5.61a9.91 9.91 0 0 1 3.5-.61Zm-4 2c-1.1 0-2 .9-2 2 0 .75.41 1.4 1.02 1.74.29.17.62.26.98.26s.69-.09.98-.26c.61-.34 1.02-.99 1.02-1.74 0-1.1-.9-2-2-2ZM8.499 3.004a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM15.5 3c1.66 0 3 1.35 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.65 1.34-3 3-3Z'
    }
  />
);

export function FamilyIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FamilySVGpath} />;
}
