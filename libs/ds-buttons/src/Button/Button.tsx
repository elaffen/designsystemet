/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import { ButtonProps } from './Button.types';
import {
  getVariantDefault,
  getDisabledDefault,
  getClassNameDefault,
  getIconPropsDefault,
} from './defaults';

import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      className = getClassNameDefault(),
      children,
      variant = getVariantDefault(),
      disabled = getDisabledDefault(),
      iconProps,
      tabIndex,
      accessKey,
      'data-testid': dataTestId,
      'aria-describedby': ariaDescribedby,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const withIconClassName = iconProps ? `${styles.button_withIcon}` : '';
    const concatenatedClassName = `${styles.button} ${
      styles[`button_${variant}`]
    } ${withIconClassName} ${className}`;
    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        data-testid={dataTestId}
        disabled={disabled}
        aria-describedby={ariaDescribedby}
        accessKey={accessKey}
        tabIndex={tabIndex}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {iconProps && (
          <span className={styles.icon}>
            <Icon {...iconProps} />
          </span>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export {
  getVariantDefault,
  getDisabledDefault,
  getClassNameDefault,
  getIconPropsDefault,
};
