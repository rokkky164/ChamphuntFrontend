import { useEffect, useState } from "react";
import axios from "axios";
import Deal from './deal';

import './index.scss';

const AllDeals = () => {

    const [deals, setDeals] = useState([]);
    let url = global.config.ROOTURL.prod + '/api/v0/offers/';
    const accessToken = localStorage.getItem('access-token');
    var getDealsOptions = {
        method: 'get',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        json: true
    };
    useEffect(() => {
        axios(getDealsOptions)
            .then(response => {
                const results = response.data;
                let offers = [];
                for (let i = 0; i < results.length; i++) {
                    offers.push({
                        tag: "HOT",
                        src: global.config.ROOTURL.prod + '' + results[i].brand.logo,
                        crickcoins_required: results[i].crickcoins_required,
                        offername: results[i].name
                    });
                }
                setDeals(offers);
            })
            .catch(error => {})
    }, [])

    return <div className="component all-deals">
        { 
            deals.map( (deal, index) => {
                return <Deal key={index} {...deal} />;
            })
        }
    </div>
}

export default AllDeals;