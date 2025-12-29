import { useTranslation } from "react-i18next";

interface IndustryBarProps {
  /** 行业或部门名称，例如 "Manufacturing" */
  label: string;

  /** 具体的数值显示，建议为格式化后的字符串，例如 "1,234.56" */
  value: string | number;

  /** 进度条百分比，数值范围 0-100 */
  percent: number;

  /** * Tailwind 背景颜色类名。
   * 注意：由于 Tailwind 的 JIT 机制，必须传入完整的类名，例如 "bg-blue-500"
   * 而不能是仅仅传一个颜色值 "blue"。
   */
  color: string;
}
export default function IndustryBar({
  label,
  value,
  percent,
  color,
}: IndustryBarProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <span className="block text-xs font-black text-slate-400 uppercase mb-1">
            {t("dashboard.Sector")}
          </span>
          <span className="text-sm font-bold text-slate-800">{label}</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-black text-slate-900 tabular-nums">
            {value}
          </span>
          <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
            {t("dashboard.used_kwh")}
          </span>
        </div>
      </div>
      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
