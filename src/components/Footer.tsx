import { GraduationCap, Info, Mail, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-slate-100 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* 上方：联系信息水平排列 */}
        <div className="flex flex-col gap-6 mb-6">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-emerald-500"></span>
            {t("footer.footer_contact")}
          </h3>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-600">
            {/* Name */}
            <div className="flex items-center gap-2">
              <User size={16} className="text-slate-400" />
              <span className="font-bold text-slate-800 text-sm">
                {t("footer.footer_name")}
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>

            {/* Edu */}
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-slate-400" />
              <span className="text-sm font-medium">{t("footer.footer_edu")}</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>

            {/* Email */}
            <div className="flex items-center gap-2 group">
              <Mail
                size={16}
                className="text-slate-400 group-hover:text-emerald-500 transition-colors"
              />
              <a
                href={`mailto:${t("footer.footer_email").split("footer.: ")[1]}`}
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                {t("footer.footer_email")}
              </a>
            </div>
          </div>
        </div>

        {/* 底端：左右对齐布局 */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 左侧：免责声明 (绿色高亮样式) */}
          <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3">
            <Info size={14} className="text-emerald-600 shrink-0" />
            <p className="text-[10px] md:text-xs font-bold text-emerald-800/80 leading-none">
              {t("footer.footer_disclaimer")}
            </p>
          </div>

          {/* 右侧：版权信息 */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {t("footer.footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
