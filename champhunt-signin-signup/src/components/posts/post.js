const Post = ( props ) => {

    const { 
        author: {
            name,
            url,
            avatar
        },
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
                    <p>{ name }</p>
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
                CMN
            </div>
            <div className="share-hld">
                SHR
            </div>
            <div className="runs-hld">
                RUNS
            </div>
        </div>
    </div>
}

export default Post;