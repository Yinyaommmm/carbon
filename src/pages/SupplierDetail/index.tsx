import {
  ArrowLeft,
  Factory,
  Globe,
  Cpu,
  Scale,
  Sparkles,
  TrendingDown,
  Leaf,
  BarChart3,
  Zap,
  type LucideIcon,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { MOCK_SUPPLIERS } from "../Suppliers/mockdata";
import { EnergyLineChart } from "./EnergyLineChart";
import { EnergyPieChart } from "./EnergyPieChart";
import { useTranslation } from "react-i18next";
import { ComplianceBadge, type ComplianceLevel } from "../Suppliers/badge";
import { toast } from "sonner";
import Compliance from "./Compliance";
interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  unit?: string;
  color: string;
}
const MetricCard = ({
  icon: Icon,
  label,
  value,
  unit,
  color,
}: MetricCardProps) => (
  <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div
      className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 ${color}`}
    >
      <Icon size={20} className="text-white" />
    </div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
      {label}
    </p>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-black text-slate-800">{value}</span>
      {unit && <span className="text-xs font-bold text-slate-400">{unit}</span>}
    </div>
  </div>
);
const SupplierDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 这里可以改为从 Context 或 State 获取当前语言
  const { t } = useTranslation();

  const sid = id ?? "S001";
  const data = MOCK_SUPPLIERS[sid] || MOCK_SUPPLIERS["S001"];
  const styles: Record<ComplianceLevel, string> = {
    High: " text-emerald-700 border-emerald-100",
    Medium: " text-orange-700 border-orange-100",
    Low: " text-rose-700 border-rose-100",
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* 返回与标题 */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate("/suppliers")}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={16} /> {t("supplierDetail.backToList")}
          </button>
          {/* <div className="flex items-center justify-between">
            <ComplianceBadge level={data.compliance} t={t} />
            <ChevronDown
              size={14}
              className="text-slate-200 -rotate-90 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
            />
          </div> */}
        </div>

        {/* 第一行：基本信息卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-24 h-24 bg-slate-50 rounded-4xl flex items-center justify-center shrink-0 border border-slate-100">
              <Factory size={40} className="text-emerald-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                  {data.name}
                </h1>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black rounded-lg uppercase">
                  #{data.id}
                </span>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-300" />{" "}
                  {t("supplier.countries." + data.country.toLowerCase())}
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-slate-300" />{" "}
                  {t("ustries." + data.industry.toLowerCase())}
                </div>
                <div className="flex items-center gap-2">
                  <Scale size={16} className="text-slate-300" /> {data.scale}
                </div>
              </div>
            </div>
            <div className="w-full md:w-px h-px md:h-16 bg-slate-100"></div>
            <div className="text-center md:px-4">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {t("supplierDetail.esgScore")}
              </div>
              <div
                className={`text-5xl font-black ${
                  styles[data.compliance]
                } tracking-tighter`}
              >
                {data.metrics.esg_score}
              </div>
            </div>
          </div>

          <div
            className={`bg-emerald-600 p-8 rounded-[40px] shadow-xl shadow-emerald-600/20 flex flex-col justify-between relative overflow-hidden group`}
          >
            <Sparkles className="absolute -top-5 -right-5 text-white/10 w-40 h-40 transition-transform group-hover:scale-110" />
            <div className="relative z-10 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="text-white" size={18} />
                </div>
                <h3 className="text-white font-black uppercase text-xs tracking-widest">
                  {t("supplierDetail.aiOverview")}
                </h3>
              </div>
              <p className="text-emerald-50 text-sm font-medium leading-relaxed">
                {t("supplierDetail.aiPotentialPrefix")}{" "}
                <span className="text-white font-black underline decoration-emerald-400 underline-offset-4">
                  {data.ai_suggestions.length}{" "}
                  {t("supplierDetail.aiPotentialItems")}
                </span>{" "}
                {t("supplierDetail.aiPotentialSuffix")}{" "}
                <span className="text-white font-black">7.4%</span>。
              </p>
            </div>
            <button
              onClick={() =>
                toast.warning(t("supplierDetail.featureNotImplemented"))
              }
              className="relative z-10 w-full py-3 bg-white text-emerald-700 text-xs font-black rounded-2xl hover:bg-emerald-50 transition-colors"
            >
              {t("supplierDetail.downloadReport")}
            </button>
          </div>
        </div>

        {/* 第二行：核心指标矩阵 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <MetricCard
            icon={Leaf}
            label={t("supplierDetail.metrics.scope1")}
            value={data.metrics.scope1}
            unit="t"
            color="bg-emerald-500"
          />
          <MetricCard
            icon={Leaf}
            label={t("supplierDetail.metrics.scope2")}
            value={data.metrics.scope2}
            unit="t"
            color="bg-emerald-400"
          />
          <MetricCard
            icon={Leaf}
            label={t("supplierDetail.metrics.scope3")}
            value={data.metrics.scope3}
            unit="t"
            color="bg-emerald-300"
          />
          <MetricCard
            icon={BarChart3}
            label={t("supplierDetail.metrics.pcf")}
            value={data.metrics.pcf.split(" ")[0]}
            unit="kgCO2e"
            color="bg-blue-500"
          />
          <MetricCard
            icon={Zap}
            label={t("supplierDetail.metrics.efficiency")}
            value={data.metrics.energy_efficiency.split(" ")[0]}
            unit="kWh/unit"
            color="bg-amber-500"
          />
          <MetricCard
            icon={TrendingDown}
            label={t("supplierDetail.metrics.intensity")}
            value="-4.2"
            unit="%"
            color="bg-rose-500"
          />
        </div>

        {/* 第三行：图表与详细列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <BarChart3 size={16} className="text-emerald-500" />{" "}
                  {t("supplierDetail.energyTrend")}
                </h3>
                <p className="text-[11px] text-slate-400 font-bold italic">
                  {t("supplierDetail.energyTrendSub")}
                </p>
              </div>
              <EnergyLineChart data={data.energy_trend} />
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between items-center">
              <div className="w-full">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Zap size={16} className="text-amber-500" />{" "}
                  {t("supplierDetail.processDist")}
                </h3>
                <p className="text-[11px] text-slate-400 font-bold italic">
                  {t("supplierDetail.processDistSub")}
                </p>
              </div>
              <EnergyPieChart data={data.process_distribution} />
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-500" />{" "}
              {t("supplierDetail.aiDiagnosis")}
            </h3>
            <div className="space-y-6">
              {data.ai_suggestions.map((suggestion, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs font-black text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                    0{idx + 1}
                  </div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-[10px] text-slate-400 font-bold leading-normal">
                {t("supplierDetail.aiFootnote")}
              </p>
            </div>
          </div>
        </div>

        {/* 欧盟合规准入监测 板块 */}
        <Compliance data={data} />
        {/* 底部备注 */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
            {t("supplierDetail.lastUpdate")}: 2025-12-30 14:30 GMT+8
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetail;
