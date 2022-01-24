import Feeds from "../../components/feeds";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Suggestions from "../../components/suggestions";

import './index.scss';

const PitchPage = () => {

    return <div className="page pitch">
        <Header />
        <main className="pitch-main">
            <Feeds />
            <Suggestions />
        </main>
        <Footer />
    </div>

}

export default PitchPage;