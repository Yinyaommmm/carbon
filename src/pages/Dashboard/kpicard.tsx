import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

// 定义可选的颜色字面量，与你组件中的 colors 对象对应
type KPIColor = "emerald" | "blue" | "indigo" | "orange" | "slate";

interface KPICardProps {
  /** 卡片标题，例如 "总收入" */
  title: string;

  /** 显示的数值，支持数字或格式化后的字符串 */
  value: string | number;

  /** 数值单位，例如 "CNY", "%", "人" */
  unit?: string;

  /** 趋势字符串，例如 "+12.5%" 或 "-3.2%"，组件会根据是否以 "-" 开头自动旋转图标 */
  trend?: string;

  /** Lucide 图标组件或任意 React 元素 */
  icon: ReactNode;

  /** 预设的主题颜色 */
  color: KPIColor;

  /** 是否开启高亮边框效果 */
  highlight?: boolean;

  /** 是否为状态模式。如果是 true，则隐藏趋势标签 */
  isStatus?: boolean;
}
export default function KPICard({
  title,
  value,
  unit,
  trend,
  icon,
  color,
  highlight,
  isStatus,
}: KPICardProps) {
  const colors = {
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
    slate: "text-slate-600 bg-slate-50 border-slate-100",
  };

  return (
    <div
      className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
        highlight ? "ring-2 ring-emerald-500 ring-offset-2" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-xl ${colors[color] || colors.slate} border`}
        >
          {icon}
        </div>
        {!isStatus && trend && (
          <div className="flex items-center text-[10px] font-black px-1.5 py-0.5 rounded text-emerald-600 bg-emerald-50">
            <ArrowUpRight
              size={10}
              className={trend.startsWith("-") ? "rotate-90" : ""}
            />
            {trend}
          </div>
        )}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          {title}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black text-slate-900 leading-none tabular-nums">
            {value}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
