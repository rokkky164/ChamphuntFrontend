import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import ChampButton from '../../commons/form/button';

import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import Runs from '../../assets/images/posts/runs.svg';
import InfoIcon from '../../assets/images/posts/info.svg';
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import './index.scss';

const Post = ( props ) => {
    const { 
        author: {
            name,
            url,
            avatar
        },
        coAuthor: {
            coAuthorName,
            coAuthorURL
        } = {},
        post: {
            post_id,
            date,
            time,
            content,
            image,
            comments=[],
            runs
        }
    } = props;
    const [posts, setPosts] = useState([]);
    const [showRuns, setShowRuns] = useState(false);
    const [sharing, setSharing] = useState(false);
    const [comment, setComment] = useState('')
    const [showComments, setShowComments] = useState(false);
    const [commentData, setCommentData] = useState({
        pitch: '',
        comment: '',
        userprofile: ''
    });
    const [sharedBody, setSharedBody] = useState('');
    const [liverun, setRuns] = useState(0);
    
    const getSharedBody = (event) => {
        setSharedBody(event.target.value);
    }
    const getCommentData = (comment) => {
        commentData.comment = comment.target.value;
    }

    const toggleRuns = () => {
        setShowRuns(!showRuns);
    }

    const scorePost = (post_id, run) => {
        const userprofile = localStorage.getItem('profile-id');
        const scorePostData = {
            pitch: post_id,
            runs_awarded: run,
            userprofile: userprofile
        };
        const accessToken = localStorage.getItem('access-token');
        var scorePostOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/user-score-pitch/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: scorePostData,
            json: true
        };

        axios(scorePostOptions)
            .then(response => {
                setShowRuns(!showRuns);
            })
            .catch(error => {
                setShowRuns(!showRuns);
            })
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

    const handleComment = () => {
        setShowComments(true);
    }

    const closeModal = () => {
        setSharing(false);
    }

    const sharePost = (post_id) => {
        const userprofile = localStorage.getItem('profile-id');
        const sharePostData = {
            pitch_id: post_id,
            shared_user: userprofile,
            shared_body: sharedBody
        };
        const accessToken = localStorage.getItem('access-token');
        var sharePostOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/share-pitch/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: sharePostData,
            json: true
        };
        axios(sharePostOptions)
            .then(response => {
                setPosts([response.data]);
                closeModal();
            })
            .catch(error => {
            })
    }

    const closeComment = () => {
        setShowComments(false);
    };

    const postComment = (post_id) => {
        commentData.userprofile = localStorage.getItem('profile-id');
        commentData.pitch = post_id;
        const accessToken = localStorage.getItem('access-token');
        var submitPostCommentOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/submit-comment/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: commentData,
            json: true
        };
        axios(submitPostCommentOptions)
            .then(response => {
                closeComment();
            })
            .catch(error => {
                console.log(error);
            })
    };
    useEffect(() => {
        const clientScore = new W3CWebSocket(global.config.WSURLS.prod + '/ws/api/score-pitch/' + post_id + '/');
        clientScore.onmessage = (message) => {
            var data = JSON.parse(JSON.parse(message.data));
            setRuns(data.runs_awarded);
        };
        // comment 
        const clientComment = new W3CWebSocket(global.config.WSURLS.prod + '/ws/api/comment-pitch/' + post_id + '/');
        clientComment.onmessage = (message) => {
            var data = JSON.parse(JSON.parse(message.data));
            setRuns(data.runs_awarded);
        };
    }, [])
    return <div className="post">
        <input type="hidden" id="pitchID" value={post_id} />
        <div className="post-header">
            <div className="left">
                <div className="avatar">
                    <img className="avatar-image" src={avatar} alt={name} />
                </div>
                <div className="avatar-cnt">
                    <p>
                        { name }
                        { coAuthorName && <> shared<Link className='shared-link' to={coAuthorURL}> {name} </Link> post</> }
                    </p>
                    <p className='date-time'>{ date } {time}</p>
                </div>
            </div>
            <div className="right">
                <div className="icon-holder">
                    <img className='info-icon' src={InfoIcon} alt=''/>
                </div>
                <div className="runs-cnt">
                    <span className='runs-info'>{liverun ? liverun:runs} runs</span>
                </div>
            </div>
        </div>
        <div className="post-content">
            {content}
            <img className='post-image' src={image} alt=''/>
        </div>
        <div className="post-footer post-header">
            <div className="comments-hld">
                {comments.length > 0 && <span className='info-box'>{comments.length}</span> }
                <img src={Comments} alt='' role='button' onClick={handleComment}/>
            </div>
            <div className="share-hld">
                <img src={Share} alt='' role='button' onClick={showModal} />
                <div className={`share-modal ${sharing?'visible':'hidden'}`}>
                    <div className='share-modal__container'>
                        <div className='share-modal__container__form'>
                            <div className='input-textarea'>
                                <textarea placeholder='Write Something' id="sharedBody" onChange={getSharedBody}></textarea>
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
                            <ChampButton onClick={() => sharePost(post_id)} classes='share primary' label='Share' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="runs-hld">
                <img src={Runs} alt='' role='button' onClick={toggleRuns} />
                <div className={`tip ${showRuns?'visible':'hidden'}`}>
                    <div className='runs-container'>
                        { [2,4,6].map( run => <div role='button' onClick={() => scorePost(post_id, run)} className='run' key={run}>{run}</div> ) }
                    </div>
                </div>
            </div>
        </div>
        <div className={`comments-holder ${showComments?'visible':'hidden'}`}>
            <div className='post-comment'>
                <div className='text-block'>
                    <textarea placeholder='Write a comment' onChange={getCommentData} ></textarea>
                </div>
                <div className='action-block'>
                    <ChampButton onClick={closeComment} classes='cancel' label='Cancel' />
                    <ChampButton onClick={() => postComment(post_id)} classes='share' label='Post' />
                </div>
            </div>
            <div className='post-header view-comments'>
                <p className='comments-heading'>{ `${comments.length} Comments` }</p>
                <div className='all-comments'>
                { 
                comments.map( (comment, index) => {

                    const { author, comment: postComment } = comment;

                    return <div key={index} className='comment'>
                        <div className="left">
                            <div className="avatar">
                                <img className="avatar-image" src={avatar} alt={author.name} />
                            </div>
                            <div className="avatar-cnt">
                                <p>
                                    { author.first_name } {author.last_name}
                                </p>
                                <p className='date-time'>{ comment.date } {comment.time}</p>
                            </div>
                        </div>
                        <div className='comment-content'>
                            {comment.comment}
                        </div>
                    </div>
                })
                }
                </div>
            </div>
        </div>
    </div>
}

export default Post;