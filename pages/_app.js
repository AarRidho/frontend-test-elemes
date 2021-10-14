import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title key="title">Good Food | Elemes.id</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.object
};

export default MyApp;