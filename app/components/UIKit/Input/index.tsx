import React, {forwardRef, useEffect, useMemo, useState} from 'react';
import classnames from 'classnames';
import { Cancel } from "@mui/icons-material";
import InputLabel from '@UIKit/Input/InputLabel';
import styles from './Input.module.css';

interface InputProps {
    icon?: any;
    placeholder?: string;
    className?: string;
    label?: string;
    validationRegex?: any;
    validationError?: string;
    invalid?: boolean;
    initialValue?: string;
    containerClassName?: string;
    type?: 'tel' | 'email' | 'string' | 'password' | 'date' | 'file';
    clearable?: boolean;
    multiline?: boolean;
    onChange?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onBlur?: (event: React.FocusEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
    (
        {
            onChange,
            initialValue,
            type,
            validationRegex,
            validationError,
            invalid,
            onSubmit,
            onBlur,
            onFocus,
            ...rest
        },
        ref,
    ) => {
        const [value, setValue] = useState<string>(initialValue || '');

        useEffect(() => {
            setValue(initialValue || '');
        }, [initialValue]);

        const isInvalid = useMemo(() => invalid || (validationRegex && value && value.length > 0 && !validationRegex.test(value)), [value, invalid, validationRegex]);

        return (
            <div className={classnames(styles.Wrapper, rest.containerClassName)}>
                {rest.label && <InputLabel>{rest.label}</InputLabel>}
                <div
                    className={classnames(styles.Container, rest.className, {
                        [styles.Invalid]: isInvalid,
                    })}
                >
                    {rest.icon || null}
                    {rest.multiline ? (
                        <textarea
                            ref={ref}
                            placeholder={rest.placeholder}
                            className={styles.Input}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            onKeyUp={(e) => {
                                e.key === 'Enter' && onSubmit && onSubmit(value);
                            }}
                            onSubmit={() => onSubmit && onSubmit(value)}
                            onChange={(e) => {
                                setValue(e.target.value);
                                onChange && onChange(e.target.value);
                            }}
                            value={value}
                            {...rest}
                        />
                    ) : (
                        <input
                            ref={ref}
                            type={type || 'text'}
                            placeholder={rest.placeholder}
                            className={styles.Input}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onKeyUp={(e) => {
                                e.key === 'Enter' && onSubmit && onSubmit(value);
                            }}
                            onSubmit={() => onSubmit && onSubmit(value)}
                            onChange={(e) => {
                                if (type !== 'file') {
                                    setValue(e.target.value);
                                    onChange && onChange(e.target.value);
                                } else {
                                    onChange && onChange(e);
                                }
                            }}
                            value={value}
                            {...rest}
                        />
                    )}
                    {rest.clearable && (value && value.length > 0) ? (
                        <div
                            role="button"
                            className={classnames(styles.Icon, styles.Clear)}
                            onClick={() => {
                                setValue('');
                                onChange && onChange('');
                            }}
                        >
                            <Cancel />
                        </div>
                    ) : null}
                </div>
                {isInvalid ? <span className={styles.ValidationError}>{validationError}</span> : null}
            </div>
        );
    },
);

export default Input;
