import Category from '@components/Category';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Trending from '@components/Trending';
import styles from '@styles/pages.module.css';

export default function Home() {
    return (
        <div className={styles.home_page}>
            <Navbar />
            <Hero />
            <Category />
            <Trending />
            <Footer />
        </div>
    );
}
