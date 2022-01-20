import Alert from "../alerts";
import Hero from "../hero";
import Posts from "../posts";

import './index.scss';

const Feeds = () => {
    return <div className="component feeds">
        <Alert />
        <Hero />
        <Posts />
    </div>
}

export default Feeds;