import Deals from "../../components/deals";
import DealsAlert from "../../components/deals-alert";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import './index.scss';

const DealsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('access-token');
        if (!accessToken){navigate('/login');} 
    }, [])

    return <div className="page deals">
        <Header showAdd={true} />
        <main className="deals-main">
            <DealsAlert />
            <Deals />
        </main>
        <Footer />
    </div>

}

export default DealsPage;