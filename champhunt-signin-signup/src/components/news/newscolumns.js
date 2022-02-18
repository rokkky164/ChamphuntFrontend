import NewsLeadImage from '../../assets/images/news/LeadNewsImage.png';
import reporter from '../../assets/images/news/reporter.png';
import sachin from '../../assets/images/news/sachin.png';
import gayle from '../../assets/images/news/chrisgayle.png';
import { Divider } from '@mui/material';
import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import './index.scss';

const NewsColumns = () => {

    const handleComment = () => {

    }
    
    const handleShare = () => {
        
    }

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
                <Divider flexItem sx={{ borderBottomWidth: 2 }} />
                <div className='post-footer'>
                    <img src={Comments} alt='' role='button' onClick={handleComment}/>
                    <img src={Share} alt='' role='button' onClick={handleShare}/>
                </div>

            </div>
            <div className='columns-left'>
                <div className='news-details'>
                    <div className='news-type'>
                        INTERVIEWS
                    </div>
                    <div className='news-body'>
                        <p className='title'>CWI likely to give Gayle a farewell game</p>
                        <p className='news-article'>
                            Cricket West Indies (CWI) are open to the idea of handing Chris Gayle a farewell
                            game in his hometown. The 42-year-old Jamaican had recently expressed his desire 
                            to play his last game in his hometown and the CWI said it is not averse to the idea.
                        </p>
                    </div>
                    <div className='news-image'>
                        <img src={gayle} />
                    </div>
                </div>
                <div className='author-details'>
                    <img src={reporter} className='reporterimg'/>
                     <p className='author-name'>By Sameer Kanva</p>
                </div>
                <Divider flexItem sx={{ borderBottomWidth: 2 }} />
                <div className='post-footer'>
                    <img src={Comments} alt='' role='button' onClick={handleComment}/>
                    <img src={Share} alt='' role='button' onClick={handleShare}/>
                </div>
            </div>

  
    </div>
}

export default NewsColumns;