import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => (
    <div className={cx('header')}>
        PageTemplate
    </div>
);

export default Header;