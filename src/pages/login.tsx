import { Card, Grid } from '@mui/material';
import LoginForm from '~/components/login-form/login-form';

const LoginPage = () => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Card>
        <LoginForm />
      </Card>
    </Grid>
  );
};

export default LoginPage;
