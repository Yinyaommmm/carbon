import { useState, useMemo } from "react";
import {
  TrendingUp,
  Wallet,
  ShieldCheck,
  Info,
  Banknote,
  CheckCircle2,
  Calculator,
  PieChart,
  BarChart4,
} from "lucide-react";

/**
 * 供应商原始数据 (基于提供的 mockdata.ts)
 */
const MOCK_SUPPLIERS = {
  S001: {
    id: "S001",
    name: "GreenTex Solutions",
    industry: "Textile",
    metrics: { esg_score: 92 },
  },
  S002: {
    id: "S002",
    name: "EcoDrive Auto Parts",
    industry: "Auto",
    metrics: { esg_score: 88 },
  },
  S003: {
    id: "S003",
    name: "Silicon Cycle Inc.",
    industry: "Electronics",
    metrics: { esg_score: 76 },
  },
  S004: {
    id: "S004",
    name: "Nordic Fiber Co.",
    industry: "Textile",
    metrics: { esg_score: 95 },
  },
  S005: {
    id: "S005",
    name: "Global Alloy Works",
    industry: "Auto",
    metrics: { esg_score: 54 },
  },
  S006: {
    id: "S006",
    name: "Zenith Electronics",
    industry: "Electronics",
    metrics: { esg_score: 94 },
  },
  S007: {
    id: "S007",
    name: "Silk Route Textiles",
    industry: "Textile",
    metrics: { esg_score: 68 },
  },
  S008: {
    id: "S008",
    name: "Bav Bavarian Precision",
    industry: "Auto",
    metrics: { esg_score: 91 },
  },
  S009: {
    id: "S009",
    name: "Pacific Tech Components",
    industry: "Electronics",
    metrics: { esg_score: 72 },
  },
  S010: {
    id: "S010",
    name: "Atlas Heavy Industry",
    industry: "Auto",
    metrics: { esg_score: 48 },
  },
};

const i18n = {
  zh: {
    page_title: "绿色金融大盘",
    page_subtitle: "基于 IESG 实时评分的绿色信贷资产管理与额度测算",
    stat_total_credit: "累计信贷额度",
    stat_avg_rate: "平均利率优惠",
    stat_active_loan: "活跃贷款笔数",
    intro_title: "信贷转化逻辑",
    table_supplier: "供应商名称",
    table_score: "IESG 评分",
    table_limit: "推荐额度",
    table_rate: "预估利率",
    btn_apply: "申请贷款",
    applying: "处理中...",
    apply_success: "申请成功！银行客户经理将尽快联系。",
  },
  en: {
    page_title: "Green Finance Hub",
    page_subtitle: "Green Credit Asset Management via Real-time IESG Scores",
    stat_total_credit: "Total Credit Line",
    stat_avg_rate: "Avg Rate Discount",
    stat_active_loan: "Active Loans",
    intro_title: "Credit Conversion",
    table_supplier: "Supplier Name",
    table_score: "IESG Score",
    table_limit: "Rec. Limit",
    table_rate: "Est. Rate",
    btn_apply: "Apply Loan",
    applying: "Processing...",
    apply_success: "Success! A manager will contact you soon.",
  },
};

