import { forwardRef, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from './defaults';
import { PaginationProps, PaginationComponent } from './Pagination.types';
import { PaginationList } from '../PaginationList/PaginationList';

import styles from './Pagination.module.scss';

const validPropRanges = ({
  totalItems,
  currentPage,
  lastPage,
}: {
  totalItems: number;
  currentPage: number;
  lastPage: number;
}): boolean => {
  if (totalItems < 1) {
    // Ingen elementer å vise.
    return false;
  } else if (lastPage < currentPage) {
    // Skal ikke skje. currentPage er større en total *
    console.log(
      'Pagination: currentPage er høyere enn maks totalElementer * antallElementerPrSide'
    );
    return false;
  } else if (currentPage <= 0) {
    console.log(
      `Pagination: currentPage må være fra og med 1 til og med ${lastPage}.`
    );
    return false;
  }
  return true;
};

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      currentPage: externalCurrentPage,
      defaultCurrent = 1,
      sibling = getDefaultSibling(),
      pageSize = getDefaultPageSize(),
      totalItems,
      hidePrevNextButtonTitle = getDefaultHidePrevNextButtonTitle(),
      hidePageSummary = getDefaultHidePageSummary(),
      ariaLabel,
      onChange,
    },
    ref
  ) => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    const lastPageRef = useRef<HTMLButtonElement>(null);
    const firstPageRef = useRef<HTMLButtonElement>(null);
    const lastPage = Math.ceil(totalItems / pageSize);
    const pageSibling = sibling < 1 ? 1 : sibling;
    const [internalPage, setInternalPage] = useState<number>(defaultCurrent);
    const currentPage = externalCurrentPage ?? internalPage;

    if (!validPropRanges({ totalItems, currentPage, lastPage })) {
      return null;
    }
    /* if (currentPage <= 0 || currentPage > lastPage) {
      console.log(
        `currentPage må være fra og med 1 til og med ${lastPage} (lastPage).`
      );
    } */
    const handleChange = (page: number): void => {
      setInternalPage(page);
      if (page === 1) {
        firstPageRef?.current?.focus();
      } else if (page === lastPage) {
        lastPageRef?.current?.focus();
      }
      onChange?.(page);
    };
    const rangeTo =
      currentPage * pageSize > totalItems ? totalItems : currentPage * pageSize;
    const showPaginationSummary = dsI18n.t(
      'ds_navigation:pagination.PageSummary',
      {
        range: `${currentPage * pageSize + 1 - pageSize}–${rangeTo}`,
        total: totalItems,
      }
    );
    if (showPaginationSummary === '') {
      throw new Error('Feil! Mangler importert språk fra ds-core-utils?');
    }
    const pageSummary = `${
      hidePageSummary ? styles.pagination_summaryhide : ''
    }`;
    const paginationCss = `${styles.pagination} ${className ?? ''}`.trim();
    const listCss = `${styles.paginationList} ${
      hidePageSummary ? styles.paginationList_summaryhidden : ''
    }`;
    return (
      <nav
        ref={ref}
        id={id}
        className={paginationCss}
        lang={lang}
        data-testid={dataTestId}
        aria-label={ariaLabel ?? t('pagination.WrapperAriaLabel')}
      >
        <div className={pageSummary} aria-live={'polite'} aria-atomic={'true'}>
          {showPaginationSummary}
        </div>

        <ul className={listCss}>
          {lastPage > 1 && (
            <PaginationList
              lastPage={lastPage}
              sibling={pageSibling}
              currentPage={currentPage}
              handleChange={handleChange}
              firstPageRef={firstPageRef}
              lastPageRef={lastPageRef}
              hidePrevNextButtonTitle={hidePrevNextButtonTitle}
            />
          )}
        </ul>
      </nav>
    );
  }
) as PaginationComponent;

Pagination.displayName = 'Pagination';
Pagination.List = PaginationList;
Pagination.List.displayName = 'Pagination.List';

export {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
};
