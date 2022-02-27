import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Virat from './../../assets/images/header/virat.png';
import LordsCricketGround from '../../assets/images/news/Lords-Cricket-Ground-London.jpg';
import EAUSImage from '../../assets/images/news/EAusSemiFinal.jpg';

const  MyCarousel = () => (
    <Carousel dynamicHeight={true}>
        <div>
            <img src={Virat} style={{ 'max-height': '600px' }}/>
            <p className="legend">
            Virat Kohli becomes the 3rd Indian skipper to hit three consecutive world cup fifties.
            Mohd. Azaruddin was the first in the 1992 world cup.</p>
        </div>
        <div>
            <img src={LordsCricketGround} style={{ 'max-height': '600px'}}/>
            <p className="legend">
            Lords Cricket Ground London</p>
        </div>
        <div>
            <img src={EAUSImage} style={{ 'max-height': '600px' }}/>
            <p className="legend">
            Jonny Bairstow of England batting during a semifinal match against Australia at 
            the 2019 Cricket World Cup.</p>
        </div>
    </Carousel>
);

export default MyCarousel;