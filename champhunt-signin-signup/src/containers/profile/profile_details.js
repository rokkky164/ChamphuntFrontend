import Deals from "../../components/deals";
import ProfileCard from "../../components/profile";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Activities from "../../components/activities/activities";
import Preferences from "../../components/preferences/preferences";

import "./index.scss";

const ProfileDetailsPage = () => {
  return (
    <div className="page profile">
      <Header showAdd={true} />
      <main className="profile-main">
        <ProfileCard />
        <div className="side-panel">
          <Activities />
          <Preferences />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileDetailsPage;
