import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BookOpenOutlineSVGpath = (
  <path
    d={
      'M21 4H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM3 19V6h8v13H3Zm18 0h-8V6h8v13Zm-7-9.5h6V11h-6V9.5Zm0 2.5h6v1.5h-6V12Zm0 2.5h6V16h-6v-1.5Z'
    }
  />
);

export function BookOpenOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={BookOpenOutlineSVGpath} />;
}
