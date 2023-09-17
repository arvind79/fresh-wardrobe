import "./style.css";

const Product = ({ props }) => {
  const { image, title, category, description, price} = props;

  return (
    <div className="product">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h5>{category}</h5>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Product;
