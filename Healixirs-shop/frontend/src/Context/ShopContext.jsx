import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const contextValue = { all_product };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
