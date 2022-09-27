import React from 'react';
import classnames from 'classnames';
import NavLink from "@UIKit/Elements/NavLink";
import styles from './Button.module.css';

interface LinkProps {
  title?: string;
  children?: any;
  type?: 'link';
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  as?: any;
  disabled?: boolean;
  round?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  inline?: boolean;
  className?: any;
  icon?: any;
  download?: string;
  onClick?: () => void;
}

interface ButtonProps {
  title?: string;
  children?: any;
  type?: 'button' | 'submit' | 'reset';
  as?: any;
  disabled?: boolean;
  round?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  inline?: boolean;
  className?: any;
  icon?: any;
  onClick?: () => void;
}

const Button:React.FC<ButtonProps | LinkProps> = ({ as: Component = 'button', ...props }) => {
  const classes = classnames(
      styles.btn,
    {
      [styles.disabled]: props.disabled,
      [styles.round]: props.round,
      [styles.secondary]: props.secondary,
      [styles.tertiary]: props.tertiary,
      [styles.inline]: props.inline,
    },
    props.className,
  );
  if (props.type === 'link') {
    return (
      <NavLink
        {...props}
        onClick={!props.disabled && props.onClick ? props.onClick : undefined}
        href={props.href}
        className={classes}
      >
        {props.icon && props.icon}
        {props.title || props.children}
      </NavLink>
    );
  }
  return (
    <Component
      {...props}
      type={props.type}
      onClick={!props.disabled && props.onClick ? props.onClick : undefined}
      className={classes}
    >
      {props.icon && props.icon}
      {props.title || props.children}
    </Component>
  );
};

Button.defaultProps = {
  type: 'button',
  round: false,
  secondary: false,
  tertiary: false,
};

export default Button;
