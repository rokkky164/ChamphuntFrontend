import { useEffect, useState } from "react";
import axios from "axios";
import Deal from './deal';

import './index.scss';

const AllDeals = () => {

    const [deals,setDeals] = useState([]);
    let url = 'http://127.0.0.1:8001/api/v0/offers/';
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
    useEffect(()=>{
        const deals = [
            {
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "NEW",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            },{
                tag: "HOT",
                src: "./puma.png"
            }
        ];

        setDeals( deals );
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