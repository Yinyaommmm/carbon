import {
  Factory,
  PieChart as PieChartIcon,
  Filter,
  ChevronDown,
  Check,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import IndustryBar from "./industrybar";
import { ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import KPICardList from "./kpicardlist";
import { getLabels } from "./util";
import CarbonAreaChart from "./areachart";
const Dashboard = () => {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState("Brand A");
  const [selectedIndustry, setSelectedIndustry] = useState("Textile");
  const [timeRange, setTimeRange] = useState("30d");
  // 下拉菜单显示状态
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const stats = useMemo(() => {
    const seed =
      selectedBrand.length +
      selectedIndustry.length +
      (timeRange === "12m" ? 12 : 1);
    const getVal = (idx: number, base: number, amp: number) => {
      const v =
        base +
        Math.sin(idx * 0.8 + seed) * amp +
        Math.cos(idx * 0.5) * (amp / 2);
      return Math.round(Math.max(10, Math.min(100, v)));
    };

    const random = (min: number, max: number) =>
      Math.floor(Math.abs(Math.sin(seed) * (max - min)) + min);

    // 根据时间范围决定采样点数
    // 30天模式：10个点（每3天一个点）
    // 12个月模式：12个点（每月一个点）
    const pointCount = timeRange === "30d" ? 10 : 12;
    const trendPoints = Array.from({ length: pointCount }, (_, i) =>
      getVal(i, 50, 25)
    );

    // 横轴标签
    const labels = getLabels(timeRange);
    const ns1 = 15 + (seed % 5);
    const ns2 = 25 + (seed % 10);
    const ns3 = 60 - (seed % 15);
    const sum = ns1 + ns2 + ns3;
    const normalize_s1 = Math.round((ns1 / sum) * 100);
    const normalize_s2 = Math.round((ns2 / sum) * 100);
    const normalize_s3 = 100 - normalize_s1 - normalize_s2;
    return {
      carbon: random(10000, 15000).toLocaleString(),
      energy: (random(150, 200) / 10).toFixed(1) + "M",
      pcf: (random(20, 30) / 10).toFixed(1),
      saving: (random(50, 120) / 10).toFixed(1),
      risk: seed % 3 === 0 ? t("dashboard.risk_low") : t("dashboard.risk_med"),
      riskColor: seed % 3 === 0 ? "emerald" : "orange",
      suppliers: random(80, 150),
      trendData: trendPoints,
      trendLabels: labels,
      scopeData: {
        s1: normalize_s1,
        s2: normalize_s2,
        s3: normalize_s3,
      },
    };
  }, [selectedBrand.length, selectedIndustry.length, timeRange, t]);
  const chartData = stats.trendData.map((value, i) => ({
    name: stats.trendLabels[i],
    value: value,
  }));

  const scopeChartData = [
    {
      name: "Scope 3",
      value: stats.scopeData.s3,
      color: "#10b981", // emerald
    },
    {
      name: "Scope 2",
      value: stats.scopeData.s2,
      color: "#3b82f6", // blue
    },
    {
      name: "Scope 1",
      value: stats.scopeData.s1,
      color: "#6366f1", // indigo
    },
  ];
  return (
    <div
      className="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans text-slate-900"
      onClick={() => {
        setShowBrandDropdown(false);
        setShowIndustryDropdown(false);
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
              {t("dashboard.dash_title")}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {t("dashboard.dash_subtitle")}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            {selectedBrand} ·{" "}
            {selectedIndustry === "Textile"
              ? t("dashboard.ind_textile")
              : selectedIndustry === "Auto"
              ? t("dashboard.ind_auto")
              : t("dashboard.ind_electronics")}
          </div>
        </div>

        {/* 1. 顶部过滤条 */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-wrap items-center gap-4 relative z-50">
          <Filter size={18} className="text-slate-400 ml-2" />

          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBrandDropdown(!showBrandDropdown);
                setShowIndustryDropdown(false);
              }}
              className="flex items-center justify-between w-40 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-200 transition-all"
            >
              {selectedBrand}
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform ${
                  showBrandDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showBrandDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden shadow-emerald-500/5">
                {["Brand A", "Brand B"].map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setShowBrandDropdown(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 flex justify-between items-center"
                  >
                    {brand}
                    {selectedBrand === brand && (
                      <Check size={14} className="text-emerald-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowIndustryDropdown(!showIndustryDropdown);
                setShowBrandDropdown(false);
              }}
              className="flex items-center justify-between w-44 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-200 transition-all"
            >
              {selectedIndustry === "Textile"
                ? t("dashboard.ind_textile")
                : selectedIndustry === "Auto"
                ? t("dashboard.ind_auto")
                : t("dashboard.ind_electronics")}
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform ${
                  showIndustryDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showIndustryDropdown && (
              <div className="absolute top-full mt-2 w-44 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden">
                {[
                  { id: "Textile", label: t("dashboard.ind_textile") },
                  { id: "Auto", label: t("dashboard.ind_auto") },
                  { id: "Electronics", label: t("dashboard.ind_electronics") },
                ].map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => {
                      setSelectedIndustry(ind.id);
                      setShowIndustryDropdown(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 flex justify-between items-center"
                  >
                    {ind.label}
                    {selectedIndustry === ind.id && (
                      <Check size={14} className="text-emerald-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-slate-200 mx-2 hidden md:block"></div>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setTimeRange("30d")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                timeRange === "30d"
                  ? "bg-white shadow-sm text-slate-800"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t("dashboard.time_30")}
            </button>
            <button
              onClick={() => setTimeRange("12m")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                timeRange === "12m"
                  ? "bg-white shadow-sm text-slate-800"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t("dashboard.time_12")}
            </button>
          </div>
        </div>

        {/* 2. KPI 卡片 */}
        <KPICardList
          carbon={stats.carbon}
          energy={stats.energy}
          pcf={Number(stats.pcf)}
          saving={Number(stats.saving)}
          risk={stats.risk}
          riskColor={stats.riskColor}
          suppliers={Number(stats.suppliers)}
        ></KPICardList>

        {/* 3. 图表区 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CarbonAreaChart timeRange={timeRange} chartData={chartData} />

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4 text-lg">
              <PieChartIcon size={20} className="text-blue-500" />
              {t("dashboard.chart_scope")}
            </h3>

            <div className="flex-1 min-h-[300px] flex items-center justify-center">
              <ResponsiveContainer width={300} height={300}>
                <PieChart width={300} height={300}>
                  <Pie
                    data={scopeChartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={115}
                    paddingAngle={3}
                    stroke="none"
                    isAnimationActive
                  >
                    {scopeChartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                <div className="text-2xl font-black text-slate-800">100%</div>
                <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                  {t("dashboard.Global")}
                </div>
              </div>
            </div>

            {/* Scope 数值说明 */}
            <div className="mt-2 grid grid-cols-3 gap-4 text-center">
              {scopeChartData.map((item) => (
                <div key={item.name}>
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    {item.name}
                  </div>
                  <div
                    className="text-sm font-black tabular-nums"
                    style={{ color: item.color }}
                  >
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 行业对比 */}
          <div className="lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-8 text-lg">
              <Factory size={20} className="text-indigo-500" />
              {t("dashboard.chart_compare")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <IndustryBar
                label={t("dashboard.ind_textile")}
                value={selectedIndustry === "Textile" ? "8.2M" : "6.1M"}
                percent={selectedIndustry === "Textile" ? 85 : 55}
                color="bg-emerald-500"
              />
              <IndustryBar
                label={t("dashboard.ind_auto")}
                value={selectedIndustry === "Auto" ? "9.4M" : "5.2M"}
                percent={selectedIndustry === "Auto" ? 95 : 45}
                color="bg-blue-500"
              />
              <IndustryBar
                label={t("dashboard.ind_electronics")}
                value={selectedIndustry === "Electronics" ? "7.8M" : "4.6M"}
                percent={selectedIndustry === "Electronics" ? 80 : 40}
                color="bg-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
