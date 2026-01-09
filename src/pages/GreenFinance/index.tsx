import { useMemo } from "react";
import {
  TrendingUp,
  Wallet,
  ShieldCheck,
  Info,
  Banknote,
  Calculator,
  PieChart,
  BarChart4,
} from "lucide-react";
import { MOCK_SUPPLIERS } from "../Suppliers/mockdata";
import { useTranslation } from "react-i18next";

const GreenFinance = () => {
  const financeList = useMemo(() => {
    return Object.values(MOCK_SUPPLIERS)
      .map((s) => {
        const score = s.metrics.esg_score;
        const limit =
          score > 90 ? score * 15 : score > 70 ? score * 10 : score * 5;
        const rate =
          score > 90
            ? "3.15%"
            : score > 70
            ? "3.85%"
            : score > 50
            ? "4.50%"
            : "6.20%";
        return { ...s, limit: `¥${limit.toFixed(1)}M`, rate };
      })
      .sort((a, b) => b.metrics.esg_score - a.metrics.esg_score);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- 标题栏 --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
              {t("greenFiance.page_title")}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {t("greenFiance.page_subtitle")}
            </p>
          </div>
        </div>

        {/* --- 数据看板统计卡片 --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: t("greenFiance.stat_total_credit"),
              value: "¥842.5M",
              icon: <Wallet className="text-emerald-500" />,
              sub: "+12.5% vs last month",
            },
            {
              label: t("greenFiance.stat_avg_rate"),
              value: "-1.25%",
              icon: <TrendingUp className="text-indigo-500" />,
              sub: "Avg ESG Discount",
            },
            {
              label: t("greenFiance.stat_active_loan"),
              value: "124",
              icon: <BarChart4 className="text-amber-500" />,
              sub: "Certified Suppliers",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-[9px] font-bold text-slate-300 uppercase mt-0.5">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- 主体内容区 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* 左侧：信贷矩阵表格 */}
          <div className="lg:col-span-8 bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <PieChart size={16} className="text-indigo-600" />{" "}
                {t("greenFiance.distribution")}
              </h3>
              <span className="text-[10px] font-bold text-slate-400 italic">
                {t("greenFiance.verified")}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t("greenFiance.table_supplier")}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t("greenFiance.table_region")}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                      {t("greenFiance.table_score")}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                      {t("greenFiance.table_limit")}
                    </th>
                    {/* <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                      ACTION
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {financeList.slice(0, 8).map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-[10px]">
                            {item.id}
                          </div>
                          <div>
                            <div className="text-sm font-black text-slate-800">
                              {item.name}
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase">
                              {t(
                                `supplier.industries.${item.industry.toLowerCase()}`
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-left">
                        <div className="font-black text-slate-800 text-sm">
                          {t(
                            "supplier.countries." + item.country.toLowerCase()
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div
                          className={`inline-flex px-2 py-0.5 rounded-md text-xs font-black ${
                            item.metrics.esg_score > 80
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              : "bg-slate-50 text-slate-500 border border-slate-100"
                          }`}
                        >
                          {item.metrics.esg_score}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-black text-slate-800 tracking-tight">
                          {item.limit}
                        </div>
                        <div className="text-[9px] font-bold text-emerald-500">
                          {item.rate} APR
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 右侧：金融逻辑（已改为白底样式） */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Calculator size={18} className="text-emerald-500" />{" "}
                {t("greenFiance.intro_title")}
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100 mb-0"></div>
                {[
                  {
                    icon: <ShieldCheck size={14} />,
                    kind: "dataOwnership",
                  },
                  {
                    icon: <TrendingUp size={14} />,
                    kind: "iesgRating",
                  },
                  {
                    icon: <Banknote size={14} />,
                    kind: "creditMatching",
                  },
                ].map((step, i) => (
                  <div key={i} className="relative flex gap-4 pl-0">
                    <div className="z-10 w-6 h-6 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-emerald-500 shadow-sm">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-900">
                        {t(`greenFiance.features.${step.kind}.label`)}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {t(`greenFiance.features.${step.kind}.desc`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-4xl border border-slate-100 p-6 shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                {t("greenFiance.cooperation")}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-transparent hover:border-slate-200">
                  <span className="font-black italic text-slate-900 text-xs">
                    HSBC
                  </span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-transparent hover:border-slate-200">
                  <span className="font-black italic text-slate-900 text-xs text-center leading-none">
                    J.P. Morgan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部备注 */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
            <Info size={14} /> {t("greenFiance.lastUpdate")}: 2025-12-30 14:30
            GMT+8
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenFinance;
