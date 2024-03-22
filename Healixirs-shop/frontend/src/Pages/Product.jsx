import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';

const Product = () => {
    const { productID } = useParams();
    console.log('Product ID:', productID);

    const { all_product } = useContext(ShopContext);
    
    // Find the product based on the productID
    const product = all_product.find((e) => e.id === Number(productID));

    return (
        <div>
            <Breadcrum product={product} />
        </div>
    );
};

export default Product;
