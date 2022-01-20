import Button from '../../commons/form/button';

import './index.scss';

import Avatar from '../../assets/images/header/avatar.png';

const Alert = () => {

    const handleOnClick = () => {

    }

    return <div className="component alert">
        
        <div className='left'>
            <img src={Avatar} alt='' />
            <span className='primary'>
                Hello, test@customer.com
            </span>
        </div>
        
        <div className='right'>
            <Button
                label = 'Submit a post'
                classes = 'create-post'
                onClick = { handleOnClick }
            />
        </div>        
    </div>
}

export default Alert;