import { type AppType } from 'next/app';
import { api } from '~/utils/api';
import '~/styles/globals.css';

import AppLayout from '~/layouts/app-layout';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default api.withTRPC(MyApp);
