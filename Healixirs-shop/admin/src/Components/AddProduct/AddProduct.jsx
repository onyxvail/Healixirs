import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../Assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  

  return (
    <div className='addproduct'>
      <div className="addproduct-item-field">
        <p>Product title</p>
        <input type="text" placeholder="Type here" />
      </div>
       
      <div className="product-price">
        <div className="addproduct-item-field">
          <p>Product price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        
        <div className="addproduct-item-field">
          <p>Offer price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
         
      <div className="addproduct-item-field">
        <p>Product Category</p>
        <select name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="herbs">Herbs</option>
        </select>
      </div>

      <div className="addproduct-item-field">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumbnail-img" alt='Product Thumbnail'/>
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      
      <button className='addproduct-btn'>Add</button>
    </div>
  );
};

export default AddProduct;
