import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNaws from '../components/LatestNaws';
import Navbar from '../components/Navbar';

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
            <main>
                <section className="left-nav"></section>
                <section className="main-nav">
                    <Outlet />
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;