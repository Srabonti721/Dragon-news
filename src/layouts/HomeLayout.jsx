import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNaws from '../components/LatestNaws';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNaws/>
                </section>
                <section className='w-11/12 mx-auto my-5'>
                    <nav>
                        <Navbar/>
                    </nav>
                </section>
            </header>
            <main className='mx-auto w-11/12 gap-5 grid grid-cols-12'>
            <aside className='col-span-3' >
                <LeftAside/>
            </aside>
                <section className="main-nav col-span-6">
                    <Outlet />
                </section>
              <aside className='col-span-3'>
                <RightAside/>
              </aside>
            </main>
        </div>
    );
};

export default HomeLayout;