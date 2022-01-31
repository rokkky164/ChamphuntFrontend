import ChampButton from '../../commons/form/button';
import Coins from '../../assets/images/deals/coins.svg';

import './index.scss';

const DealsAlert = () => {

    const handleOnClick = () => {

    }
    const profileEmail = localStorage.getItem('user_email');
    return <div className="component deals-alert">
        
        <div className='left'>
            <span className='primary'>
                <span className='desktop-only greetings'> Hello , {profileEmail} ,</span>
                <span className='info'> Redeem your virtual coins with these e vouchers</span>
            </span>
        </div>
        
        <div className='right'>
            <div className='desktop-only add'>
                <span className='rupee primary'>&#8377; 00.00</span>
            </div>
            <div className='desktop-only separator'>

            </div>
            <div className='coins'>
                <img src={Coins} alt=''/>
                <span className='primary' > 245 </span>
            </div>
        </div>        
    </div>
}

export default DealsAlert;