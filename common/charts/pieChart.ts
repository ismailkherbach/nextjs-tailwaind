import type { EChartsOption } from "echarts";

export type { EChartsOption };

export const getPieOptions = () => {
  const pieOptions: EChartsOption = {
    color: ["#5B93FF", "#FFD66B", "#FF8F6B", "#5b92ff25"],

    legend: {
      top: "bottom",
    },
    toolbox: {
      show: false,
    },
    title: {
      text: "80%",
      textStyle: { fontSize: 30 },
      subtext: "Transactions",
      subtextStyle: { fontSize: 16 },
      left: "center",
      top: "30%",
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [80, 120],
        center: ["50%", "40%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 24,
        },
        label: {
          show: false,
        },
        data: [
          { value: 40, name: "Sale" },
          { value: 38, name: "Distribute" },
          { value: 32, name: "Return" },
          { value: 20, name: "Others" },
        ],
      },
    ],
  };
  return pieOptions;
};
