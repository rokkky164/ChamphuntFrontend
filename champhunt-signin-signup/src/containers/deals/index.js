import Deals from "../../components/deals";
import DealsAlert from "../../components/deals-alert";
import Header from "../../components/header";

import './index.scss';

const DealsPage = () => {

    return <div className="page deals">
        <Header />
        <main className="deals-main">
            <DealsAlert />
            <Deals />
        </main>
    </div>

}

export default DealsPage;