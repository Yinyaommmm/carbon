import { t } from "i18next";
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
interface EnergyLineChartProps {
  data: { month: string; value: number }[];
}
export const EnergyLineChart = ({ data }: EnergyLineChartProps) => {
  const convertedData = data.map((item) => {
    return { month: t(`supplierDetail.${item.month}`), value: item.value };
  });
  return (
    <div className="w-full h-68 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart
          data={convertedData}
          margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
            dy={10}
          />
          <YAxis
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
            itemStyle={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#10b981",
            }}
            formatter={(value, name, props) => {
              // value 是当前数值, name 是原本的 key 名
              return [`${value} kWh/unit`];
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};
