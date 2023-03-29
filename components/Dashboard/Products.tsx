import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { icons } from "../../assets/images";
import { IProductProps, products } from "../../utils/data";
import CardTitle from "../CardTitle";

const Product = ({ product }: { product: IProductProps }) => {
  return (
    <div className="flex flex-row">
      <Image src={product.img} alt="product" />
      <div className="items-start mx-6">
        <h3>{product.name}</h3>
        <div className="flex flex-row items-start my-2.5">
          {Array.from({ length: product.starts }, (_) => {
            return <Image src={icons.onStar} alt="star" />;
          })}
          {product.starts < 5 &&
            Array.from({ length: 5 - product.starts }, (_) => {
              return <Image src={icons.offStar} alt="star" />;
            })}
        </div>
        <h3 className="font-medium">{product.price}</h3>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-white rounded-lg h-12 card-analytics h-96">
      <CardTitle
        title="Top Selling Products"
        Icon={<BsThreeDots color="grey" />}
      />

      <div className="overflow-y-auto max-h-72">
        {products.map((product) => {
          return (
            <>
              <Product product={product} />
              <div className="w-full h-px bg-black my-4 bg-opacity-5" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
