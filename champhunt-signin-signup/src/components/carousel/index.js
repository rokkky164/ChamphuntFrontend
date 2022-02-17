import Carousel from 'flat-carousel';

const images = [
    { src: 'some image' },
    { src: 'some image' },
    { src: 'some image' }
];

const MyCarousel = () => (
    <Carousel>
        {images.map((image, index) => (
            <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: 'url(' + image.src + ')' }}
            />
        ))}
    </Carousel>
)

export default MyCarousel;