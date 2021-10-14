import { useState } from 'react';

import ButtonDaftarSekarang from '@components/Buttons/DaftarSekarang';
import Image from 'next/image';
import {
    Button,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Navbar as NavbarReact,
    NavbarText,
    Container,
} from 'reactstrap';

import styles from './styles.module.css';

const Navbar = () => {
    const [isOpen, /* setIsOpen */] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    return (
        <NavbarReact light expand="lg" className={styles.navbar}>
            <Container className={styles.container}>
                <NavbarBrand href="/" className={styles.brand}>
                    <Image src="/images/logo-elemes.png" width={207} height={50} alt="logo-brand" />
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={styles.nav} navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Promotions
                            </NavLink>
                            <span className={styles.nav_badge}>HOT</span>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Blogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className={styles.navbar_text}>
                        <NavLink href="#">Masuk</NavLink>
                    </NavbarText>
                </Collapse>
                <ButtonDaftarSekarang />
            </Container>
            <Container className={styles.mobile_nav}>
                <Button color="secondary">
                    <Bars />
                    <span>Home</span>
                </Button>
                <Button color="secondary">
                    <Bars />
                    <span>Promotions</span>
                </Button>
                <Button color="secondary">
                    <Bars />
                    <span>Others</span>
                </Button>
            </Container>
        </NavbarReact>
    );
};

export default Navbar;

const Bars = () => <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.375 21.0913H1.625C0.727997 21.0913 0 20.3633 0 19.4663C0 18.5693 0.727997 17.8413 1.625 17.8413H37.375C38.272 17.8413 39 18.5693 39 19.4663C39 20.3633 38.272 21.0913 37.375 21.0913Z" fill="#757575" />
    <path d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z" fill="#757575" />
    <path d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z" fill="#757575" />
</svg>;
