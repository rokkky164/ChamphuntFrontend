import NewsLeadImage from '../../assets/images/news/LeadNewsImage.png';
import reporter from '../../assets/images/news/reporter.png';
import { Divider } from '@mui/material';

import './index.scss';

const NewsLead = () => {
    return <div className="component hero">
        <div className='hero-cnt'>
            <div className='lead-image-01'>
                <div className='news-image-block'>
                    <img src={NewsLeadImage} alt='News Lead Image' />
                </div>
                <div className='news-image-content'>
                    <div className='reporter-details'>
                        <img src={reporter} className='reporterimg'/>
                        <p className='author-name'>By Sameer Kanva</p>
                    </div>
                    <p className='title'>DESTINATIONS</p>
                    <p className='news-heading'>
                    ICC Women's World Twenty20 2022 venues announced
                    </p>
                    <p className='date-time'>Jan 5 , 6.30pm</p>
                </div>
                <p>
                </p>
            </div>
            <div className='recommended-news'>
                <div className='header'>RECOMMENDED FOR YOU</div>
                <Divider flexItem sx={{ borderRightWidth: 4 }} />
                <div className='articles'>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                    Aussies roll over hosts and in command at end of Day 4
                    <p className='date-time'>Jan 5 , 6.30pm</p>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 }} />
                <div className='articles'>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                        <p className='author-name'>By Sameer Kanva</p>
                    </div>
                     Ben Stokes does the impossible in memorable ashes win
                    <p className='date-time'>Jan 5 , 6.30pm</p>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 }} />
                <div className='articles'>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                    Marsh stars as Aussies dominate opening day of final Ashes Test
                    <p className='date-time'>Jan 5 , 6.30pm</p>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 }} />
                <div className='articles'>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                    Why the IPL is not just a league of entertainment
                    <p className='date-time'>Jan 5 , 6.30pm</p>
                </div>
            </div>
            
        </div>
    </div>
}

export default NewsLead;