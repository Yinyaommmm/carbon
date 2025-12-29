import { ArrowRight, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LandingSection4() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* 上方：标题与图片分栏区域 */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex-1 text-left flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              {t("landing.sec4.sec4_main_title")}
            </h2>
            <div className="inline-block">
              <p className="text-slate-500 text-base font-medium">
                {t("landing.sec4.sec4_main_subtitle")}
              </p>
              <div className="h-1 bg-emerald-500 mt-2 rounded-full w-full"></div>
            </div>
          </div>

          {/* 右侧配图：高度与左侧文字区域对齐 */}
          <div className="flex-1 hidden md:block w-full h-[120px]">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
              <div className="absolute inset-0 bg-emerald-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                // src="value.webp"
                alt="Supply Chain"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* 市场范围卡片 */}
          <div className="flex-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6 items-start transition-all hover:shadow-md hover:border-emerald-100">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                {t("landing.sec4.sec4_market_title")}
              </h3>
              <p className="text-slate-800 font-bold text-lg mb-4 leading-snug">
                {t("landing.sec4.sec4_market_desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg uppercase tracking-wider">
                  {t("landing.sec4.sec4_market_stat")}
                </div>
                <div className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase tracking-wider">
                  {t("landing.sec4.sec4_market_tag2")}
                </div>
              </div>
            </div>
          </div>

          {/* 价值主张卡片 */}
          <div className="flex-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6 items-start transition-all hover:shadow-md hover:border-blue-100">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
              <TrendingUp size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                {t("landing.sec4.sec4_value_title")}
              </h3>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-slate-400 font-medium line-through decoration-slate-300 text-sm">
                    {t("landing.sec4.sec4_value_burden")}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-emerald-500 hidden sm:block"
                  />
                  <p className="text-slate-900 font-extrabold text-lg leading-tight">
                    {t("landing.sec4.sec4_value_gain")}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg uppercase tracking-wider">
                  {t("landing.sec4.sec4_value_tag1")}
                </div>
                <div className="inline-flex items-center px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-lg uppercase tracking-wider border border-indigo-100">
                  {t("landing.sec4.sec4_value_tag2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
