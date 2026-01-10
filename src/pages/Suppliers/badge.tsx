import React from "react";
import { ShieldCheck, ShieldQuestion, ShieldAlert } from "lucide-react";

// 1. 定义允许的合规等级类型
export type ComplianceLevel = "High" | "Medium" | "Low";

// 2. 定义 Props 接口
interface ComplianceBadgeProps {
  level: ComplianceLevel;
  /** 国际化翻译函数 */
  t: (key: string) => string;
  textSize?: number;
}

export const ComplianceBadge: React.FC<ComplianceBadgeProps> = ({
  level,
  t,
  textSize = 11,
}) => {
  // 3. 使用 Record 约束映射对象，确保覆盖所有枚举值
  const styles: Record<ComplianceLevel, string> = {
    High: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Medium: "bg-orange-50 text-orange-700 border-orange-100",
    Low: "bg-rose-50 text-rose-700 border-rose-100",
  };

  const icons: Record<ComplianceLevel, React.ReactNode> = {
    High: <ShieldCheck size={14} />,
    Medium: <ShieldQuestion size={14} />,
    Low: <ShieldAlert size={14} />,
  };

  return (
    <span
      className={`px-3 py-1 rounded-full border text-[${textSize}px] font-bold flex items-center gap-1.5 w-fit ${styles[level]}`}
    >
      {icons[level]}
      {t(`supplier.compliance.${level.toLowerCase()}`)}
    </span>
  );
};
