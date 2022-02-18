import LiveWire from "../../components/news/livewire";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {Text} from 'react';

import './index.scss';

const AboutUs = () => {
    const navigate = useNavigate();

    return <div className="page aboutus">
        <Header showAdd={true} />
        <main className="aboutus-main">
            <div className="component aboutus-alert">
                <div className='aboutus-text'>
                    <p>

                    Champhunt is a community building platform designed to bring together all stakeholders of the sport of Cricket.
                    &nbsp;
                    Users can share their thoughts and opinions, connect with other users, discuss the game, all while participating in fun activities and attractive giveaways.
                    &nbsp;
                    We are also on course to forming digital partnerships with tournaments and academies located across the breadth and width of the country. We are striving to become a platform where talent from all aspects of the sport from nooks and corners of India gets visibility in the right set of eyes.
                    &nbsp;
                    In the future, Champhunt also intends on spreading its wings in the fantasy-sports gaming arena, with a state of the art idea that is bound to keep users spell-bound and hooked.
                    &nbsp;
                    If you’re a Cricket team, Cricket academy, a sports goods vendor, or run anything related to Cricket or sports in general, and would like to partner with us, please drop us an email at partnership@champhunt.com and our team will get back to you.

                   </p>

                   <p>Happy Champhunting!</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>

}

export default AboutUs;