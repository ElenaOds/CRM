import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Sidebar from './Sidebar';
import Header from './Header';
import Loader from './Loader';

const Layout = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <main className="main-margin">
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense> 
      </main>
    </div>
  )
}

export default Layout
