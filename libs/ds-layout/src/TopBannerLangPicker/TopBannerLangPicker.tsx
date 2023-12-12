import React, { forwardRef, JSX, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { MenuSVGpath } from '@skatteetaten/ds-icons';

import { ReactComponent as EnglishFlagIcon } from './Assets/en-flag.svg';
import { ReactComponent as NorwegianFlagIcon } from './Assets/no-flag.svg';
import { ReactComponent as SamiFlagIcon } from './Assets/sa-flag.svg';
import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from './defaults';
import {
  TopBannerLangPickerComponent,
  TopBannerLangPickerProps,
} from './TopBannerLangPicker.types';
import { convertLocaleToLang } from './utils';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLangPickerButton } from '../TopBannerLangPickerButton/TopBannerLangPickerButton';

import styles from './TopBannerLangPicker.module.scss';

export const TopBannerLangPicker = forwardRef<
  HTMLDivElement,
  TopBannerLangPickerProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      locale = getTopBannerLangPickerLocaleDefault(),
      showSami = getTopBannerLangPickerShowSamiDefault(),
      onLanguageClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const [selectedLang, setSelectedLang] = useState<string>(
      convertLocaleToLang(locale)
    );
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang, setSelectedLang]);

    const handleMenuClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageClick = (
      e: React.MouseEvent<HTMLButtonElement>
    ): void => {
      setSelectedLang(e.currentTarget.lang);
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
      onLanguageClick?.(e);
    };

    const handleCloseMenuKeyDown = (
      e: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      e.stopPropagation();
      if (!e.shiftKey && e.key === 'Tab') {
        setIsMenuOpen(false);
      }
    };

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const defaultLanguages: { [key: string]: any } = {
      nb: {
        lang: 'nb',
        displayName: 'Bokmål',
        flagIcon: <NorwegianFlagIcon />,
      },
      nn: {
        lang: 'nn',
        displayName: 'Nynorsk',
        flagIcon: <NorwegianFlagIcon />,
      },
      en: { lang: 'en', displayName: 'English', flagIcon: <EnglishFlagIcon /> },
    };
    if (showSami) {
      Object.assign(defaultLanguages, {
        se: {
          lang: 'se',
          displayName: 'Sámegiella',
          flagIcon: <SamiFlagIcon />,
        },
      });
    }

    return (
      <div
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={isMenuOpen ? styles.overlay : ''} />

        {/* TODO - hardkodet icon må endres til flag som også endres når nytt språk velges:
         * {defaultLanguages[selectedLang].flagIcon}  */}
        <TopBannerButton
          ref={menuButtonRef}
          lang={selectedLang}
          className={styles.menuButton}
          svgPath={MenuSVGpath}
          ariaExpanded={isMenuOpen}
          hasArrow
          onClick={handleMenuClick}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.shiftKey && e.key === 'Tab') {
              setIsMenuOpen(false);
            }
          }}
        >
          {defaultLanguages[selectedLang].displayName}
          <span className={styles.srOnly}>{t('topbannerbutton.Menu')}</span>
        </TopBannerButton>
        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <div className={styles.menuArrow} />
            <ul className={styles.list}>
              {Object.values(defaultLanguages).map((language, index) => {
                return (
                  <li
                    key={`${language.lang}-${index}`}
                    className={styles.listItem}
                  >
                    <TopBannerLangPicker.Button
                      lang={language.lang}
                      ariaCurrent={language.lang === selectedLang}
                      flagIcon={language.flagIcon}
                      onClick={handleLanguageClick}
                      onKeyDown={
                        Object.keys(defaultLanguages).length === index + 1
                          ? handleCloseMenuKeyDown
                          : undefined
                      }
                    >
                      {language.displayName}
                    </TopBannerLangPicker.Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
) as TopBannerLangPickerComponent;

TopBannerLangPicker.displayName = 'TopBannerLangPicker';
TopBannerLangPicker.Button = TopBannerLangPickerButton;
