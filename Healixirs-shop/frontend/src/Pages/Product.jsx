import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { Footer } from '../Components/Footer/Footer';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
    const { productID } = useParams();
    console.log('Product ID:', productID);

    const { all_product } = useContext(ShopContext);
    
    // Find the product based on the productID
    const product = all_product.find((e) => e.id === Number(productID));

    return (
        <div>
            <Breadcrum product={product} />

            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
            <Footer/>
        </div>
    );
};

export default Product;
