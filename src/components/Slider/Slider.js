import 'keen-slider/keen-slider.min.css';
import { useCallback, useMemo } from 'react';

import CustomButton from '@components/Buttons/CustomButton';
import cx from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const sliders = [
    {
        title: 'Cupcake',
        image: '/images/cupcake.svg',
        details: '22 items',
    },
    {
        title: 'Pizza',
        image: '/images/pizza.svg',
        details: '25 items',
    },
    {
        title: 'Kebab',
        image: '/images/kebab.svg',
        details: '12 items',
    },
    {
        title: 'Salmon',
        image: '/images/salmon.svg',
        details: '22 items',
    },
    {
        title: 'Doughnut',
        image: '/images/doughnut.svg',
        details: '11 items',
    },
    {
        title: 'Suprise! I\'ts Me Again! Doughnut',
        image: '/images/doughnut.svg',
        details: '11 items',
    },
];

const Slider = () => {
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 6,
        mode: 'free',
        spacing: 10,
        loop: false,
        centered: true,
        initial: 2
    });

    const sliderItems = useMemo(() => {
        return sliders.map((item, i) => <SliderItem key={`slider_item_${i}`} {...item} />);
    }, []);

    const handleNavigator = useCallback((e) => {
        const { label } = e.currentTarget.dataset;

        if (label === 'prev') slider.prev();
        else if (label === 'next') slider.next();

        return;
    }, [slider]);

    return (
        <>
            <div className={cx('keen-slider', styles.slider)} ref={sliderRef}>
                {sliderItems}
            </div>
            <div className={cx('container', styles.slider_navigator)}>
                <CustomButton type="button" color="success" data-label="prev" onClick={handleNavigator}>
                    <PrevSymbol />
                    <span>PREV</span>
                </CustomButton>
                <CustomButton type="button" color="success" data-label="next" onClick={handleNavigator}>
                    <span>NEXT</span>
                    <NextSymbol />
                </CustomButton>
            </div>
        </>
    );
};

export default Slider;

const SliderItem = ({ title, image, details }) => <div className={cx('keen-slider__slide', styles.card_item)}>
    <Image src={image} height={42} width={52} alt={title} />
    <div className={styles.card_item_desc}>
        <h6>{title}</h6>
        <p>{details}</p>
    </div>
    <div className={styles.card_bg_overlay}></div>
</div>;
SliderItem.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const PrevSymbol = () => <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="33" height="33" rx="16.5" fill="white" />
    <path d="M9.0257 15.8218L18.4693 7.28048C18.8837 6.90651 19.555 6.90651 19.9705 7.28048C20.3848 7.65444 20.3848 8.26186 19.9705 8.63583L11.2759 16.4995L19.9694 24.3631C20.3838 24.7371 20.3838 25.3445 19.9694 25.7194C19.555 26.0934 18.8826 26.0934 18.4683 25.7194L9.02465 17.1781C8.61655 16.808 8.61655 16.191 9.0257 15.8218Z" fill="#8BAC3E" />
</svg>;

const NextSymbol = () => <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="33" height="33" rx="16.5" fill="white" />
    <g clipPath="url(#clip0_307:4301)">
        <path d="M21.2314 15.8522L13.0695 7.69298C12.7113 7.33574 12.1311 7.33574 11.772 7.69298C11.4139 8.05021 11.4139 8.63046 11.772 8.9877L19.2866 16.4996L11.7729 24.0114C11.4148 24.3687 11.4148 24.9489 11.7729 25.307C12.1311 25.6643 12.7122 25.6643 13.0704 25.307L21.2323 17.1478C21.585 16.7942 21.585 16.2049 21.2314 15.8522Z" fill="#8BAC3E" />
    </g>
    <defs>
        <clipPath id="clip0_307:4301">
            <rect width="18.15" height="18.15" fill="white" transform="translate(7.42505 7.42505)" />
        </clipPath>
    </defs>
</svg>;