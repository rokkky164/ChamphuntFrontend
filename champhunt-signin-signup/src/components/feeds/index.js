import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Alert from "../alerts";
import Hero from "../hero";
import Posts from "../posts";
import MyCarousel from "../carousel";

import './index.scss';

const Feeds = () => {

    return <div className="component feeds">
        <Alert />
        <Tabs className="tabs">
            <TabList>
                <Tab>All</Tab>
                <Tab>My posts</Tab>
                <Tab>By followers</Tab>
            </TabList>
            <TabPanel>
                <Hero />
                <Posts />
            </TabPanel>
            <TabPanel>
                <Posts filter={'my_posts'}/>
            </TabPanel>
            <TabPanel>
                <Posts filter={'friends'}/>
            </TabPanel>
        </Tabs>
    </div>
}

export default Feeds;