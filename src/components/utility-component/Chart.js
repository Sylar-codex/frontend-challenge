import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
function Chart({ darkMode }) {
  const data = [
    { id: 1, month: "Jan", income: 6000 },
    { id: 2, month: "Feb", income: 19000 },
    { id: 3, month: "Mar", income: 3000 },
    { id: 4, month: "Apr", income: 24000 },
    { id: 5, month: "Mei", income: 8000 },
    { id: 6, month: "Jun", income: 45000 },
    { id: 7, month: "Jul", income: 9000 },
    { id: 8, month: "Aug", income: 21000 },
    { id: 9, month: "Sep", income: 31000 },
    { id: 10, month: "Okt", income: 4000 },
    { id: 11, month: "Nov", income: 3000 },
    { id: 12, month: "Des", income: 25000 },
  ];
  return (
    <div className="lg:-mt-10">
      <VictoryChart
        width={600}
        height={320}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        gridX={false}
      >
        <Gradients />
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={data.map((d) => d.month)}
          style={{
            axis: { stroke: "none" },

            tickLabels: { fontSize: 11, padding: 5, fill: "#737373" },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "none" },
            tickLabels: { fontSize: 11, padding: 5, fill: "#737373" },
            grid: { stroke: "#DADDDD", strokeDasharray: "5,5" },
          }}
          domain={{ min: 0, max: 60.0 }}
          tickValues={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
          tickFormat={(t) => t.toLocaleString("de-DE")}
        />
        <VictoryBar
          data={data}
          x="month"
          y="income"
          cornerRadius={{ top: 8 }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          events={[
            {
              childName: ["pie", "bar"],
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      mutation: (props) => {
                        return {
                          style: {
                            fill: "url(#linear-gradient)",
                            fillOpacity: 1,
                          },
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
          style={{
            data: {
              fill: "#34CAA5",
              fillOpacity: 0.22,
              width: 21,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}
export default Chart;

const Gradients = () => (
  <svg style={{ height: 0 }}>
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0%"
        y1="100%"
        x2="0%"
        y2="25%"
        y3="50%"
        x3="0%"
      >
        <stop offset="15%" stopColor="#EAFBF7" />
        <stop
          offset="80%"
          style={{ stopColor: "#1F9AA2", stopOpacity: 0.68 }}
        />
        <stop offset="100%" stopColor="#34CAA5" />
      </linearGradient>
    </defs>
  </svg>
);
