import {
  FileCheck,
  ShieldAlert,
  ClipboardCheck,
  AlertTriangle,
  ArrowUpRight,
  ChevronDown,
  QrCode,
} from "lucide-react";
import type { SupplierDetail } from "../Suppliers/mockdata";
import { ComplianceBadge } from "../Suppliers/badge";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { COMPLIANCE_GAP_POOL } from "./complianceMockData";

interface ComplianceProps {
  data: SupplierDetail;
}

export default function Compliance({ data }: ComplianceProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith("zh") ? "zh" : "en";

  // 2. 将副作用移至 useEffect
  const id = Number(data.id.slice(-2));
  const choosedIds = [id, id + 1, id + 2].map(
    (i) => i % COMPLIANCE_GAP_POOL.length
  );
  const shuffled = COMPLIANCE_GAP_POOL.filter((gap) =>
    choosedIds.includes(COMPLIANCE_GAP_POOL.indexOf(gap))
  );

  const handleReportGen = (type: string) => {
    toast.success(`【FAKE】Generated ${type} report, downloading...`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 pb-4 border-b border-slate-50 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <FileCheck size={18} className="text-blue-600" />
              {t("supplierDetail.compliancePart.title")}
            </h3>
            <p className="text-[12px] font-bold text-slate-400 uppercase mt-1">
              {/* 这里保留了特定的法规缩写，通常不需要翻译，或可放入 i18n */}
              {t("supplierDetail.compliancePart.subtitle")}
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <ComplianceBadge level={data.compliance} t={t} textSize={12} />
            <ChevronDown
              size={14}
              className="text-slate-200 -rotate-90 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
            />
          </div>
        </div>

        <div className="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 适用法规清单 */}
          <div className="space-y-6">
            <p className="text-[14px] font-black text-slate-400  ">
              {t("supplierDetail.compliancePart.monitoring")}
            </p>
            <div className="space-y-3">
              {[
                {
                  id: "DPP",
                  desc: t("supplierDetail.compliancePart.regulations.espr"),
                  active: data.regulations.dpp,
                },
                {
                  id: "CSRD",
                  desc: t("supplierDetail.compliancePart.regulations.csrd"),
                  active: data.regulations.csrd,
                },
                {
                  id: "CSDDD",
                  desc: t("supplierDetail.compliancePart.regulations.csddd"),
                  active: data.regulations.csddd,
                },
              ].map((reg) => (
                <div
                  key={reg.id}
                  className={`flex items-center justify-between p-4 rounded-3xl border transition-all ${
                    reg.active
                      ? "border-slate-100 bg-white shadow-sm"
                      : "border-slate-50 bg-slate-50/50 "
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        reg.active
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {reg.active ? (
                        <ClipboardCheck size={16} />
                      ) : (
                        <AlertTriangle size={16} />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-800">
                        {reg.id}
                      </div>
                      <div className="text-[12px] font-bold text-slate-400">
                        {reg.desc}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-xs font-black ${
                      reg.active ? "text-emerald-500" : "text-slate-300"
                    }`}
                  >
                    {reg.active
                      ? t("supplierDetail.compliancePart.status.applicable")
                      : t("supplierDetail.compliancePart.status.exempted")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 进度条与Demo按钮 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[14px] font-black text-slate-400 ">
                {t("supplierDetail.compliancePart.progress.title")}
              </p>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[11px] font-black text-slate-700">
                      {t(
                        "supplierDetail.compliancePart.progress.dpp_completeness"
                      )}
                    </span>
                    <span className="text-xs font-black text-emerald-500">
                      {data.regulations.dpp_progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${data.regulations.dpp_progress}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[11px] font-black text-slate-700">
                      {t(
                        "supplierDetail.compliancePart.progress.csrd_report_progress"
                      )}
                    </span>
                    <span className="text-xs font-black text-emerald-600">
                      {data.regulations.csrd_progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-sm"
                      style={{
                        width: `${data.regulations.csrd_progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => handleReportGen("DPP")}
                className="flex items-center justify-between p-4 bg-white border-2 border-emerald-600 text-emerald-700 rounded-3xl hover:bg-emerald-50 transition-all group active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <FileCheck size={18} className="text-emerald-600" />
                  <span className="text-[12px] font-black tracking-widest  text-left">
                    {t("supplierDetail.compliancePart.actions.generate_dpp")}
                  </span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
                />
              </button>
              <button
                onClick={() => handleReportGen("CSRD")}
                className="flex items-center justify-between p-4 bg-white border-2 border-emerald-600 text-emerald-700 rounded-3xl hover:bg-emerald-50 transition-all group active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <QrCode size={18} className="text-emerald-600" />
                  <span className="text-[12px] font-black tracking-widest  text-left">
                    {t("supplierDetail.compliancePart.actions.generate_csrd")}
                  </span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧：差距分析卡片 */}
      <div className="lg:col-span-4 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
          <ShieldAlert size={16} className="text-orange-500" />
          {t("supplierDetail.compliancePart.gaps")}
        </h3>

        <div className="space-y-4 flex-1">
          {shuffled.length > 0 ? (
            shuffled.map((gap) => (
              <div
                key={gap.id}
                className="p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-orange-100 transition-all group"
              >
                <div className="text-xs font-black text-slate-800 mb-1 group-hover:text-orange-600">
                  {gap[currentLang].title}
                </div>
                <div className="text-[11px] font-medium text-slate-500 leading-normal">
                  {gap[currentLang].desc}
                </div>
              </div>
            ))
          ) : (
            /* 骨架屏或占位符，避免内容闪烁 */
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-slate-50 rounded-2xl" />
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-dashed border-indigo-100">
          <p className="text-[10px] text-slate-400 font-bold leading-normal">
            {t("supplierDetail.compliancePart.footer_note")}
          </p>
        </div>
      </div>
    </div>
  );
}
