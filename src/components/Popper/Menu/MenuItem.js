import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Menu.module.scss';

//Component
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
