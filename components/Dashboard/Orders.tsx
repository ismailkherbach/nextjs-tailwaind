import React from "react";
import { BsThreeDots } from "react-icons/bs";
import CardTitle from "../CardTitle";
import Table from "./misc/Table";

const Orders = () => {
  return (
    <div className="bg-white rounded-lg card-reports h-96">
      <CardTitle title="Recent Orders" Icon={<BsThreeDots color="grey" />} />
      <Table />
    </div>
  );
};

export default Orders;
