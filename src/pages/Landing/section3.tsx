import {
  BrainCircuit,
  ChevronRight,
  ClipboardCheck,
  Coins,
  Link2,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function LandingSection3() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white relative overflow-y-hidden">
      {/* 背景装饰：极浅的网格和柔和的光晕 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {t("sec3_title")}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t("sec3_subtitle")}
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[600px] gap-12 lg:gap-0">
          {/* 左侧模块：Data-Link & Carbon-Insight */}
          <div className="flex flex-col gap-16 lg:w-1/3 lg:items-end">
            <ModuleCard
              side="right"
              icon={<Link2 size={24} />}
              title={t("m1_title")}
              subtitle={t("m1_subtitle")}
              detail={t("m1_detail")}
            />
            <ModuleCard
              side="right"
              icon={<BrainCircuit size={24} />}
              title={t("m2_title")}
              subtitle={t("m2_subtitle")}
              detail={t("m2_detail")}
            />
          </div>

          {/* 中心圆环：白色主题版 */}
          <div className="relative lg:w-1/3 flex items-center justify-center py-12 -z-1">
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center ">
              {/* 多层动态涟漪 */}
              <div className="absolute inset-0 border-[3px] border-emerald-100 rounded-full animate-ping [animation-duration:3s]"></div>
              <div className="absolute inset-[-30px] border border-emerald-50/50 rounded-full animate-ping [animation-duration:4s]"></div>
              <div className="absolute inset-[-60px] border border-emerald-50/30 rounded-full animate-ping [animation-duration:5s]"></div>

              {/* 核心枢纽节点 */}
              <div className="relative w-full h-full bg-white rounded-full border-[6px] border-white shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center p-8 text-center z-20">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <Zap className="text-white" size={32} fill="white" />
                </div>
                <div className="text-emerald-700 font-black text-2xl tracking-tighter">
                  ABC ESG-LinK
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">
                  Core Engine
                </div>

                {/* 旋转边框效果 */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-200/50 animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>
          </div>

          {/* 右侧模块：Incentive-Engine & Compliance-Hub */}
          <div className="flex flex-col gap-16 lg:w-1/3 lg:items-start">
            <ModuleCard
              side="left"
              icon={<Coins size={24} />}
              title={t("m3_title")}
              subtitle={t("m3_subtitle")}
              detail={t("m3_detail")}
            />
            <ModuleCard
              side="left"
              icon={<ClipboardCheck size={24} />}
              title={t("m4_title")}
              subtitle={t("m4_subtitle")}
              detail={t("m4_detail")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ModuleCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  detail: string;
  side: "left" | "right";
}
// 模块卡片组件 (白色背景专用)
const ModuleCard = ({
  icon,
  title,
  subtitle,
  detail,
  side,
}: ModuleCardProps) => {
  const isRight = side === "right";
  return (
    <div
      className={`group relative w-full max-w-sm p-6 rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 flex flex-col ${
        isRight ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      }`}
    >
      <div
        className={`flex items-center gap-4 mb-4 ${
          isRight ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
            {title}
          </h4>
          <span className="text-[10px] text-emerald-600/60 font-black uppercase tracking-widest">
            {subtitle}
          </span>
        </div>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
        {detail}
      </p>

      <div
        className={`flex items-center gap-1 text-[10px] font-black text-slate-300 group-hover:text-emerald-500 transition-all cursor-pointer ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        VIEW DETAILS{" "}
        <ChevronRight
          size={12}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>

      {/* 装饰性装饰线 (大屏显示) */}
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-slate-100 group-hover:bg-emerald-200 transition-all duration-700
        ${isRight ? "-right-8" : "-left-8"}`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-emerald-200 bg-white transition-all duration-700 group-hover:bg-emerald-500
          ${isRight ? "right-0" : "left-0"}`}
        ></div>
      </div>
    </div>
  );
};
