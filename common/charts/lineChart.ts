import { graphic } from "echarts/core";
import type { EChartsOption } from "echarts";

export type { EChartsOption };

export const getLineOptions = () => {
  const lineOptions: EChartsOption = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },

    grid: {
      left: "1%",
      right: "0%",
      bottom: "0%",
      top: "2%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        data: [
          "10am",
          "11am",
          "12am",
          "1am",
          "2am",
          "3am",
          "4am",
          "5am",
          "6am",
        ],
        minorTick: {
          show: false,
        },
        splitLine: {
          show: true,
        },

        axisLabel: { fontSize: "12px", color: "grey" },
      },
    ],

    yAxis: [
      {
        axisLine: { onZero: false },
        type: "value",
        axisLabel: { fontSize: "12px", color: "grey" },
        boundaryGap: false,
      },
    ],

    series: [
      {
        type: "line",
        stack: "Total",
        symbolSize: 12,
        symbol: "circle",
        smooth: true,
        itemStyle: { color: "#FFFFFF", borderWidth: 3, borderColor: "#AE8FF7" },
        lineStyle: {
          width: 5,
          color: new graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: "#FF5BEF",
            },
            {
              offset: 1,
              color: "#5BC4FF",
            },
          ]),
        },
        areaStyle: {
          opacity: 0.8,

          color: new graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff5bef15",
            },
            {
              offset: 1,
              color: "#5bc3ff1f",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [30, 40, 20, 40, 55, 30, 40, 20, 40],
      },
    ],
  };
  return lineOptions;
};
