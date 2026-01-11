import { useState, useMemo } from "react";
import {
  Target,
  TrendingUp,
  BarChart3,
  ChevronRight,
  Clock,
  Cpu,
  Activity,
  Zap,
  Eye,
  Layers,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { MOCK_SUPPLIERS } from "../Suppliers/mockdata";
import { useTranslation } from "react-i18next";
const AVERAGE_DATA = {
  carbon: 75,
  energy: 74,
  transparency: 80,
  compliance: 82,
};

export default function IncentiveEngine() {
  const MOCK_SUPPLIERS_ARR = Object.values(MOCK_SUPPLIERS);

  const [selectedId, setSelectedId] = useState<string>(
    MOCK_SUPPLIERS_ARR[0].id
  );

  const currentSupplier = useMemo(
    () => MOCK_SUPPLIERS[selectedId],
    [selectedId]
  );

  const radarData = [
    {
      subject: "碳排表现",
      A: currentSupplier.incentive.carbon,
      B: AVERAGE_DATA.carbon,
      fullMark: 100,
    },
    {
      subject: "能效管理",
      A: currentSupplier.incentive.energy,
      B: AVERAGE_DATA.energy,
      fullMark: 100,
    },
    {
      subject: "透明度",
      A: currentSupplier.incentive.transparency,
      B: AVERAGE_DATA.transparency,
      fullMark: 100,
    },
    {
      subject: "合规度",
      A: currentSupplier.incentive.compliance,
      B: AVERAGE_DATA.compliance,
      fullMark: 100,
    },
  ];

  const weightPieData = MOCK_SUPPLIERS_ARR.map((s) => ({
    name: s.name,
    value: parseInt(s.incentive.weight),
  }));

  const COLORS = ["#059669", "#10b981", "#34d399", "#a7f3d0"];
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            {t("incentive.header.title")}
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            {t("incentive.header.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ESG Radar Analysis */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
                  <Target size={20} className="text-emerald-500" />
                  {t("incentive.analysis.radar_title")}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg">
                    {t("incentive.analysis.selected")}：{currentSupplier.name}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-emerald-600 leading-none">
                  {currentSupplier.metrics.esg_score}
                </div>
                <div className="text-[10px] font-black text-slate-300 uppercase mt-1">
                  {t("incentive.analysis.score_label")}
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={radarData}
                >
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 11, fontWeight: 800, fill: "#64748b" }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name={t("incentive.analysis.industry_avg")}
                    dataKey="B"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    fill="#fbbf24"
                    fillOpacity={0.1}
                  />
                  <Radar
                    name={currentSupplier.name}
                    dataKey="A"
                    stroke="#10b981"
                    strokeWidth={3}
                    fill="#10b981"
                    fillOpacity={0.35}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-8 mt-4 border-t border-slate-50 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-[11px] font-black text-slate-600 uppercase">
                  {t("incentive.analysis.current_corp")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <span className="text-[11px] font-black text-slate-600 uppercase">
                  {t("incentive.analysis.industry_avg")}
                </span>
              </div>
            </div>
          </div>

          {/* Allocation & Incentive Rules */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
                <BarChart3 size={20} className="text-emerald-500" />
                {t("incentive.allocation.title")}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg">
                  {t("incentive.allocation.stats_prefix")}：
                  {currentSupplier.name}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              <div className="flex flex-col justify-center">
                <div className="h-[200px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={weightPieData}
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {weightPieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-2xl font-black text-slate-800">
                      {currentSupplier.incentive.weight}
                    </span>
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none mt-1">
                      {t("incentive.allocation.share_label")}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-5 bg-slate-50/80 rounded-3xl border border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-1.5 mb-3 tracking-widest">
                    <Layers size={12} className="text-emerald-500" />
                    {t("incentive.allocation.legend_title")}
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#059669]"></div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {t("incentive.tiers.s_class")}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-emerald-600">
                        {t("incentive.tiers.s_desc")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#10b981]"></div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {t("incentive.tiers.a_class")}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-emerald-500">
                        {t("incentive.tiers.a_desc")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#34d399]"></div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {t("incentive.tiers.b_class")}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400">
                        {t("incentive.tiers.b_desc")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#a7f3d0]"></div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {t("incentive.tiers.c_class")}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-amber-600">
                        {t("incentive.tiers.c_desc")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-center">
                {[
                  {
                    icon: <TrendingUp size={18} />,
                    title: t("incentive.rules.quota_title"),
                    desc: t("incentive.rules.quota_desc"),
                  },
                  {
                    icon: <Clock size={18} />,
                    title: t("incentive.rules.payment_title"),
                    desc: t("incentive.rules.payment_desc"),
                  },
                  {
                    icon: <Cpu size={18} />,
                    title: t("incentive.rules.subsidy_title"),
                    desc: t("incentive.rules.subsidy_desc"),
                  },
                ].map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100 transition-all hover:shadow-md group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                        {rule.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-emerald-900 group-hover:text-emerald-700 transition-colors">
                          {rule.title}
                        </h4>
                        <p className="text-[11px] font-bold text-emerald-600/70 mt-1 leading-relaxed">
                          {rule.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Table */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 bg-slate-50/30">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">
              {t("incentive.table.title")}
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              {t("incentive.table.helper")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("incentive.table.col_name")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("incentive.table.col_score")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("incentive.table.col_weight")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("incentive.table.col_status")}
                  </th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_SUPPLIERS_ARR.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => setSelectedId(s.id)}
                    className={`group cursor-pointer transition-all ${
                      selectedId === s.id
                        ? "bg-emerald-50/50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${
                            selectedId === s.id
                              ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {s.id}
                        </div>
                        <span
                          className={`text-sm font-black ${
                            selectedId === s.id
                              ? "text-emerald-700"
                              : "text-slate-700"
                          }`}
                        >
                          {s.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: `${s.metrics.esg_score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-black text-slate-700">
                          {s.metrics.esg_score}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`px-3 py-1 border rounded-lg text-xs font-black shadow-sm ${
                          selectedId === s.id
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "bg-white border-slate-200 text-slate-600"
                        }`}
                      >
                        {s.incentive.weight}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`text-xs font-bold ${
                          selectedId === s.id
                            ? "text-emerald-600"
                            : "text-slate-400"
                        }`}
                      >
                        {/* 假设 remark 字段存储的是 'leader', 'stable' 等 key */}
                        {t(`incentive.remarks.${s.incentive.remark}`)}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <ChevronRight
                        size={18}
                        className={`transition-transform ${
                          selectedId === s.id
                            ? "text-emerald-500 translate-x-1"
                            : "text-slate-200"
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-4xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {t("incentive.metrics.avg_energy")}
              </div>
              <div className="text-xl font-black text-slate-800">
                74.2 kWh/U
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-4xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Eye size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {t("incentive.metrics.data_transparency")}
              </div>
              <div className="text-xl font-black text-slate-800">
                0.82 (High)
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-4xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Activity size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {t("incentive.metrics.resilience")}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-slate-800">94.8%</span>
                <span className="text-[10px] font-black text-emerald-500">
                  +1.2% ↑
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
