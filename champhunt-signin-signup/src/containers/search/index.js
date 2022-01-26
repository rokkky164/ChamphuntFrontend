import Footer from "../../components/footer";
import Header from "../../components/header";
import SearchComponent from "../../components/search";

import './index.scss';

const SearchPage = () => {

    return <div className="page search">
        <Header />
        <main className="search-main">
            <SearchComponent />
        </main>
        <Footer />
    </div>

}

export default SearchPage;