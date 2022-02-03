import { Link } from 'react-router-dom';

import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import Runs from '../../assets/images/posts/runs.svg';
import InfoIcon from '../../assets/images/posts/info.svg';

import './index.scss';
import { useState } from 'react';

const Post = ( props ) => {

    const { 
        author: {
            name,
            url,
            avatar
        },
        coAuthor: {
            name: coAuthorName,
            url: coAuthorURL
        } = {},
        post: {
            date,
            time,
            content,
            image,
            comments,
            runs
        }
    } = props;

    const [showRuns, setShowRuns] = useState(false);

    const toggleRuns = () => {
        setShowRuns(!showRuns);
    }

    const scorePost = (run) => {
        console.log( run );
    }

    return <div className="post">
        <div className="post-header">
            <div className="left">
                <div className="avatar">
                    <img className="avatar-image" src={avatar} alt={name} />
                </div>
                <div className="avatar-cnt">
                    <p>
                        { name }
                        { coAuthorName && <> shared <Link className='shared-link' to={coAuthorURL}> {coAuthorName} </Link> post</> }
                    </p>
                    <p className='date-time'>{ date } {time}</p>
                </div>
            </div>
            <div className="right">
                <div className="icon-holder">
                    <img className='info-icon' src={InfoIcon} alt=''/>
                </div>
                <div className="runs-cnt">
                    <span className='runs-info'>{runs} runs</span>
                </div>
            </div>
        </div>
        <div className="post-content">
            {content}
        </div>
        <div className="post-footer">
            <div className="comments-hld">
                {comments > 0 && <span className='info-box'>{comments}</span> }
                <img src={Comments} alt='' />
            </div>
            <div className="share-hld">
                <img src={Share} alt='' />
            </div>
            <div className="runs-hld">
                <img src={Runs} alt='' role='button' onClick={toggleRuns} />
                <div className={`tip ${showRuns?'visible':'hidden'}`}>
                    <div className='runs-container'>
                        { [2,4,6].map( run => <div role='button' onClick={() => scorePost(run)} className='run' key={run}>{run}</div> ) }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Post;