import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { supplier } from "./i18n_detail/supplier";
import { footer } from "./i18n_detail/footer";
import { navbar } from "./i18n_detail/navbar";
import { landing } from "./i18n_detail/landingpage";
import { dashboard } from "./i18n_detail/dashboard";
// 翻译资源文件 (假数据示例)
const resources = {
  en: {
    translation: {
      // Navbar 文本
      navbar: navbar.en.navbar,
      landing: landing.en.landing,
      // footer
      footer: footer.en.footer,
      // dashboard
      dashboard: dashboard.en.dashboard,
      supplier: supplier.en.supplier,
    },
  },
  zh: {
    translation: {
      navbar: navbar.zh.navbar,
      landing: landing.zh.landing,
      // footer
      footer: footer.zh.footer,
      // dashboard
      dashboard: dashboard.zh.dashboard,
      supplier: supplier.zh.supplier,
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
