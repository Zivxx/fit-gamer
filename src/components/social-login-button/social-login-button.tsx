import * as React from 'react';
import styles from './social-login-button.module.css';

import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

type SocialLoginButtonProps = {
  type: 'facebook' | 'twitter' | 'google' | 'microsoft';
};

const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const buttonText = `Login with ${props.type}`;
  const cssClassName = `button__${props.type}`;
  let icon;
  switch (props.type) {
    case 'facebook':
      icon = <FacebookIcon />;
      break;
    case 'twitter':
      icon = <TwitterIcon />;
      break;
    case 'google':
      icon = <GoogleIcon />;
      break;
    case 'microsoft':
      icon = <MicrosoftIcon />;
      break;
  }
  return (
    <>
      <Button variant='outlined' size='small' className={styles[cssClassName]} fullWidth startIcon={icon}>
        {buttonText}
      </Button>
    </>
  );
};

export default SocialLoginButton;
