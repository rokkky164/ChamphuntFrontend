import ChampButton from '../../commons/form/button';
import Coins from '../../assets/images/deals/coins.svg';

import './index.scss';

const DealsAlert = () => {

    const handleOnClick = () => {

    }

    return <div className="component deals-alert">
        
        <div className='left'>
            <span className='primary'>
                Hello , iamsomeone@gmail.com , Redeem your virtual coins with these e vouchers
            </span>
        </div>
        
        <div className='right'>
            <div className='add'>
                <span className='rupee primary'>&#8377; 00.00</span>
            </div>
            <div className='separator'>

            </div>
            <div className='coins'>
                <img src={Coins} alt=''/>
                <span className='primary' > 245 </span>
            </div>
        </div>        
    </div>
}

export default DealsAlert;