import Section from '@components/Section';
import Slider from '@components/Slider';
import cx from 'classnames';

import styles from './styles.module.css';

const Category = () => {
    return (
        <Section id="category">
            <div className={cx('container', styles.title)}>
                <h3>Browser Our Category</h3>
                <h3>Receipt</h3>
            </div>
            <Slider />
        </Section>
    );
};

export default Category;