import { t } from "i18next";
import { Activity } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface CarbonAreaChartProps {
  timeRange: string;
  chartData: { name: string; value: number }[];
}
export default function CarbonAreaChart({
  timeRange,
  chartData,
}: CarbonAreaChartProps) {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
          <Activity size={20} className="text-emerald-500" />
          {t("chart_trend")}
        </h3>
        <div className="text-[12px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded">
          {timeRange === "30d" ? t("SAMPLING") : t("MONTHLY_AGGREGATED")}
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* 网格线：仅水平线 */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            {/* X轴：对应之前的 trendLabels */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: "bold" }}
              dy={10}
            />

            {/* Y轴：添加单位标注 */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: "bold" }}
              unit=" t" // 这里可以显示单位
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                padding: "10px 12px",
              }}
              // 修改顶部的标签名称 (例如: 1st 数据统计 或 Jan Trend)
              labelFormatter={(label) => {
                const suffix =
                  timeRange === "30d" ? t("chart.stats") : t("chart.trend");
                return `${label} ${suffix}`;
              }}
              // 修改数值显示 (例如: 125 t CO2 : 碳排放量)
              formatter={(value) => [`${value} t CO₂`, t("chart.emissions")]}
              // 建议优化光标线的颜色，使其更柔和
              cursor={{ stroke: "#f1f5f9", strokeWidth: 2 }}
            />

            {/* 面积与曲线 */}
            <Area
              type="monotone" // 平滑曲线，如果想要折线可以改为 "linear"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#trendGrad)"
              activeDot={{ r: 6, strokeWidth: 0, fill: "#10b981" }} // 选中的圆点
              dot={{
                r: 4,
                fill: "white",
                stroke: "#10b981",
                strokeWidth: 2,
              }} // 常规圆点
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
