import { useTranslation } from "react-i18next";
import KPICard from "./kpicard";
import {
  AlertTriangle,
  BarChart3,
  TrendingDown,
  Users,
  Zap,
  Activity,
} from "lucide-react";
interface KPICardListProps {
  carbon: string;
  energy: string;
  pcf: number;
  saving: number;
  risk: string;
  riskColor: string;
  suppliers: number;
}
export default function KPICardList({
  carbon,
  energy,
  pcf,
  saving,
  risk,
  riskColor,
  suppliers,
}: KPICardListProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <KPICard
        title={t("kpi_carbon")}
        value={carbon}
        unit={t("unit_carbon")}
        trend="+2.4%"
        icon={<Activity size={20} />}
        color="emerald"
      />
      <KPICard
        title={t("kpi_energy")}
        value={energy}
        unit={t("unit_energy")}
        trend="-1.2%"
        icon={<Zap size={20} />}
        color="blue"
      />
      <KPICard
        title={t("kpi_pcf")}
        value={pcf}
        unit="kgCO2"
        trend="-5.0%"
        icon={<BarChart3 size={20} />}
        color="indigo"
      />
      <KPICard
        title={t("kpi_saving")}
        value={saving}
        unit="%"
        trend={t("AI_Prediction")}
        icon={<TrendingDown size={20} />}
        color="emerald"
        highlight
      />
      <KPICard
        title={t("kpi_risk")}
        value={risk}
        unit=""
        icon={<AlertTriangle size={20} />}
        color={riskColor as "emerald" | "orange"}
        isStatus
      />
      <KPICard
        title={t("kpi_suppliers")}
        value={suppliers}
        unit=""
        icon={<Users size={20} />}
        color="slate"
      />
    </div>
  );
}
