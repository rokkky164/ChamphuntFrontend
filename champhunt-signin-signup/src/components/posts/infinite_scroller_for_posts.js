import { useEffect, useState } from "react";
import axios from "axios";


const InfiniteScrollerPosts = (filterPitches, pageNumber, prevPosts) => {
	const [newPosts, setNewPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    let cancel;
	const accessToken = localStorage.getItem('access-token');
    let url = global.config.ROOTURL.prod + '/api/v0/pitches/';
    if (filterPitches) {
        if (filterPitches.filter == 'my_posts') {
            url = global.config.ROOTURL.prod + '/api/v0/pitches/?filter=user';
        } else if (filterPitches.filter == 'friends') {
            url = global.config.ROOTURL.prod + '/api/v0/pitches/?filter=friends';
        }
    }
    var getPostPageWiseOptions =  {
          method: 'GET',
          url: url,
          params: { offset: pageNumber },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
          json: true,
          cancelToken: new axios.CancelToken(c => cancel = c)
    }
    useEffect(() => {
        setLoading(true);
        setError(false);
        
        axios(getPostPageWiseOptions).then(res => {
            
            setNewPosts(prevPosts => [...prevPosts, ...res.data.results]);
            setHasMore(res.data.results.length > 0);
            setLoading(false);
        }).catch(e => {
          if (axios.isCancel(e)) {return}
          setError(true);
        })
        return () => cancel()
      }, [pageNumber])

    return { loading, error, newPosts, hasMore }
}

export default InfiniteScrollerPosts;