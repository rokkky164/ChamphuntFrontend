import { Link } from 'react-router-dom';
import { useState } from 'react';

import ChampButton from '../../commons/form/button';

import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import Runs from '../../assets/images/posts/runs.svg';
import InfoIcon from '../../assets/images/posts/info.svg';

import './index.scss';

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
    const [sharing, setSharing] = useState(false);

    const toggleRuns = () => {
        setShowRuns(!showRuns);
    }

    const scorePost = (run) => {
        console.log( run );
    }

    const showModal = () => {
        setSharing(true);
    }

    const copyToClipboard = () => {
        const copyText = document.querySelector("#referId");
        copyText.select();
        document.execCommand("copy");
        closeModal();
    }

    const closeModal = () => {
        setSharing(false);
    }

    const sharePost = () => {
        console.log('CLOSING MODAL');
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
        <div className="post-footer post-header">
            <div className="comments-hld">
                {comments > 0 && <span className='info-box'>{comments}</span> }
                <img src={Comments} alt='' />
            </div>
            <div className="share-hld">
                <img src={Share} alt='' role='button' onClick={showModal} />
                <div className={`share-modal ${sharing?'visible':'hidden'}`}>
                    <div className='share-modal__container'>
                        <div className='share-modal__container__form'>
                            <div className='input-textarea'>
                                <textarea placeholder='Write Something'></textarea>
                            </div>
                            <div className="content left">
                                <div className="avatar">
                                    <img className="avatar-image" src={avatar} alt={name} />
                                <div className="avatar-cnt">
                                    <p>
                                        { name }
                                    </p>
                                    <p className='date-time'>{ date } {time}</p>
                                </div>
                                </div>
                                
                                <p className='content' >{content}</p>
                            </div>
                        </div>
                        <div className='share-modal__container__actions'>
                            <ChampButton onClick = {closeModal} classes='cancel secondary' label='Cancel' />
                            <ChampButton onClick = {sharePost} classes='share primary' label='Share' />
                        </div>
                        <div className='share-modal__container__more'>
                            <div className="link-block">
                                <p className='info'>
                                More ways to invite your friends
                                </p>
                                <div className='copy-link-cnt'>
                                    <div className='copy-btn-cnt'>
                                        <img className='link' src={Link} alt='' />
                                        <button onClick={copyToClipboard} className='copy'>
                                            Copy link
                                        </button>
                                    </div>
                                    <div className='copy-text-cnt'>
                                        <input className='refer-id' id='referId' value='https://ch.tt/LC9652T' readOnly={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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