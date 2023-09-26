import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { getProductCategories } from "../utils/api";

// const linksArray = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   {
//     name: "Our Products",
//     id: "product",
//     child: [
//       { name: "Product 1", id: "p1" },
//       { name: "Product 2", id: "p2" },
//       { name: "Product 3", id: "p3" },
//       { name: "Product 4", id: "p4" },
//     ],
//   },
//   { name: "Contact Us", id: "contact" },
// ];


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isProductsShowing, setIsProductsShowing] = useState(false);
  const [categories, setCategories] = useState([]);

  let obj = {
    name: "Our Products",
    id: "product",
    child: categories.map((category, index) => {
      return (
        {
          name: category,
          id: index,
        }
      )
    })
  }

  const linksArray = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    obj,
    { name: "Contact Us", id: "contact" },
  ]

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    let categoryList = await getProductCategories();
    categoryList = categoryList.data;
    setCategories(categoryList);
  }

  console.log("navbar categories: ", categories);

  const handleBtnClick = () => {
    setIsNavShowing((prev) => !prev);
  };

  const handleProductClick = (valueName) => {
    if (valueName == "Our Products") {
      setIsProductsShowing((prev) => !prev);
    }
  };

  return (
    <div className="navbar-container flex">
      <div className="nav-upper flex">
        <h3 className="shopkart">ShopKart</h3>
        <div className="upper-right flex">
          <h5 className="right-item">WISHLIST (0)</h5>
          <h5 className="right-item">BAG (0)</h5>
          <button className="nav-toggle-btn btn" onClick={handleBtnClick}>
            {isNavShowing ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div className="line"></div>
    
      <div className={`nav-lower ${isNavShowing ? "show-nav" : "hide-nav"}`}>
        <ul className={`nav-links`}>

          {linksArray.map((value) => {
            let navList = <NavLink to={"/"}>{value.name}</NavLink>;

            const productList =
              value.name === "Our Products"
                ? value.child.map((product) => {
                    return <li key={product.id}>{product.name}</li>;
                  })
                : "";

            let list = (
              <li key={value.id} onClick={() => handleProductClick(value.name)}>
                <>{navList}</>
                {value.name === "Our Products" ? (
                  <ul
                    className={`products-list ${
                      isProductsShowing ? "show-products" : "hide-products"
                    }`}
                  >
                    {productList}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );

            return list;
          })}
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// for NavLink :- className={({isActive}) => isActive ? "active-nav" : ""}
