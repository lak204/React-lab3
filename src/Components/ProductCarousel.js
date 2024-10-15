import React from 'react';
import { Carousel } from 'react-bootstrap';
import pizza1 from '../images/pizza1.jpg'; 
import pizza2 from '../images/pizza2.jpg';
import pizza3 from '../images/pizza3.jpg'; 
import pizza4 from '../images/pizza4.jpg'; 
import pizza5 from '../images/pizza5.jpg'; 
const ProductCarousel = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza1}
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza2}
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza3}
          alt="Pizza Margherita"
        />
        <Carousel.Caption>
          <h3>Pizza Margherita</h3>
          <p>Classic pizza with tomatoes and mozzarella cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza4}
          alt="Pizza Pepperoni"
        />
        <Carousel.Caption>
          <h3>Pizza Pepperoni</h3>
          <p>Delicious pepperoni pizza with a rich tomato base.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza5}
          alt="Pizza BBQ"
        />
        <Carousel.Caption>
          <h3>Pizza BBQ</h3>
          <p>Barbecue pizza with tender chicken and smoky flavors.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;