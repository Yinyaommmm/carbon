import { useState } from "react";
import {
  ShieldCheck,
  Globe,
  UserPlus,
  Lock,
  EyeOff,
  Cloud,
  ExternalLink,
  CheckCircle2,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("info");
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            {t("settings.header_title")}
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            {t("settings.header_subtitle")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white p-2 rounded-2xl border border-slate-100 shadow-sm w-fit gap-2">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
              activeTab === "info"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t("settings.tabs.info")}
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
              activeTab === "privacy"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t("settings.tabs.privacy")}
          </button>
          <button
            onClick={() => setActiveTab("guide")}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
              activeTab === "guide"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t("settings.tabs.guide")}
          </button>
        </div>

        {/* Content Render */}
        {activeTab === "info" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Globe size={20} className="text-emerald-500" />{" "}
                {t("settings.info.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t("settings.info.label_name")}
                    </label>
                    <p className="text-sm font-bold text-slate-700">
                      {t("settings.info.val_name")}
                    </p>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t("settings.info.label_version")}
                    </label>
                    <p className="text-sm font-bold text-slate-700">
                      v3.8.2-Stable (Build 2024)
                    </p>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t("settings.info.label_org")}
                    </label>
                    <p className="text-sm font-bold text-slate-700">
                      EcoChain Digital Technology Group
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2 text-emerald-700">
                      <Cloud size={16} />
                      <span className="text-xs font-black">
                        {t("settings.info.label_status")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-emerald-600">
                        {t("settings.info.val_status")}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2 text-slate-500">
                      <Info size={16} />
                      <span className="text-xs font-black">
                        {t("settings.info.label_update")}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t("settings.info.val_update")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-500" />{" "}
                {t("settings.privacy.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Lock className="text-emerald-500 mb-3" size={24} />
                  <h4 className="text-sm font-black text-slate-800 mb-2">
                    {t("settings.privacy.card_1_title")}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {t("settings.privacy.card_1_desc")}
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <EyeOff className="text-emerald-500 mb-3" size={24} />
                  <h4 className="text-sm font-black text-slate-800 mb-2">
                    {t("settings.privacy.card_2_title")}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {t("settings.privacy.card_2_desc")}
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 mb-3" size={24} />
                  <h4 className="text-sm font-black text-slate-800 mb-2">
                    {t("settings.privacy.card_3_title")}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {t("settings.privacy.card_3_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "guide" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <UserPlus size={20} className="text-emerald-500" />{" "}
                {t("settings.guide.title")}
              </h3>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-100"></div>
                  <div className="space-y-8 relative">
                    {[
                      {
                        step: "01",
                        title: t("settings.guide.step_1_t"),
                        desc: t("settings.guide.step_1_d"),
                      },
                      {
                        step: "02",
                        title: t("settings.guide.step_2_t"),
                        desc: t("settings.guide.step_2_d"),
                      },
                      {
                        step: "03",
                        title: t("settings.guide.step_3_t"),
                        desc: t("settings.guide.step_3_d"),
                      },
                      {
                        step: "04",
                        title: t("settings.guide.step_4_t"),
                        desc: t("settings.guide.step_4_d"),
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-6 ml-0">
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-black z-10 shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-slate-800">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 font-medium mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-emerald-600 rounded-4xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-100">
                  <div>
                    <h4 className="text-lg font-black">
                      {t("settings.guide.cta_title")}
                    </h4>
                    <p className="text-xs font-bold text-emerald-100 mt-1">
                      {t("settings.guide.cta_subtitle")}
                    </p>
                  </div>
                  <button className="px-8 py-3 bg-white text-emerald-600 rounded-2xl font-black text-sm hover:scale-105 transition-transform flex items-center gap-2">
                    {t("settings.guide.cta_btn")} <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
