import { useEffect, useState } from "react";

import Deal from './deal';

import './index.scss';

const AllDeals = () => {

    const [deals,setDeals] = useState([]);

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