import { useState } from "react";

import Feeds from "../../components/feeds";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Suggestions from "../../components/suggestions";
import PostContext from "../../context/post";
import RegistrationBonus from "../../components/registration-bonus";

import './index.scss';

const PitchPage = () => {

    const [showForm, setShowForm] = useState(false);

    const handlePostClick = () => {
        setShowForm(true);
    }

    const handleCancelPost = () => {
        setShowForm(false);
    }

    return <PostContext.Provider value={
        {
            showForm,
            toggleShowForm: handleCancelPost
        }
    }>

        <div className="page pitch">
            <RegistrationBonus />
            <Header />
            <main className="pitch-main">
                <Feeds />
                <Suggestions />
            </main>
            <Footer handlePostClick={handlePostClick} />
        </div>

    </PostContext.Provider>

}

export default PitchPage;