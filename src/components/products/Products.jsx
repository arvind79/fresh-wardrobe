import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getProductCategories, getProducts } from "../../api";
import "./style.css";
import Product from "../product/Product";
import smallStar from "../../assets/images/small-star-2.svg";
import longLeftArrow from "../../assets/images/long-left-arrow.svg";
import longRightArrow from "../../assets/images/long-right-arrow.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Products = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentCategory, setCurrentCategory] = useState("");

  console.log(filteredProducts);

  const productCategoriesFun = async () => {
    const categories = await getProductCategories();
    console.log(categories.data);
    setProductCategories(categories.data);
  };

  const productsFun = async () => {
    const products = await getProducts();
    // console.log(products.data);
    setProductsData(products.data);
    setFilteredProducts(products.data);
  };

  const handleCategoryClick = (e) => {
    console.log(e.target.innerText);
    setCurrentCategory(e.target.innerText);
    filterData(e.target.innerText);
  };

  const filterData = (currentCategory) => {
    const result = productsData.filter((product) => {
      return product.category.toLowerCase() === currentCategory.toLowerCase();
    });
    console.log("result", result);
    setFilteredProducts(result);
  };

  // console.log("productsData: ", productsData);

  useEffect(() => {
    productCategoriesFun();
    productsFun();
  }, []);

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group both-arrows-container">
        <button className="long-left-arrow" onClick={() => previous()}>
          <img src={longLeftArrow} alt="long left arrow" />
        </button>
        <button className="long-right-arrow" onClick={() => next()}>
          <img src={longRightArrow} alt="long right arrow" />
        </button>
      </div>
    );
  };

  return (
    <section className="products-section">
      <div className="section-title">
        <h2>New products</h2>
        <img src={smallStar} alt="small star" />
      </div>

      <ul className="categories">
        {productCategories.map((category, index) => {
          return (
            <li
              key={index}
              className={`category-item ${
                currentCategory.toLowerCase() === category ? "highlight" : ""
              }`}
              onClick={handleCategoryClick}
            >
              {category}
            </li>
          );
        })}
      </ul>

      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {filteredProducts?.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </Carousel>
    </section>
  );
};

export default Products;

// customButtonGroup={<ButtonGroup />}
