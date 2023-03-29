import React from "react";
import ReactECharts from "echarts-for-react";
import { getLineOptions } from "../../common/charts/lineChart";
import { BsThreeDots } from "react-icons/bs";
import CardTitle from "../CardTitle";

const Reports = () => {
  return (
    <div className="bg-white rounded-lg card-reports h-96">
      <CardTitle title="Reports" Icon={<BsThreeDots color="grey" />} />
      <ReactECharts option={getLineOptions()} lazyUpdate={true} />
    </div>
  );
};

export default Reports;
