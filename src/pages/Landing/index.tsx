import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };
  const { t } = useTranslation();

  return (
    <main className="relative bg-white w-full">
      {/* 核心 Hero Section */}
      <section className="min-h-[calc(100vh-64px)] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* 左侧文字内容区 */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:pl-24 lg:pr-12 py-12 bg-white relative">
          {/* 背景装饰：网格图案 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
          </div>

          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 mb-6 tracking-tight">
              <span className="text-emerald-600">{t("hero_brand")}</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                {t("hero_title")}
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 border-l-4 border-emerald-500 pl-4">
              {t("hero_description")}
              <span className="font-semibold text-slate-800 italic">
                {" "}
                lloT + Blockchain + AI{" "}
              </span>
              {t("hero_tech_suffix")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleNavigate}
                className="group flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-200 hover:translate-y-[-2px] active:scale-95"
              >
                {t("btn_start")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 text-slate-700 rounded-xl font-bold text-lg transition-all">
                {t("btn_whitepaper")}
              </button>
            </div>

            {/* 特性展示 */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold italic">
                  <Zap size={18} />
                  <span className="text-sm tracking-tight">Real-time</span>
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">
                  {t("feat_realtime")}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold italic">
                  <BarChart3 size={18} />
                  <span className="text-sm tracking-tight">Verified</span>
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">
                  {t("feat_verified")}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold italic">
                  <ShieldCheck size={18} />
                  <span className="text-sm tracking-tight">Global</span>
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">
                  {t("feat_global")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧图片展示区 */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:pr-24 lg:pl-0 bg-white relative">
          {/* 使用 aspect-video 确保比例正确，并在 flex items-stretch 下自动对齐高度 */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 group bg-slate-50">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/5 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/decarbon-landing.webp"
              alt="Dashboard Preview"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* 悬浮数据统计卡片 */}
            <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl border border-white/40 hidden md:flex gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {t("stat_carbon")}
                </span>
                <span className="text-emerald-600 font-mono font-bold text-xl tracking-tight">
                  12,482.5 t
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {t("stat_eff")}
                </span>
                <span className="text-blue-600 font-mono font-bold text-xl tracking-tight">
                  +22.4%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50/40 px-8 border-t border-slate-50"></section>
    </main>
  );
};

export default LandingPage;
