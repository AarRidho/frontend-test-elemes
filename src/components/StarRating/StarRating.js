import { useMemo } from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.css';


const StarRating = ({ className, rate = 0 }) => {
    const starElements = useMemo(() => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i <= rate - 1) stars.push(<ShiningStar />);
            else stars.push(<Star />);
        }

        return stars;
    }, [rate]);

    return (
        <div className={cx(styles.stars, className)}>
            {starElements}
        </div>
    );
};

StarRating.propTypes = {
    className: PropTypes.string,
    rate: PropTypes.number,
};

export default StarRating;

const Star = () => {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M10.9711 4.08243C10.889 3.82962 10.6436 3.65586 10.2979 3.60566L7.5567 3.20728L6.33078 0.723295C6.17617 0.410063 5.93509 0.230408 5.66931 0.230408C5.40354 0.230408 5.16245 0.410063 5.00787 0.723295L3.78199 3.20726L1.0407 3.60564C0.69501 3.65584 0.449659 3.82962 0.367515 4.08238C0.285391 4.33517 0.381758 4.61996 0.631855 4.86377L2.61546 6.79725L2.14718 9.5275C2.08561 9.88663 2.19018 10.1014 2.28878 10.2183C2.40409 10.3551 2.57231 10.4304 2.76247 10.4304C2.90622 10.4304 3.05933 10.3883 3.21743 10.3051L5.66931 9.01604L8.12119 10.3051C8.27934 10.3882 8.43242 10.4304 8.5762 10.4304H8.57624C8.76641 10.4304 8.93464 10.3551 9.04995 10.2183C9.14853 10.1014 9.25312 9.88661 9.19153 9.52746L8.72319 6.79727L10.7068 4.86381C10.9569 4.62 11.0533 4.33519 10.9711 4.08243Z" fill="#C9C9C9" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="10.6609" height="10.6609" fill="white" transform="translate(0.338867)" />
                </clipPath>
            </defs>
        </svg>
    );
};

const ShiningStar = () => {
    return (
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M11.3124 4.08243C11.2303 3.82962 10.9849 3.65586 10.6393 3.60566L7.89801 3.20728L6.67209 0.723295C6.51748 0.410063 6.2764 0.230408 6.01062 0.230408C5.74484 0.230408 5.50376 0.410063 5.34918 0.723295L4.1233 3.20726L1.38201 3.60564C1.03632 3.65584 0.790968 3.82962 0.708824 4.08238C0.6267 4.33517 0.723066 4.61996 0.973164 4.86377L2.95677 6.79725L2.48849 9.5275C2.42692 9.88663 2.53149 10.1014 2.63008 10.2183C2.7454 10.3551 2.91362 10.4304 3.10377 10.4304C3.24753 10.4304 3.40064 10.3883 3.55874 10.3051L6.01062 9.01604L8.4625 10.3051C8.62065 10.3882 8.77373 10.4304 8.91751 10.4304H8.91755C9.10772 10.4304 9.27595 10.3551 9.39126 10.2183C9.48984 10.1014 9.59443 9.88661 9.53283 9.52746L9.0645 6.79727L11.0481 4.86381C11.2982 4.62 11.3946 4.33519 11.3124 4.08243Z" fill="#FF8412" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="10.6609" height="10.6609" fill="white" transform="translate(0.680176)" />
                </clipPath>
            </defs>
        </svg>

    );
};