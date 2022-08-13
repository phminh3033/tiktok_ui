//Validate data type of the props
import PropTypes from 'prop-types';

import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Menu.module.scss';

//Component
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
