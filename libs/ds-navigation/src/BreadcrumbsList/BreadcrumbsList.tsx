import React, {
  JSX,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { VerticalDotsSVGpath } from '@skatteetaten/ds-icons';

import { BreadcrumbsListProps } from './BreadcrumbsList.types';
import { getBreadcrumbsListShouldCollapseDefault } from './defaults';

import styles from './BreadcrumbsList.module.scss';

export const BreadcrumbsList = forwardRef<
  HTMLOListElement,
  BreadcrumbsListProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      children,
      shouldCollapse = getBreadcrumbsListShouldCollapseDefault(),
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    const [threshold, setThreshold] = useState<number | undefined>();
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isExpandedByUser, setIsExpandedByUser] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);

    useImperativeHandle(ref, () => listRef.current as HTMLOListElement);

    useEffect(() => {
      if (!shouldCollapse) return;

      if (!listRef.current) return;

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setTimeout(() => {
            if (
              !threshold &&
              entry.target.scrollWidth > entry.target.clientWidth
            ) {
              setThreshold(entry.target.scrollWidth);
            }
            console.log({ threshold });
            setIsOverflowing(
              threshold ? threshold > entry.target.clientWidth : false
            );
          }, 0);
        }
      });

      resizeObserver.observe(listRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [shouldCollapse, threshold]);

    const handleExpand = (): void => {
      setIsExpandedByUser(true);
      setTimeout(() => {
        if (listRef.current) {
          const childLinkElements = [...listRef.current.querySelectorAll('a')];
          childLinkElements[0].focus();
        }
      }, 0);
    };

    const childrenAsArray = React.Children.toArray(children);

    const isCollapsed =
      shouldCollapse &&
      isOverflowing &&
      childrenAsArray.length > 3 &&
      !isExpandedByUser;

    const concatenatedClassNames = `${styles.breadcrumbsList} ${
      isCollapsed ? styles.breadcrumbsListCollapsed : ''
    } ${
      isExpandedByUser || !shouldCollapse ? styles.breadcrumbsListExpanded : ''
    } ${className}`.trim();

    return (
      <ol
        ref={listRef}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={concatenatedClassNames}
      >
        {isCollapsed ? (
          <>
            <li className={styles.expandButtonWrapper}>
              <IconButton
                title={t('breadcrumbs.ExpandAltText')}
                svgPath={VerticalDotsSVGpath}
                onClick={handleExpand}
              />
              <span>{'/'}</span>
            </li>
            {childrenAsArray.slice(-2)}
          </>
        ) : (
          childrenAsArray
        )}
      </ol>
    );
  }
);

BreadcrumbsList.displayName = 'BreadcrumbsList';

export { getBreadcrumbsListShouldCollapseDefault };
