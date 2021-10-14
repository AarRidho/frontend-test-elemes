import CustomButton from '@components/Buttons/CustomButton';

import styles from './styles.module.css';

const ButtonAboutUs = () => {
    return (
        <CustomButton type="button" color="light" className={styles.button}>
            <span className={styles.label}>About Us</span>
        </CustomButton>
    );
};

export default ButtonAboutUs;