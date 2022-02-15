import Button from "../../commons/form/button";
import NewsImage from '../../assets/images/header/postimg.png';
import NewsImage2 from '../../assets/images/news/ggwc1.png'

import { Divider } from '@mui/material';

import './index.scss';

const LiveWire = (props) => {

    const handleFollow = () => {

    }

    const { avatar, runs, followers, name, role } = props;

    return  <div className="component livewire-alert">
        <div className='topleft'>
            <p style={{ color: '#3385D6' }}> LIVE WIRE</p>
        </div>
        <div className="column">
            <div className="news-block ">
                <p>25 players that show us where Bowling is taking a new shape</p>
            </div>
            <img src={NewsImage} alt=''/>
        </div>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 3 }} />
        <div className="column">
            <div className="news-block ">
                <p>These new players are making some history</p>
            </div>
            <img src={NewsImage2} alt=''/>
        </div>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 3 }} />
        <div className="column">
            <div className="news-block ">
                <p>How do you teach new players to love trading</p>
            </div>
            <img src={NewsImage} alt=''/>
        </div>

    </div>
}

export default LiveWire;