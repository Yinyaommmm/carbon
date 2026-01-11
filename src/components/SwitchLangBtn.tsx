import { useTranslation } from "react-i18next";

interface LanguageToggleProps {
  // 建议将参数改为接收具体的语言代码，或者保留原有的切换逻辑
  onChangeLanguage?: (lang: string) => void;
}

const LanguageToggle = ({ onChangeLanguage }: LanguageToggleProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // 处理点击逻辑
  const handleLangChange = (targetLang: string) => {
    if (currentLang !== targetLang) {
      i18n.changeLanguage(targetLang);
      if (onChangeLanguage) onChangeLanguage(targetLang);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* 胶囊式切换按钮主体 */}
      <div className="relative flex items-center bg-gray-100 p-1 rounded-full w-28 h-10 shadow-inner border border-gray-200/50">
        {/* 背景滑块：根据当前语言平滑移动 */}
        <div
          className={`absolute h-8 w-[52px] bg-white rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-gray-100 ${
            currentLang === "zh" ? "translate-x-0" : "translate-x-12"
          }`}
        />

        {/* 中文按钮 */}
        <button
          onClick={() => handleLangChange("zh")}
          className={`relative flex-1 text-[13px] font-black transition-all duration-300 z-10 cursor-pointer ${
            currentLang === "zh"
              ? "text-emerald-600 scale-110"
              : "text-slate-400 opacity-40 hover:opacity-70" // 未选中状态：变暗 + 透明度降低
          }`}
        >
          中
        </button>

        {/* 英文按钮 */}
        <button
          onClick={() => handleLangChange("en")}
          className={`relative flex-1 text-[11px] font-black transition-all duration-300 z-10 cursor-pointer text-center ${
            currentLang === "en"
              ? "text-emerald-600 scale-105"
              : "text-slate-400 opacity-40 hover:opacity-70" // 未选中状态：变暗 + 透明度降低
          }`}
        >
          EN
        </button>
      </div>

      {/* 移动端菜单按钮 */}
      <button className="md:hidden p-2.5 rounded-full text-slate-500 hover:bg-gray-100 transition-colors focus:outline-none border border-transparent active:border-gray-200">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default LanguageToggle;
