import * as React from 'react';
import styles from './login-form.module.css';

import SocialLoginButton from '../social-login-button/social-login-button';

const LoginForm = () => {
  return (
    <div className={styles.form__div}>
      <div className={styles.form__input}>
        <SocialLoginButton type='facebook'></SocialLoginButton>
      </div>
      <div className={styles.form__input}>
        <SocialLoginButton type='twitter'></SocialLoginButton>
      </div>
      <div className={styles.form__input}>
        <SocialLoginButton type='google'></SocialLoginButton>
      </div>
      <div className={styles.form__input}>
        <SocialLoginButton type='microsoft'></SocialLoginButton>
      </div>
    </div>
  );
};

export default LoginForm;
