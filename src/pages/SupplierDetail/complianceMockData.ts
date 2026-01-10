export type GAPADVICE = {
  id: string;
  zh: {
    title: string;
    desc: string;
  };
  en: { title: string; desc: string };
};
export const COMPLIANCE_GAP_POOL: GAPADVICE[] = [
  {
    id: "gap_1",
    zh: {
      title: "能效数据粒度不足",
      desc: "染色设备缺乏二级电表，无法满足 DPP 工序级要求。",
    },
    en: {
      title: "Granular Energy Data Gap",
      desc: "Missing sub-meters for dyeing process-level carbon footprint.",
    },
  },
  {
    id: "gap_2",
    zh: {
      title: "劳工审计过期",
      desc: "BSCI 审计证书已过期 3 个月，需尽快更新。",
    },
    en: {
      title: "Labor Audit Expired",
      desc: "BSCI certificate expired 3 months ago; renewal required.",
    },
  },
  {
    id: "gap_3",
    zh: {
      title: "化学品声明缺失",
      desc: "部分原材料供应商未提供 OEKO-TEX 100 声明。",
    },
    en: {
      title: "Chemical Declaration Gap",
      desc: "Suppliers failed to provide OEKO-TEX 100 certificates.",
    },
  },
  {
    id: "gap_4",
    zh: {
      title: "循环性数据缺失",
      desc: "产品拆解说明书未达到 ESPR 数字化标准。",
    },
    en: {
      title: "Circularity Data Gap",
      desc: "Disassembly instructions fail to meet ESPR digital standards.",
    },
  },
  {
    id: "gap_5",
    zh: {
      title: "供应链追溯不全",
      desc: "二级供应商原材料产地证明文件不完整。",
    },
    en: {
      title: "Traceability Incomplete",
      desc: "Origin docs for Tier 2 suppliers are incomplete or missing.",
    },
  },
  {
    id: "gap_6",
    zh: {
      title: "碳核算范围误差",
      desc: "范围 3 排放量计算未包含外包物流运输数据。",
    },
    en: {
      title: "Carbon Accounting Error",
      desc: "Scope 3 emissions exclude outsourced logistics data.",
    },
  },
  {
    id: "gap_7",
    zh: {
      title: "水足迹记录不合规",
      desc: "废水排放实时监测系统尚未与中央平台对接。",
    },
    en: {
      title: "Water Footprint Gap",
      desc: "Discharge monitoring is not linked to the central platform.",
    },
  },
  {
    id: "gap_8",
    zh: {
      title: "回收含量验证不足",
      desc: "再生聚酯纤维缺乏有效的 GRS 全球回收标准认证。",
    },
    en: {
      title: "Recycled Content Issue",
      desc: "Recycled polyester lacks valid GRS certification.",
    },
  },
  {
    id: "gap_9",
    zh: {
      title: "生物多样性影响评估",
      desc: "尚未完成生产基地对当地生态系统影响的年度评估。",
    },
    en: {
      title: "Biodiversity Assessment",
      desc: "Annual ecosystem impact assessment not yet completed.",
    },
  },
  {
    id: "gap_10",
    zh: {
      title: "冲突矿产申报缺失",
      desc: "辅料供应商未提交合规的 3TG 冲突矿产尽职调查。",
    },
    en: {
      title: "Conflict Mineral Gap",
      desc: "Auxiliary suppliers failed to submit 3TG due diligence.",
    },
  },
];
