import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllDeals from '../all-deals';

import Hero from "../hero";
import Posts from "../posts";

import './index.scss';

const Deals = () => {

    const handleChange = () => {

    }

    return <div className="component deals">
        <Tabs className="tabs" defaultIndex={1} >
            <TabList>
                <Tab disabled={true} >Sort by</Tab>
                <Tab>All</Tab>
                <Tab>Hot</Tab>
                <Tab>New</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel>
                <AllDeals />
            </TabPanel>
            <TabPanel>
                <AllDeals filter={'hot'}/>
            </TabPanel>
            <TabPanel>
                <AllDeals filter={'new'}/>
            </TabPanel>
        </Tabs>
    </div>
}

export default Deals;