import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './AddProduct.css';
import upload_area from '../../Assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    picture: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    console.log("Input name:", e.target.name);
    console.log("Input value:", e.target.value);
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      console.log(productDetails);
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append('product', image);

      const response = await fetch('http://localhost:5173/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      responseData = await response.json();

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show a notification to the user
      // Example: setErrorState(error.message);
    }
  };

  return (
    <div className='addproduct'>
      <div className="addproduct-item-field">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>

      <div className="product-price">
        <div className="addproduct-item-field">
          <p>Product price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
        </div>

        <div className="addproduct-item-field">
          <p>Offer price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>

      <div className="addproduct-item-field">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="herbs">Herbs</option>
        </select>
      </div>

      <div className="addproduct-item-field">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumbnail-img" alt='Product Thumbnail' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>

      <button onClick={Add_Product} className='addproduct-btn'>Add</button>
    </div>
  );
};

export default AddProduct;
