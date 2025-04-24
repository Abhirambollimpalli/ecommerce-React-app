
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div className='productPage'>
      <ul id="pro">
        <li>
          <Link to="/product/women">
            <img src="/women.jpg" alt="Women Products" className="product-image" id='p1' />
          </Link>
        </li>
        <li>
          <Link to="/product/men">
            <img src="/men.jpg" alt="Men Products" className="product-image" id='p1' />
          </Link>
        </li>
        <li>
          <Link to="/product/child">
            <img src="/child.jpg" alt="Child Products" className="product-image" id='p1'/>
          </Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
