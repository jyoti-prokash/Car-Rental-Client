import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='p-2'>
            <header><Navbar></Navbar></header>
            <section><Outlet></Outlet></section>
            <section><Footer></Footer></section>
        </div>
    );
};

export default MainLayout;