import { useState } from 'react';

import ButtonDaftarSekarang from '@components/Buttons/DaftarSekarang';
import Image from 'next/image';
import {
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
        <NavbarReact light expand="md" className={styles.navbar}>
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
                            <NavLink href="https://github.com/reactstrap/reactstrap">Promotions</NavLink>
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
        </NavbarReact>
    );
};

export default Navbar;