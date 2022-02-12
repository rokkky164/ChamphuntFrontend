import Deals from "../../components/deals";
import ProfileCard from "../../components/profile";
import Header from "../../components/header";
import Footer from "../../components/footer";

import './index.scss';

const ProfileDetailsPage = () => {

    return <div className="page profile">
        <Header showAdd={true} />
        <main className="profile-main">
        <ProfileCard/>
        </main>
        <Footer />
    </div>

}

export default ProfileDetailsPage;