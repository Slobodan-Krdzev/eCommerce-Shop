import React from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "../types/types";

type RelatedProductsProps = {
  products: ProductType[]
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({products = []}) => {
  
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {products.map(product => <ProductItem key={product.id} {...product}/>)}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
