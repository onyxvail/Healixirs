import { useEffect, useState } from 'react';

import './ListProduct.css';
import cross_icon from '../../Assets/cross_icon.svg';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null); // State to hold error information

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      setError(error); // Set the error state if an error occurs during fetch
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Check for error and display an error message if error state is not null
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className='listproduct-allproducts'>
        <hr />
        {allProducts.map((product, index) => {
          console.log(product);
          return (
            <div key={index} className='listproduct-format-main listproduct-format'>
              <img src={product.image} alt='' className='listproduct-product-icon' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img className='listproduct-remove-icon' src={cross_icon} alt='remove' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;