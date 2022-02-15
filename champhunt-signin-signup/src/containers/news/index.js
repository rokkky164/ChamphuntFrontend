import LiveWire from "../../components/news/livewire";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import './index.scss';

const NewsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('access-token');
        if (!accessToken){navigate('/login');} 
    }, [])

    return <div className="page news">
        <Header showAdd={true} />
        <main className="news-main">
            <LiveWire />
        </main>
        <Footer />
    </div>

}

export default NewsPage;