import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button as Button } from 'reactstrap';

import styles from './styles.module.css';

const CustomButton = ({ children, className, ...props }) => {
    return (
        <Button {...props} className={cx(styles.button, className)} >
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default CustomButton;