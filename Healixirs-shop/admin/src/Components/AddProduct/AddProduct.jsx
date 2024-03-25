import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../Assets/upload_area.svg';

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
  }) 


  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  
  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
  },
      body: formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data;})
    if (responseData.success)
    {
       product.image = responseData.image_url;
       console.log(product);
    }
  }


  return (
    <div className='addproduct'>
      <div className="addproduct-item-field">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" placeholder="Type here" />
      </div>
       
      <div className="product-price">
        <div className="addproduct-item-field">
          <p>Product price</p>
          <input value={productDetails.old_price} onChange={changeHandler}type="text" name="old_price" placeholder="Type here" />
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
          <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumbnail-img" alt='Product Thumbnail'/>
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add</button>
    </div>
  );
};

export default AddProduct;
