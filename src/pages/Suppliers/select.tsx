import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// 定义 Props 接口
interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  /** 国际化函数，通常来自 useTranslation */
  t: (key: string) => string;
  /** 业务类型，用于拼接翻译路径 */
  type: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  t,
  type,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 为 ref 指定 HTMLDivElement 类型
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 使用 contains 时，event.target 需要断言为 Node
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getOptionLabel = (opt: string): string => {
    if (opt === "All") return placeholder;
    // 根据传入的 type 来决定从哪个模块取翻译
    const translationPath = `supplier.${type}.${opt.toLowerCase()}`;
    const translated = t(translationPath);
    return translated !== translationPath ? translated : opt;
  };

  return (
    <div className="flex items-center gap-2 relative" ref={dropdownRef}>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
        {label}
      </span>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between min-w-[120px] px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-700 hover:border-emerald-200 hover:bg-white transition-all ${
          isOpen ? "ring-2 ring-emerald-500/10 border-emerald-500 bg-white" : ""
        }`}
      >
        <span className="truncate">{getOptionLabel(value)}</span>
        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-emerald-500/5 overflow-hidden z-[100]">
          <div className="py-1 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-xs font-bold flex justify-between items-center transition-colors ${
                  value === option
                    ? "text-emerald-600 bg-emerald-50/50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
                }`}
              >
                {getOptionLabel(option)}
                {value === option && (
                  <Check size={14} className="text-emerald-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
