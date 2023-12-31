import React, { type PropsWithChildren } from 'react';

import NavBar from '~/components/navbar/navbar';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <div className='page__container'>{children}</div>
    </>
  );
};

export default AppLayout;
