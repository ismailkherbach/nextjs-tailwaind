import React from "react";
import Image from "next/image";
import { icons } from "../../../assets/images";
import { ITemProps, productsList } from "../../../utils/data";

{
  /* <th>Tracking no</th>
<th>Product Name</th>
<th>Price</th>
<th>Total Order </th>
<th>Total Amount</th> */
}

const TRowHeaders = [
  "Traking No",
  "Product Name",
  "Price",
  "Total Order",
  "Total Amount",
];
const ProductRow = ({ item }: { item: ITemProps }) => {
  return (
    <div className="flex flex-row items-center">
      <Image priority src={item.img} alt="Follow us on Twitter" />
      <p className="pl-4">{item.productName}</p>
    </div>
  );
};

const Table = () => {
  return (
    <div className="overflow-y-auto max-h-72">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {TRowHeaders.map((head: string) => {
              return (
                <th className="py-2 text-xs font-medium text-gray-500 tracking-wider text-left">
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {productsList.map((item) => {
            return (
              <tr>
                <td className="py-2 text-left text-xs text-030229">
                  {item.trakingNo}
                </td>
                <td className="py-2 text-left text-xs text-030229">
                  <ProductRow item={item} />
                </td>
                <td className="py-2 text-left text-xs text-030229">
                  {item.price}
                </td>
                <td className="py-2 text-left text-xs text-030229">
                  <div className="flex items-center justify-center order-card bg-opacity-20 rounded-8 text-cyon font-medium">
                    {item.total}
                  </div>
                </td>
                <td className="py-2 text-left text-xs text-030229">
                  {item.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
