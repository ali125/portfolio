import React, { useMemo } from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: any;
    to?: any;
    as?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    children?: any;
    className?: any;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href = '', children, as, ...props }) => {
    const isRel = useMemo(() => ((typeof href === 'string' && href) || '').includes('http') || (props.target || '').includes('_blank'), [href, props.target]);
    return (
        <Link href={href} as={as ? as : typeof href === 'string' ? href : undefined} onClick={props.onClick}>
            <a className={props.className} target={props.target} rel={isRel ? 'noreferrer' : undefined}>
                {children}
            </a>
        </Link>
    );
};

export default NavLink;