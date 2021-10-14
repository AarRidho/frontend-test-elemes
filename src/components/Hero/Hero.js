import ButtonAboutUs from '@components/Buttons/AboutUs';
import ButtonDaftarSekarang from '@components/Buttons/DaftarSekarang';
import Section from '@components/Section';
import StarRating from '@components/StarRating/StarRating';
import cx from 'classnames';
import Image from 'next/image';

import styles from './styles.module.css';

const Hero = () => {
    return (
        <Section id="hero" className={styles.hero}>
            <div className={cx('container', styles.heading)}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Good Food Us Good Mood</h1>
                    <h4 className={styles.caption}>
                        I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                    </h4>
                    <div className={styles.buttons}>
                        <ButtonDaftarSekarang />
                        <ButtonAboutUs />
                    </div>
                    <figure>
                        <div className={styles.figure_2}>
                            <Image src="/images/hero-figure-2.png" layout="fill" alt="figure-2" quality={100} unoptimized={true} />
                            {/* <img src="/images/hero-figure-2.png" layout="fill" alt="figure-2" /> */}
                        </div>
                        <div className={styles.figure_1}>
                            <Image src="/images/hero-figure-1.png" layout="fill" alt="figure-1" quality={100} unoptimized={true} />
                            {/* <img src="/images/hero-figure-1.png" layout="fill" alt="figure-1" /> */}
                        </div>
                        <div className={styles.card_profile}>
                            <div className={styles.image}>
                                <Image src="/images/hero-figure-thumbnail-1.png" width={54} height={54} alt="hero-figure-thumbnail-1" />
                            </div>
                            <div className={styles.description}>
                                <h5>Green Salad Tomato</h5>
                                <p>Tomato</p>
                                <StarRating rate={4} />
                            </div>
                        </div>
                    </figure>
                </div>
                <figure>
                    <div className={styles.figure_2}>
                        <Image src="/images/hero-figure-2.png" layout="fill" alt="figure-2" quality={100} unoptimized={true} />
                        {/* <img src="/images/hero-figure-2.png" layout="fill" alt="figure-2" /> */}
                    </div>
                    <div className={styles.figure_1}>
                        <Image src="/images/hero-figure-1.png" layout="fill" alt="figure-1" quality={100} unoptimized={true} />
                        {/* <img src="/images/hero-figure-1.png" layout="fill" alt="figure-1" /> */}
                    </div>
                    <div className={styles.card_profile}>
                        <div className={styles.image}>
                            <Image src="/images/hero-figure-thumbnail-1.png" width={54} height={54} alt="hero-figure-thumbnail-1" />
                        </div>
                        <div className={styles.description}>
                            <h5>Green Salad Tomato</h5>
                            <p>Tomato</p>
                            <StarRating rate={4} />
                        </div>
                    </div>
                </figure>
            </div>
            <div className={styles.hero_overlay}>
            </div>
        </Section>
    );
};

export default Hero;