import { useEffect, useState } from 'react';
import './index.scss';
import Suggestion from './suggestion';

const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        const data = [
            {
                name: "Pranav Karwa",
                role: "Bowler",
                avatar: "https://i.pravatar.cc/75",
                followers: 55,
                runs: 300,
                id: 1
            },{
                name: "Rajatesh Nath",
                role: "Umpire",
                avatar: "https://i.pravatar.cc/75",
                followers: 55,
                runs: 120,
                id: 2
            },{
                name: "Sameer Kanva",
                role: "Batsmen",
                avatar: "https://i.pravatar.cc/75",
                followers: 15,
                runs: 3000,
                id: 3
            }
        ];

        setSuggestions(data);

    }, []);

    return <div className="component suggestions">
        <p className='suggest-heading'>
            Suggestions
        </p>
        { suggestions.map( suggestion => <Suggestion key={suggestion.id} {...suggestion} /> ) }
    </div>
}

export default Suggestions;