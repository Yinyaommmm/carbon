import type { ComplianceLevel } from "./badge";
/** * 能源趋势数据点
 */
export interface EnergyTrendPoint {
  month: string;
  value: number;
}

/** * 工艺环节分布
 */
export interface ProcessDistribution {
  name: string;
  value: number;
  color: string;
}

/** * 碳排放与能效核心指标
 */
export interface SupplierMetrics {
  scope1: number; // 直接排放 (tCO2e)
  scope2: number; // 能源间接排放 (tCO2e)
  scope3: number; // 其他间接排放 (tCO2e)
  pcf: string; // 单位产品碳足迹 (Product Carbon Footprint)
  energy_efficiency: string; // 能效比 (e.g., kWh/unit)
  esg_score: number; // ESG 综合评分 (0-100)
}

/** * 供应商详细信息完整接口
 */
export interface SupplierDetail {
  id: string;
  name: string;
  industry: string;
  country: string;
  scale: string; // 产能规模
  compliance: ComplianceLevel;
  metrics: SupplierMetrics;
  energy_trend: EnergyTrendPoint[];
  process_distribution: ProcessDistribution[];
  ai_suggestions: string[]; // AI 优化建议列表
  regulations: {
    dpp: boolean;
    dpp_progress: number; // 0-100
    csrd: boolean;
    csrd_progress: number; // 0-100
    csddd: boolean;
  };
}
export const MOCK_SUPPLIERS: Record<string, SupplierDetail> = {
  S001: {
    id: "S001",
    name: "GreenTex Solutions",
    industry: "Textile",
    country: "China",
    scale: "5,000,000 Meters/Year",
    compliance: "High",
    metrics: {
      scope1: 450,
      scope2: 600,
      scope3: 150,
      pcf: "0.24 kgCO2e/m",
      energy_efficiency: "1.2 kWh/m",
      esg_score: 92,
    },
    energy_trend: [
      { month: "Jan", value: 1.45 },
      { month: "Feb", value: 1.42 },
      { month: "Mar", value: 1.38 },
      { month: "Apr", value: 1.35 },
      { month: "May", value: 1.28 },
      { month: "Jun", value: 1.2 },
    ],
    process_distribution: [
      { name: "Dyeing", value: 45, color: "#10b981" },
      { name: "Weaving", value: 30, color: "#3b82f6" },
      { name: "Finishing", value: 15, color: "#f59e0b" },
      { name: "Others", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "优化锅炉运行工况，通过余热回收系统预计可节能 6-8%。",
      "染整段预热温度降低 2°C，单批次能耗预计下降约 3%。",
      "夜间峰谷平电价切换，建议将高耗能定型工序调整至夜间运行，降低 5% 电费。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 75,
      csrd: true,
      csrd_progress: 60,
      csddd: false,
    },
  },
  S002: {
    id: "S002",
    name: "EcoDrive Auto Parts",
    industry: "Auto",
    country: "Germany",
    scale: "1,200,000 Units/Year",
    compliance: "High",
    metrics: {
      scope1: 1200,
      scope2: 1800,
      scope3: 450,
      pcf: "2.88 kgCO2e/unit",
      energy_efficiency: "15.5 kWh/unit",
      esg_score: 88,
    },
    energy_trend: [
      { month: "Jan", value: 17.2 },
      { month: "Feb", value: 16.8 },
      { month: "Mar", value: 16.5 },
      { month: "Apr", value: 16.0 },
      { month: "May", value: 15.8 },
      { month: "Jun", value: 15.5 },
    ],
    process_distribution: [
      { name: "Die-casting", value: 55, color: "#10b981" },
      { name: "Machining", value: 25, color: "#3b82f6" },
      { name: "Assembly", value: 10, color: "#f59e0b" },
      { name: "Logistics", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "压铸机保温炉升级为电加热节能模组，可降低能耗 12%。",
      "部署 AI 预测性维护 system，减少设备空转时间，提升能效 4%。",
      "建议采用更高比例的可再生铝锭，可降低 Scope 3 排放约 15%。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 65,
      csrd: true,
      csrd_progress: 60,
      csddd: false,
    },
  },
  S003: {
    id: "S003",
    name: "Silicon Cycle Inc.",
    industry: "Electronics",
    country: "Vietnam",
    scale: "10,000,000 Chips/Year",
    compliance: "Medium",
    metrics: {
      scope1: 150,
      scope2: 640,
      scope3: 100,
      pcf: "0.089 kgCO2e/chip",
      energy_efficiency: "0.45 kWh/chip",
      esg_score: 76,
    },
    energy_trend: [
      { month: "Jan", value: 0.52 },
      { month: "Feb", value: 0.5 },
      { month: "Mar", value: 0.49 },
      { month: "Apr", value: 0.48 },
      { month: "May", value: 0.46 },
      { month: "Jun", value: 0.45 },
    ],
    process_distribution: [
      { name: "Lithography", value: 40, color: "#10b981" },
      { name: "Packaging", value: 35, color: "#3b82f6" },
      { name: "Testing", value: 20, color: "#f59e0b" },
      { name: "Cleaning", value: 5, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "超净间空调节能改造，通过变频控制可降低 10% 电耗。",
      "提高封装测试的一次性通过率（Yield Rate），减少废品碳足迹。",
      "考虑在厂房屋顶加装光伏板，越南日照条件可覆盖 15% 生产用电。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 45,
      csrd: true,
      csrd_progress: 20,
      csddd: true,
    },
  },
  S004: {
    id: "S004",
    name: "Nordic Fiber Co.",
    industry: "Textile",
    country: "Sweden",
    scale: "2,000,000 Meters/Year",
    compliance: "High",
    metrics: {
      scope1: 80,
      scope2: 400,
      scope3: 80,
      pcf: "0.28 kgCO2e/m",
      energy_efficiency: "0.95 kWh/m",
      esg_score: 95,
    },
    energy_trend: [
      { month: "Jan", value: 1.05 },
      { month: "Feb", value: 1.02 },
      { month: "Mar", value: 1.0 },
      { month: "Apr", value: 0.98 },
      { month: "May", value: 0.96 },
      { month: "Jun", value: 0.95 },
    ],
    process_distribution: [
      { name: "Spinning", value: 50, color: "#10b981" },
      { name: "Weaving", value: 25, color: "#3b82f6" },
      { name: "Finishing", value: 20, color: "#f59e0b" },
      { name: "Packing", value: 5, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "该供应商已达到极高能效，建议申请绿色工厂认证。",
      "持续利用北欧风电优势，Scope 2 排放仍有下降空间。",
      "推广生物质基纤维替代合成纤维，进一步优化产品生命周期评价 (LCA)。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 45,
      csrd: true,
      csrd_progress: 20,
      csddd: true,
    },
  },
  S005: {
    id: "S005",
    name: "Global Alloy Works",
    industry: "Auto",
    country: "India",
    scale: "800,000 Tons/Year",
    compliance: "Low",
    metrics: {
      scope1: 3200,
      scope2: 2000,
      scope3: 400,
      pcf: "7.0 kgCO2e/ton",
      energy_efficiency: "450 kWh/ton",
      esg_score: 54,
    },
    energy_trend: [
      { month: "Jan", value: 480 },
      { month: "Feb", value: 475 },
      { month: "Mar", value: 470 },
      { month: "Apr", value: 465 },
      { month: "May", value: 460 },
      { month: "Jun", value: 450 },
    ],
    process_distribution: [
      { name: "Smelting", value: 70, color: "#10b981" },
      { name: "Forging", value: 15, color: "#3b82f6" },
      { name: "Heat Treatment", value: 10, color: "#f59e0b" },
      { name: "Others", value: 5, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "由于合规性极低，首要任务是安装自动化碳监测系统替代人工申报。",
      "熔炼炉热损失严重，加固保温层可减少 15% 能源浪费。",
      "印度当地电力碳强度高，建议购买绿证或投资清洁能源项目。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 45,
      csrd: true,
      csrd_progress: 20,
      csddd: true,
    },
  },
  S006: {
    id: "S006",
    name: "Zenith Electronics",
    industry: "Electronics",
    country: "Japan",
    scale: "3,500,000 Units/Year",
    compliance: "High",
    metrics: {
      scope1: 200,
      scope2: 800,
      scope3: 100,
      pcf: "0.31 kgCO2e/unit",
      energy_efficiency: "2.1 kWh/unit",
      esg_score: 94,
    },
    energy_trend: [
      { month: "Jan", value: 2.35 },
      { month: "Feb", value: 2.3 },
      { month: "Mar", value: 2.25 },
      { month: "Apr", value: 2.2 },
      { month: "May", value: 2.15 },
      { month: "Jun", value: 2.1 },
    ],
    process_distribution: [
      { name: "SMT", value: 50, color: "#10b981" },
      { name: "Assembly", value: 20, color: "#3b82f6" },
      { name: "Aging", value: 20, color: "#f59e0b" },
      { name: "Packaging", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "SMT 回流焊炉采用氮气保护循环，可提升焊接质量并微幅降能。",
      "老化测试环节电力回收，将热能重新转化为电能或采暖。",
      "推进“零废弃工厂”计划，目前废弃物回收率已达 85%，可冲击 95%。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 55,
      csrd: true,
      csrd_progress: 80,
      csddd: false,
    },
  },
  S007: {
    id: "S007",
    name: "Silk Route Textiles",
    industry: "Textile",
    country: "India",
    scale: "4,000,000 Meters/Year",
    compliance: "Medium",
    metrics: {
      scope1: 900,
      scope2: 1000,
      scope3: 200,
      pcf: "0.525 kgCO2e/m",
      energy_efficiency: "2.5 kWh/m",
      esg_score: 68,
    },
    energy_trend: [
      { month: "Jan", value: 2.85 },
      { month: "Feb", value: 2.8 },
      { month: "Mar", value: 2.75 },
      { month: "Apr", value: 2.65 },
      { month: "May", value: 2.6 },
      { month: "Jun", value: 2.5 },
    ],
    process_distribution: [
      { name: "Precision", value: 60, color: "#10b981" },
      { name: "Coating", value: 20, color: "#3b82f6" },
      { name: "Inspection", value: 10, color: "#f59e0b" },
      { name: "Logistics", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "水洗工段循环用水比例不足 30%，建议引入中水回用系统。",
      "目前燃煤比例较高，建议逐步切换为生物质锅炉或电锅炉。",
      "提高工人的 ESG 意识培训，减少因误操作导致的材料损耗。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 55,
      csrd: true,
      csrd_progress: 80,
      csddd: false,
    },
  },
  S008: {
    id: "S008",
    name: "Bav Bavarian Precision",
    industry: "Auto",
    country: "Germany",
    scale: "900,000 Units/Year",
    compliance: "High",
    metrics: {
      scope1: 800,
      scope2: 1600,
      scope3: 400,
      pcf: "3.11 kgCO2e/unit",
      energy_efficiency: "12.8 kWh/unit",
      esg_score: 91,
    },
    energy_trend: [
      { month: "Jan", value: 14.5 },
      { month: "Feb", value: 14.2 },
      { month: "Mar", value: 13.9 },
      { month: "Apr", value: 13.5 },
      { month: "May", value: 13.2 },
      { month: "Jun", value: 12.8 },
    ],
    process_distribution: [
      { name: "Precision", value: 60, color: "#10b981" },
      { name: "Coating", value: 20, color: "#3b82f6" },
      { name: "Inspection", value: 10, color: "#f59e0b" },
      { name: "Logistics", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "优化 CNC 刀具路径，减少切削时间，预计可提升 5% 效率。",
      "表面处理车间通风系统可引入智能感应，按需运行节能 8%。",
      "协同供应链上游供应商改用绿氢还原钢材，削减 Scope 3。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 75,
      csrd: true,
      csrd_progress: 90,
      csddd: true,
    },
  },
  S009: {
    id: "S009",
    name: "Pacific Tech Components",
    industry: "Electronics",
    country: "USA",
    scale: "2,500,000 Pieces/Year",
    compliance: "Medium",
    metrics: {
      scope1: 300,
      scope2: 1000,
      scope3: 200,
      pcf: "0.60 kgCO2e/pc",
      energy_efficiency: "4.2 kWh/pc",
      esg_score: 72,
    },
    energy_trend: [
      { month: "Jan", value: 4.65 },
      { month: "Feb", value: 4.55 },
      { month: "Mar", value: 4.45 },
      { month: "Apr", value: 4.35 },
      { month: "May", value: 4.25 },
      { month: "Jun", value: 4.2 },
    ],
    process_distribution: [
      { name: "Molding", value: 50, color: "#10b981" },
      { name: "Spraying", value: 20, color: "#3b82f6" },
      { name: "Assembly", value: 20, color: "#f59e0b" },
      { name: "Packaging", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "注塑机液压驱动升级为全电驱动，能效可提升 30% 以上。",
      "工厂照明全部更换为 LED 智能感应灯具，年省电 5 万美金。",
      "建议寻找本地供应商以减少跨国物流产生的 Scope 3 碳足迹。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 75,
      csrd: true,
      csrd_progress: 90,
      csddd: true,
    },
  },
  S010: {
    id: "S010",
    name: "Atlas Heavy Industry",
    industry: "Auto",
    country: "China",
    scale: "500,000 Heavy Units/Year",
    compliance: "Low",
    metrics: {
      scope1: 5500,
      scope2: 2800,
      scope3: 600,
      pcf: "17.8 kgCO2e/unit",
      energy_efficiency: "95.0 kWh/unit",
      esg_score: 48,
    },
    energy_trend: [
      { month: "Jan", value: 105.0 },
      { month: "Feb", value: 103.5 },
      { month: "Mar", value: 102.0 },
      { month: "Apr", value: 99.5 },
      { month: "May", value: 97.0 },
      { month: "Jun", value: 95.0 },
    ],
    process_distribution: [
      { name: "Welding", value: 40, color: "#10b981" },
      { name: "Stamping", value: 35, color: "#3b82f6" },
      { name: "Painting", value: 15, color: "#f59e0b" },
      { name: "Final Assy", value: 10, color: "#94a3b8" },
    ],
    ai_suggestions: [
      "合规性风险极高，急需建立碳资产管理制度以应对碳关税。",
      "冲压线电机能效较低，建议进行变频改造或直接更换高效电机。",
      "涂装车间废气燃烧热能未回收，建议增加 RTO 热能回用设备。",
    ],
    regulations: {
      dpp: true,
      dpp_progress: 26,
      csrd: true,
      csrd_progress: 36,
      csddd: true,
    },
  },
};
