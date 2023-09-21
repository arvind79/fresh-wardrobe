import { FiArrowUpRight } from 'react-icons/fi';

import "./style.css";

const Product = ( props ) => {
  
  const { image, title, category, description, price} = props;

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={image} className="product-img" alt={title} />
        <button className="product-arrow-btn">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="product-detail-container">
        {/* <h5>{category}</h5> */}
        <h4 className="product-title">{title.substring(0, 23)}</h4>
        <p className="product-desc">{description.substring(0, 120)}</p>
        <span className="product-price">${price}</span>
      </div>
    </div>
  );
};

export default Product;