const GreenFinance = () => {
  const [lang, setLang] = useState("zh");
  const [appliedId, setAppliedId] = useState(null);
  const t = i18n[lang];

  const financeList = useMemo(() => {
    return Object.values(MOCK_SUPPLIERS)
      .map((s) => {
        const score = s.metrics.esg_score;
        const limit =
          score > 90 ? score * 15 : score > 70 ? score * 10 : score * 5;
        const rate =
          score > 90
            ? "3.15%"
            : score > 70
            ? "3.85%"
            : score > 50
            ? "4.50%"
            : "6.20%";
        return { ...s, limit: `¥${limit.toFixed(1)}M`, rate };
      })
      .sort((a, b) => b.metrics.esg_score - a.metrics.esg_score);
  }, []);

  const handleApply = (id) => {
    setAppliedId(id);
    setTimeout(() => setAppliedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- 标题栏 --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
              {t.page_title}
            </h1>
            <p className="text-slate-500 text-sm mt-1">{t.page_subtitle}</p>
          </div>

          {/* 语言切换器 */}
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 w-fit">
            <button
              onClick={() => setLang("zh")}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${
                lang === "zh" ? "bg-slate-900 text-white" : "text-slate-400"
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${
                lang === "en" ? "bg-slate-900 text-white" : "text-slate-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* --- 数据看板统计卡片 --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: t.stat_total_credit,
              value: "¥842.5M",
              icon: <Wallet className="text-emerald-500" />,
              sub: "+12.5% vs last month",
            },
            {
              label: t.stat_avg_rate,
              value: "-1.25%",
              icon: <TrendingUp className="text-indigo-500" />,
              sub: "Avg ESG Discount",
            },
            {
              label: t.stat_active_loan,
              value: "124",
              icon: <BarChart4 className="text-amber-500" />,
              sub: "Certified Suppliers",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-[9px] font-bold text-slate-300 uppercase mt-0.5">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- 主体内容区 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* 左侧：信贷矩阵表格 */}
          <div className="lg:col-span-8 bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <PieChart size={16} className="text-indigo-600" />{" "}
                供应商信贷分发
              </h3>
              <span className="text-[10px] font-bold text-slate-400 italic">
                Verified by ABC-Chain
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {t.table_supplier}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                      {t.table_score}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                      {t.table_limit}
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {financeList.slice(0, 8).map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-[10px]">
                            {item.id}
                          </div>
                          <div>
                            <div className="text-sm font-black text-slate-800">
                              {item.name}
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase">
                              {item.industry}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div
                          className={`inline-flex px-2 py-0.5 rounded-md text-xs font-black ${
                            item.metrics.esg_score > 80
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              : "bg-slate-50 text-slate-500 border border-slate-100"
                          }`}
                        >
                          {item.metrics.esg_score}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="text-sm font-black text-slate-800 tracking-tight">
                          {item.limit}
                        </div>
                        <div className="text-[9px] font-bold text-emerald-500">
                          {item.rate} APR
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => handleApply(item.id)}
                          className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
                        >
                          {t.btn_apply}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 右侧：金融逻辑（已改为白底样式） */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Calculator size={18} className="text-emerald-500" />{" "}
                {t.intro_title}
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                {[
                  {
                    icon: <ShieldCheck size={14} />,
                    label: "数据确权",
                    desc: "IoT传感器数据实时上链",
                  },
                  {
                    icon: <TrendingUp size={14} />,
                    label: "IESG 评级",
                    desc: "环境风险与能效建模评分",
                  },
                  {
                    icon: <Banknote size={14} />,
                    label: "信贷撮合",
                    desc: "自动匹配绿色金融贷款通道",
                  },
                ].map((step, i) => (
                  <div key={i} className="relative flex gap-4 pl-0">
                    <div className="z-10 w-6 h-6 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-emerald-500 shadow-sm">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-900">
                        {step.label}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                合作金融机构
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-transparent hover:border-slate-200">
                  <span className="font-black italic text-slate-900 text-xs">
                    HSBC
                  </span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-transparent hover:border-slate-200">
                  <span className="font-black italic text-slate-900 text-blue-800 text-xs text-center leading-none">
                    J.P. Morgan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部备注 */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
            <Info size={14} /> 数据最近更新: 2024-06-15 08:00
          </div>
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
            © 2024 ESG-Link FinTech
          </div>
        </div>
      </div>

      {/* 提示组件 */}
      {appliedId && (
        <div className="fixed bottom-10 right-10 bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-4 border-white animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 size={18} />
          <p className="font-black text-sm">{t.apply_success}</p>
        </div>
      )}
    </div>
  );
};

export default GreenFinance;
