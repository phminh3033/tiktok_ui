//Validate data type of the props
import PropTypes from 'prop-types';

import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Menu.module.scss';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-icon')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
