import { Link } from 'react-router-dom';

import Comments from '../../assets/images/posts/comments.svg';
import Share from '../../assets/images/posts/share.svg';
import Runs from '../../assets/images/posts/runs.svg';

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
                    <p>{ date } {time}</p>
                </div>
            </div>
            <div className="right">
                <div className="icon-holder">

                </div>
                <div className="runs-cnt">
                    {runs} runs
                </div>
            </div>
        </div>
        <div className="post-content">
            {content}
        </div>
        <div className="post-footer">
            <div className="comments-hld">
                <img src={Comments} alt='' />
            </div>
            <div className="share-hld">
                <img src={Share} alt='' />
            </div>
            <div className="runs-hld">
                <img src={Runs} alt='' />
            </div>
        </div>
    </div>
}

export default Post;