import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getProducts } from "../../api";
import './style.css';
import Product from "../product/product";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const productsFun = async () => {
    const data = await getProducts();
    console.log(data.data);
    setProductsData(data.data);
  }

  // console.log("productsData: ", productsData);

  useEffect( () => {
    productsFun();
  }, [])

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >Prev</button>
        <button onClick={() => next()} >next</button>
        <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>
      </div>
    );
  };

  return (
    <>
      <div className="products">
        <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={true} customButtonGroup={<ButtonGroup />} >
          {
            productsData.map((item) => {
              return (
                <Product key={item.id} props={item} />
              )
            })
          }
      </Carousel>
      </div>
      
    </>
  )
}

export default Products;