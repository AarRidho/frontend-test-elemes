import CustomButton from '@components/Buttons/CustomButton';

import styles from './styles.module.css';

const Button = () => {
    return (
        <CustomButton type="button" color="success" className={styles.button}>
            <span className={styles.label}>Daftar Sekarang</span>
        </CustomButton>
    );
};

export default Button;