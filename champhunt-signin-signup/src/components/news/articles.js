import NewsLeadImage from '../../assets/images/news/LeadNewsImage.png';
import reporter from '../../assets/images/news/reporter.png';
import hayden from '../../assets/images/news/hayden-kerr-scored-an-unbeaten.png';
import { Divider } from '@mui/material';
import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import Header from "../../components/header";

import Button from "../../commons/form/button";

import './index.scss';

const ArticlePage = (props) => {

    const handleComment = () => {

    }
    
    const handleShare = () => {
        
    }

    return <div className="page news-article">
    <Header showAdd={true} />
    <div className="component news-article-screen">
            <div className='author-details'>
                    <img src={reporter} className='reporterimg'/>
                     <p className='author-name'>By Sameer Kanva</p>
            </div>
            <p className='title'>Hayden Kerr 87* leads NSW's recovery</p>
            <div className='news-article-body'>
                <div className='news-article-image'>
                    <img src={hayden} />
                </div>
                <div className='news-details'>
                    <div className='news-body'>
                        
                        <p className='news-article'>
                            Sachin Tendulkar has won his first ICC award, the Sir Garfield Sobers Trophy,
                            by being named the Cricketer of the Year during the 2010 ICC Award ceremony in
                            Bangalore. Tendulkar, however, lost out in the other major categories he was 
                            nominated in, with Virender Sehwag winning the Test Cricketer of the Year award
                            and AB de Villiers claiming the ODI prize.
                        </p>
                    </div>

                </div>

                <Divider flexItem sx={{ borderBottomWidth: 2 }} />
                <div className='post-footer'>
                    <img className='comment-icon' src={Comments} alt='' role='button' onClick={handleComment}/>
                    <img className='share-icon' src={Share} alt='' role='button' onClick={handleShare}/>
                </div>

            </div>

  
    </div>
    </div>
}

export default ArticlePage;