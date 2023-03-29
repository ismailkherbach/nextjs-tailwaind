import React from "react";
import ReactECharts from "echarts-for-react";
import { getPieOptions } from "../../common/charts/pieChart";
import { BsThreeDots } from "react-icons/bs";
import CardTitle from "../CardTitle";
const Analytics = () => {
  return (
    <div className="bg-white rounded-lg h-12 card-analytics h-96">
      <CardTitle title="Analytics" Icon={<BsThreeDots color="grey" />} />
      <ReactECharts option={getPieOptions()} lazyUpdate={true} />
    </div>
  );
};

export default Analytics;
