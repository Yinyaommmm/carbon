import {
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
  Legend,
  PieChart as RePieChart,
} from "recharts";

export const EnergyPieChart = ({ data }) => {
  return (
    <div className="w-full h-64 mt-4 flex flex-col items-center relative -top-4">
      <ResponsiveContainer width="100%" height="100%">
        <RePieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
            itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            content={({ payload }) => (
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4">
                {payload.map((entry, index) => (
                  <li
                    key={`item-${index}`}
                    className="flex items-center gap-1.5"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-500">
                      {entry.value} ({data[index].value}%)
                    </span>
                  </li>
                ))}
              </ul>
            )}
          />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};
