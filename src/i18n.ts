import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 翻译资源文件 (假数据示例)
const resources = {
  en: {
    translation: {
      // Navbar 文本
      brand_name: "ABC ESG-Link",
      nav_dashboard: "Dashboard",
      Dashboard: "Dashboard",
      nav_suppliers: "Suppliers",
      Suppliers: "Suppliers",
      nav_value_enablement: "Value & Enablement",
      "Value & Enablement": "Value & Enablement",
      nav_compliance: "Compliance Hub",
      "Compliance Hub": "Compliance Hub",
      nav_incentives: "Incentive Engine",
      "Incentive Engine": "Incentive Engine",
      nav_finance: "Green Finance",
      "Green Finance": "Green Finance",
      nav_settings: "Settings",
      cur_lang: "Current Language",
      language_switch: "EN", // 按钮显示切换后的语言
      // 页面内容
      welcome_title: "Welcome to ESG Data Platform",
      main_heading: "Supply Chain Decarbonization",
      // Section 1
      hero_brand: "ABC ESG-Link",
      hero_title:
        "Carbon Assetization & Decarbonization for Complex Supply Chains",
      hero_description:
        "Empowering textile, automotive, and electronics industries. Using ",
      hero_tech_suffix:
        " to turn Scope 3 emissions into trusted assets and global compliance solutions.",
      btn_start: "Start Decarbonizing",
      btn_whitepaper: "Technical Whitepaper",
      feat_realtime: "Real-time Monitoring",
      feat_verified: "On-chain Certificates",
      feat_global: "Global Compliance",
      stat_carbon: "Carbon Saved",
      stat_eff: "Efficiency",
      // Section 2
      sec2_title: "End-to-End Digital Solutions",
      sec2_subtitle:
        "Customized for vertical industries to solve supply chain calculation pain points",
      card1_title: "Untrusted Scope 3 Data",
      card1_desc:
        "Eliminate supply chain 'black boxes' with end-to-end traceability, transforming vague estimates into high-fidelity verified data.",
      card2_title: "High Compliance Costs",
      card2_desc:
        "Streamline global trade with pre-integrated DPP, CSRD, and CSDDD frameworks to automate reporting and reduce legal overhead.",
      card3_title: "Supplier Inertia",
      card3_desc:
        "Align decarbonization with ROI through energy optimization and green finance, turning carbon cuts into a value driver for suppliers.",
      // Section 3
      sec3_title: "Core Platform Modules",
      sec3_subtitle:
        "A closed-loop ecosystem from data collection to compliance",
      m1_title: "Data-Link",
      m1_subtitle: "Data Governance",
      m1_detail:
        "lloT collection, RPA entry, 95% Blockchain proof, multi-lang appeals.",
      m2_title: "Carbon-Insight",
      m2_subtitle: "AI Optimization",
      m2_detail:
        "Process-level AI optimization, digital twin, carbon risk warning.",
      m3_title: "Incentive-Engine",
      m3_subtitle: "Business Driving",
      m3_detail:
        "ESG scoring, order weighting, green finance linkage for suppliers.",
      m4_title: "Compliance-Hub",
      m4_subtitle: "Cross-border Hub",
      m4_detail:
        "DPP packages, CSRD/TCFD reports, CSDDD due diligence records.",
      // Section 4
      sec4_main_title: "Market & Value",
      sec4_main_subtitle:
        "Deep dive into Asia manufacturing for global decarbonization",
      sec4_market_title: "Market Scope",
      sec4_market_desc:
        "Asia's complex manufacturing supply chain driven by global brands",
      sec4_market_stat: "$Trillions TAM",
      sec4_market_tag2: "Asia Growth Engine",
      sec4_value_title: "Value Proposition",
      sec4_value_burden: "Compliance Burden",
      sec4_value_gain:
        "Business Value (Orders) & Financial Benefits (Cost reduction)",
      sec4_value_tag1: "Visible ROI",
      sec4_value_tag2: "ESG Competitiveness",
      // footer
      footer_contact: "Contact Info",
      footer_name: "Zhengyi Fan",
      footer_edu: "The Johns Hopkins University · Major Name",
      footer_email: "Email: yourname@???.edu",
      footer_disclaimer:
        "This platform is currently in the research and prototype stage. All data are simulated examples.",
      footer_rights: "© 2026 ABC ESG-Link Project. All Rights Reserved.",
      // dashboard
      dash_title: "ESG Control Dashboard",
      dash_subtitle:
        "Real-time analysis of supply chain ESG metrics & compliance",
      filter_brand: "Brand",
      filter_industry: "Industry",
      time_30: "Last 30 Days",
      time_12: "Last 12 Months",
      ind_textile: "Textile",
      ind_auto: "Auto Parts",
      ind_electronics: "Electronics",
      kpi_carbon: "Total Carbon",
      kpi_energy: "Total Energy",
      kpi_pcf: "Avg. PCF",
      kpi_saving: "AI Predicted Saving",
      kpi_risk: "Compliance Risk",
      kpi_suppliers: "Active Suppliers",
      risk_med: "Medium",
      risk_low: "Low",
      chart_trend: "Carbon Emission Trend",
      chart_scope: "Emissions by Scope",
      chart_compare: "Energy Comparison by Industry",
      unit_carbon: "t CO2",
      unit_energy: "kWh",
      used_kwh: "USAGE KWH",
      AI_Prediction: "AI Prediction",
      Sector: "Sector",
      SAMPLING: "THREE-DAY SAMPLING",
      MONTHLY_AGGREGATED: "MONTHLY AGGREGATED",
      Global: "Global",
      chart: {
        stats: "Stats",
        trend: "Trend",
        emissions: "Emissions",
      },
    },
  },
  zh: {
    translation: {
      // Navbar 文本
      brand_name: "ABC ESG-Link",
      nav_dashboard: "总体仪表盘",
      Dashboard: "总体仪表盘",
      nav_suppliers: "供应商列表",
      Suppliers: "供应商列表",
      nav_value_enablement: "价值与驱动",
      "Value & Enablement": "价值与驱动",
      nav_compliance: "合规中心",
      "Compliance Hub": "合规中心",
      nav_incentives: "激励引擎",
      "Incentive Engine": "激励引擎",
      nav_finance: "绿色金融",
      "Green Finance": "绿色金融",
      nav_settings: "系统设置",
      cur_lang: "当前语言",
      language_switch: "中文", // 按钮显示切换后的语言
      // 页面内容
      welcome_title: "欢迎使用 ESG 数据平台",
      main_heading: "供应链脱碳",
      // Sectoin 1
      hero_brand: "ABC ESG-Link",
      hero_title: "复杂制造业供应链的碳数据资产化与深度脱碳服务商",
      hero_description: "面向纺织、汽车零部件、消费电子等高能耗供应链。通过 ",
      hero_tech_suffix:
        " 技术体系，将 Scope3 碳排放数据沉淀为可信资产并提供合规解决方案。",
      btn_start: "开启脱碳之旅",
      btn_whitepaper: "查看技术白皮书",
      feat_realtime: "实时能效监测",
      feat_verified: "链上资产凭证",
      feat_global: "跨境合规服务",
      stat_carbon: "累计减碳",
      stat_eff: "效率提升",
      // Section 2
      sec2_title: "全链路数字化脱碳解决方案",
      sec2_subtitle: "针对垂直行业深度定制，解决供应链碳核算痛点",
      card1_title: "Scope 3 数据不可信",
      card1_desc:
        "攻克供应端数据“黑盒”，通过全链路可追溯技术，将模糊的估算数据转化为高置信度的实测数据。",
      card2_title: "跨境合规成本高",
      card2_desc:
        "预置 DPP、CSRD 及 CSDDD 申报框架，自动化生成数字化报告，降低企业出海的技术门槛与法务成本。",
      card3_title: "供应商缺乏减排动力",
      card3_desc:
        "打破减排与降本的博弈，通过能效优化与绿色金融工具，将碳减排从“成本项”转变为供应商的“收益项”。",
      // Section 3
      sec3_title: "平台四大核心模块",
      sec3_subtitle: "从底层数据采集到顶层合规申报的闭环生态",
      m1_title: "数据链",
      m1_subtitle: "数据采集与治理",
      m1_detail:
        "lloT 实时采集、RPA 自动录入、区块链 95% 存证、多语种供应商申诉。",
      m2_title: "碳之洞见",
      m2_subtitle: "AI 流程优化",
      m2_detail: "工艺级 AI 降碳优化、数字孪生建模、碳风险预警。",
      m3_title: "激励殷勤",
      m3_subtitle: "商业驱动机制",
      m3_detail:
        "ESG 综合评分、订单权重机制、绿色金融对接，激励供应商主动减排。",
      m4_title: "合规中心",
      m4_subtitle: "跨境合规中心",
      m4_detail: "一站式生成 DPP 数据包、CSRD/TCFD 报告、CSDDD 尽职调查记录。",
      // Section 4
      sec4_main_title: "市场与价值",
      sec4_main_subtitle: "深耕亚洲制造业，连接全球脱碳需求",
      sec4_market_title: "市场范围",
      sec4_market_desc: "全球品牌商驱动的亚洲复杂制造业供应链",
      sec4_market_stat: "数万亿美元 TAM",
      sec4_market_tag2: "亚洲增长引擎",
      sec4_value_title: "价值主张",
      sec4_value_burden: "合规负担",
      sec4_value_gain: "商业价值 (订单) 与 财务效益 (降本)",
      sec4_value_tag1: "投资回报可见",
      sec4_value_tag2: "ESG 竞争力",
      // footer
      footer_contact: "联系方式",
      footer_name: "范争亿",
      footer_edu: "约翰斯霍普金斯大学 · 专业名称",
      footer_email: "Email: yourname@???.edu",
      footer_disclaimer: "本平台目前为研究与原型阶段，所有数据均为模拟示例。",
      footer_rights: "© 2026 ABV ESG-Link 项目. 保留所有权益.",
      // dashboard
      dash_title: "数据监控总控面板",
      dash_subtitle: "实时分析全供应链 ESG 指标与合规状态",
      filter_brand: "选择品牌",
      filter_industry: "选择行业",
      time_30: "最近 30 天",
      time_12: "最近 12 个月",
      ind_textile: "纺织",
      ind_auto: "汽车零部件",
      ind_electronics: "电子",
      kpi_carbon: "总碳排放",
      kpi_energy: "总能耗",
      kpi_pcf: "平均产品碳足迹 (PCF)",
      kpi_saving: "AI 预测节能空间",
      kpi_risk: "合规风险",
      kpi_suppliers: "参与供应商数量",
      risk_med: "中风险",
      risk_low: "低风险",
      chart_trend: "碳排放趋势",
      chart_scope: "按 Scope 排放分布",
      chart_compare: "按行业能耗对比",
      unit_carbon: "t CO2",
      unit_energy: "kWh",
      used_kwh: "已使用千瓦时",
      AI_Prediction: "AI 预测",
      Sector: "行业",
      SAMPLING: "3天采样",
      MONTHLY_AGGREGATED: "月度汇总",
      Global: "全球",
      chart: {
        stats: "数据统计",
        trend: "趋势分析",
        emissions: "碳排放量",
      },
    },
  },
};

i18n
  .use(initReactI18next) // 传入 i18n 实例给 react-i18next
  .init({
    resources,
    lng: "zh", // 默认语言设置为中文 (您可以更改为 'en')
    fallbackLng: "en", // 如果当前语言没有找到翻译，则回退到英文
    interpolation: {
      escapeValue: false, // react 已经做了 XSS 防范，不需要转义
    },
  });

export default i18n;
