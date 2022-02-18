import NewsLeadImage from '../../assets/images/news/LeadNewsImage.png';
import reporter from '../../assets/images/news/reporter.png';
import sachin from '../../assets/images/news/sachin.png';
import { Divider } from '@mui/material';

import './index.scss';

const NewsColumns = () => {
    return <div className="component news-columns">
                <div className='columns-right'>
                <div className='header'>COLUMNS</div>
                <Divider flexItem sx={{ borderRightWidth: 4 , background: 'white'}} />
                <div className='articles'>
                    <p className='article-header'>Cricket is a game of tremendous surprises</p>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 , background: 'white'}} />
                <div className='articles'>
                    <p className='article-header'>Cricket is a game of tremendous surprises</p>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                        <p className='author-name'>By Sameer Kanva</p>
                    </div>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 , background: 'white'}} />
                <div className='articles'>
                    <p className='article-header'>Cricket is a game of tremendous surprises</p>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                </div>
                <Divider flexItem sx={{ borderRightWidth: 4 , background: 'white'}} />
                <div className='articles'>
                    <p className='article-header'>Cricket is a game of tremendous surprises</p>
                    <div className='author-details'>
                        <img src={reporter} className='reporterimg'/>
                         <p className='author-name'>By Sameer Kanva</p>
                    </div>
                </div>
            </div> 
            <div className='columns-left'>
                <div className='news-details'>
                    <div className='news-type'>
                        INTERVIEWS
                    </div>
                    <div className='news-body'>
                        <p className='title'>Player of the year award and completion of this section</p>
                        <p className='news-article'>
                            Sachin Tendulkar has won his first ICC award, the Sir Garfield Sobers Trophy,
                            by being named the Cricketer of the Year during the 2010 ICC Award ceremony in
                            Bangalore. Tendulkar, however, lost out in the other major categories he was 
                            nominated in, with Virender Sehwag winning the Test Cricketer of the Year award
                            and AB de Villiers claiming the ODI prize.
                        </p>
                    </div>
                    <div className='news-image'>
                        <img src={sachin} />
                    </div>
                </div>
                <div className='author-details'>
                    <img src={reporter} className='reporterimg'/>
                     <p className='author-name'>By Sameer Kanva</p>
                </div>

            </div>
            <div className='columns-left'>
                <div className='news-details'>
                    <div className='news-type'>
                        INTERVIEWS
                    </div>
                    <div className='news-body'>
                        <p className='title'>Player of the year award and completion of this section</p>
                        <p className='news-article'>
                            Sachin Tendulkar has won his first ICC award, the Sir Garfield Sobers Trophy,
                            by being named the Cricketer of the Year during the 2010 ICC Award ceremony in
                            Bangalore. Tendulkar, however, lost out in the other major categories he was 
                            nominated in, with Virender Sehwag winning the Test Cricketer of the Year award
                            and AB de Villiers claiming the ODI prize.
                        </p>
                    </div>
                    <div className='news-image'>
                        <img src={sachin} />
                    </div>
                </div>
                <div className='author-details'>
                    <img src={reporter} className='reporterimg'/>
                     <p className='author-name'>By Sameer Kanva</p>
                </div>
            </div>

  
    </div>
}

export default NewsColumns;