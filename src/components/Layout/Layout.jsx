import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppMenu from '../AppMenu/AppMenu';

import { LayoutPage } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutPage>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutPage>
  );
};

export default Layout;
