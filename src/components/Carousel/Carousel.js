//Modulos
import Carousel from 'react-bootstrap/Carousel';

//Estilos
import "./Carousel.css"

function CarouselFadeExample() {
    return (
        <Carousel fade>
        <Carousel.Item className='carousel-item'>
            <img 
            className="d-block img-customization"
            src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            alt="First slide"
            />
            <Carousel.Caption className='carousel-caption'>
            <h3>WE WALK A CERTAIN WAY</h3>
            <p>You can have anything you want in life if you dress for it.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-customization"
            src="https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1942&q=80"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>WE DRESS A CERTAIN WAY</h3>
            <p>You decide what you are, what you want to express.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-customization"
            src="https://images.unsplash.com/photo-1602509380108-a47060db0a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>WE TALK A CERTAIN WAY</h3>
            <p>
                You can see the approaching
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;