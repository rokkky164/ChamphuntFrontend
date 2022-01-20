import Virat from '../../assets/images/header/virat.png';

import './index.scss';

const Hero = () => {
    return <div className="component hero">
        <div className='hero-cnt'>
            <div className='image-block'>
                <img src={Virat} alt='Virat Kohli' />
            </div>
            <p className='hero-content'>
                Virat Kohli becomes the 3rd Indian skipper to hit three consecutive world cup fifties.
                Mohd. Azaruddin was the first in the 1992 world cup. 
            </p>
        </div>
    </div>
}

export default Hero;