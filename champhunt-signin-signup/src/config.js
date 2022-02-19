module.exports = global.config = {
    ROOTURL: {
        local: 'http://localhost:8001',
        prod: 'http://champhuntsm-env.eba-zezpix24.us-west-1.elasticbeanstalk.com'
    },
    WSURLS : {
        local: 'ws://localhost:8001',
        prod: 'ws://champhuntsm-env.eba-zezpix24.us-west-1.elasticbeanstalk.com'
    },
    ROOTURL_FOR_REACT: {
        local: 'http://localhost:3000',
        prod: 'http://champhunt.com'
    }
};