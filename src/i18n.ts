
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 翻译资源文件 (假数据示例)
const resources = {
  en: {
    translation: {
      // Navbar 文本
      'brand_name': 'ABC ESG-Link',
      'nav_dashboard': 'Dashboard',
      "Dashboard":"Dashboard",
      'nav_suppliers': 'Suppliers',
      'Suppliers': 'Suppliers',
      'nav_value_enablement': 'Value & Enablement',
      "Value & Enablement":"Value & Enablement",
      'nav_compliance': 'Compliance Hub',
      'Compliance Hub': "Compliance Hub",
      'nav_incentives': 'Incentive Engine',
      'Incentive Engine': 'Incentive Engine',
      'nav_finance': 'Green Finance',
      'Green Finance': 'Green Finance',
      'nav_settings': 'Settings',
      "cur_lang" : "Current Language",
      'language_switch': 'EN', // 按钮显示切换后的语言
      // 页面内容
      'welcome_title': 'Welcome to ESG Data Platform',
      'main_heading': 'Supply Chain Decarbonization',

      hero_brand: 'ABC ESG-Link',
      hero_title: 'Carbon Assetization & Decarbonization for Complex Supply Chains',
      hero_description: 'Empowering textile, automotive, and electronics industries. Using ',
      hero_tech_suffix: ' to turn Scope 3 emissions into trusted assets and global compliance solutions.',
      btn_start: 'Start Decarbonizing',
      btn_whitepaper: 'Technical Whitepaper',
      feat_realtime: 'Real-time Monitoring',
      feat_verified: 'On-chain Certificates',
      feat_global: 'Global Compliance',
      stat_carbon: 'Carbon Saved',
      stat_eff: 'Efficiency',
    },
  },
  zh: {
    translation: {
      // Navbar 文本
      'brand_name': 'ABC ESG-Link',
      'nav_dashboard': '总体仪表盘',
      "Dashboard":"总体仪表盘",
      'nav_suppliers': '供应商列表',
      'Suppliers': '供应商列表',
      'nav_value_enablement': '价值与驱动',
      "Value & Enablement":"价值与驱动",
      'nav_compliance': '合规中心',
      'Compliance Hub': '合规中心',
      'nav_incentives': '激励引擎',
      'Incentive Engine': '激励引擎',
      'nav_finance': '绿色金融',
      'Green Finance': '绿色金融',
      'nav_settings': '系统设置',
       "cur_lang" : "当前语言",
      'language_switch': '中文', // 按钮显示切换后的语言
      // 页面内容
      'welcome_title': '欢迎使用 ESG 数据平台',
      'main_heading': '供应链脱碳',

      hero_brand: 'ABC ESG-Link',
      hero_title: '复杂制造业供应链的碳数据资产化与深度脱碳服务商',
      hero_description: '面向纺织、汽车零部件、消费电子等高能耗供应链。通过 ',
      hero_tech_suffix: ' 技术体系，将 Scope3 碳排放数据沉淀为可信资产并提供合规解决方案。',
      btn_start: '开启脱碳之旅',
      btn_whitepaper: '查看技术白皮书',
      feat_realtime: '实时能效监测',
      feat_verified: '链上资产凭证',
      feat_global: '跨境合规服务',
      stat_carbon: '累计减碳',
      stat_eff: '效率提升',
    },
  },
};

i18n
  .use(initReactI18next) // 传入 i18n 实例给 react-i18next
  .init({
    resources,
    lng: 'zh', // 默认语言设置为中文 (您可以更改为 'en')
    fallbackLng: 'en', // 如果当前语言没有找到翻译，则回退到英文
    interpolation: {
      escapeValue: false, // react 已经做了 XSS 防范，不需要转义
    },
  });

export default i18n;