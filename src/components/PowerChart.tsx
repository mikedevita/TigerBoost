/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";

function generateFakeData(previousData: any) {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const production = 2752425;
    const newConsumption = Math.random() * (production - 100000) + 100000; // Ensure consumption is between 100000 and production
    const previousConsumption = previousData[i]?.consumption || newConsumption;
    const consumption = (
      previousConsumption * 0.8 +
      newConsumption * 0.2
    ).toFixed(2); // Smooth transition
    const power_boost = 1693800.1;

    data.push({
      name: `Point ${i}`,
      consumption,
      production,
      power_boost,
    });
  }
  return data;
}

export function PowerChart() {
  const [data, setData] = useState(generateFakeData([]));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => generateFakeData(prevData));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div id="PowerChart">
      <div id="PowerChartContainer">
        <div id="ChartContent">
          <LineChart
            width={661}
            height={389}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="consumption"
              stroke="#E59344"
              strokeWidth="4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="production"
              stroke="#D0CFCF"
              strokeWidth="4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="power_boost"
              stroke="#A779A7"
              strokeWidth="4"
              dot={false}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
