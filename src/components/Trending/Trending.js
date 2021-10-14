import CustomButton from '@components/Buttons/CustomButton';
import Section from '@components/Section';
import StarRating from '@components/StarRating/StarRating';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Card, Container } from 'reactstrap';

import styles from './styles.module.css';

const items = [
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#E6F3F5'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#E6F3F5'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#EAEEFA'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#F9EEF3'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#F0FEEB'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#F3F7D9'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#F3F7D9'
    },
    {
        imageSrc: '/images/pizza_paperoni.png',
        title: 'Pizza Paperoni',
        subtitle: 'Pizza',
        rating: 4,
        backgroundColor: '#EAEEFA'
    },
];

const Category = () => {
    return (
        <Section id="trending">
            <Container className={styles.title}>
                <h3>Browser Our Trending</h3>
                <h3>Receipt</h3>
            </Container>
            <Container className={styles.trending_cards}>
                {items.map((item, i) => <CardTrending
                    key={`${item.title}_${i}`}
                    {...item}
                />)}
            </Container>
            <Container className={styles.load_more}>
                <CustomButton type="button" color="success">
                    ALL Receipt
                </CustomButton>
            </Container>
        </Section>
    );
};

export default Category;

const CardTrending = ({ imageSrc, title, subtitle, rating, backgroundColor }) => {
    return (
        <Card className={styles.card} style={{ backgroundColor }}>
            <div className={styles.card_image}>
                <Image src={imageSrc} layout="fill" objectFit="cover" alt={title} />
            </div>
            <div className={styles.card_body}>
                <h5 className={styles.card_title}>{title}</h5>
                <h6 className={styles.card_subtitle}>{subtitle}</h6>
                <StarRating rate={rating} className={styles.card_rating} />
            </div>
        </Card>
    );
};

CardTrending.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    backgroundColor: PropTypes.string,
};