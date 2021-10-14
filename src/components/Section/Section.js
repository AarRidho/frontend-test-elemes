import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Section = ({ children, ...props }) => {
    const className = cx(styles.section, props.className);
    return (
        <section className={className} {...props}>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Section;