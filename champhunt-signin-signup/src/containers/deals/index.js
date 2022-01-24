import Deals from "../../components/deals";
import DealsAlert from "../../components/deals-alert";
import Header from "../../components/header";
import Footer from "../../components/footer";

import './index.scss';

const DealsPage = () => {

    return <div className="page deals">
        <Header />
        <main className="deals-main">
            <DealsAlert />
            <Deals />
        </main>
        <Footer />
    </div>

}

export default DealsPage;