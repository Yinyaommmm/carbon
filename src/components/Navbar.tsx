// components/Navbar.tsx

import React from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./SwitchLangBtn";
// --- 1. 配置数据结构 ---

type NavItem = {
  name: string;
  path: string;
};

// 主导航项
const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Suppliers", path: "/suppliers" },
];

// 下拉菜单项
const dropdownItems = {
  name: "Value & Enablement",
  subItems: [
    // { name: "Compliance Hub", path: "/compliance" },
    { name: "Incentive Engine", path: "/incentives" },
    { name: "Green Finance", path: "/finance" },
  ],
};

// --- 2. 样式定义函数 ---

// Tailwind 类：用于 DropdownMenu 内容的通用样式
const dropdownContentClasses =
  "bg-white rounded-md p-1 shadow-lg z-100 min-w-[160px] border border-gray-100";

// Dropdown 内部链接的样式
const dropdownItemClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm  px-3 py-2 rounded-sm block w-full text-center transition-colors focus:outline-none 
   ${
     isActive
       ? "text-green-600 bg-green-50/50" // 激活时：字体变绿，背景略微突出
       : "text-gray-700 hover:bg-green-50" // 非激活时：悬停时变色
   }`;

// NavLink 核心动画样式 (外部链接)
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  // 基础样式：relative group 启用伪元素，border-b-2 border-transparent 预留空间
  `relative group px-4 py-2 text-md font-medium transition-colors border-b-2 border-transparent inline-flex items-center 
   
   ${
     // 文本颜色
     isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
   }
   
   // 伪元素基类 (线的外观和初始动画状态)
   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300
   
   // 激活和悬停状态
   ${
     isActive
       ? "after:scale-x-100" // 激活时: 伪元素强制 100% 宽度 (显示)
       : "group-hover:after:scale-x-100" // 非激活时: 悬停时放大
   }`;

// --- 3. DropdownLink 包装器组件 (解决冲突的关键) ---

interface DropdownLinkProps extends NavItem {
  dropdownItemClass: ({ isActive }: { isActive: boolean }) => string;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({
  path,
  name,
  dropdownItemClass,
}) => {
  // 1. 手动计算 NavLink 的 isActive 状态
  const match = useMatch({ path, end: true });
  const isActive = !!match;

  // 2. 执行 className 函数，得到一个纯字符串
  const finalClassName = dropdownItemClass({ isActive });

  return (
    // 确保 DropdownMenu.Item asChild 传递必要的无障碍属性
    <DropdownMenu.Item asChild>
      {/* 3. 传递给 NavLink 的是纯字符串，避免了 Radix Prop 冲突 */}
      <NavLink to={path} className={finalClassName}>
        {name}
      </NavLink>
    </DropdownMenu.Item>
  );
};

// --- 4. Navbar 主组件 ---

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    // 获取当前语言 ('zh' 或 'en')
    const currentLang = i18n.language;
    // 确定要切换到的新语言
    const newLang = currentLang === "zh" ? "en" : "zh";
    // 使用 i18n.changeLanguage 方法切换，这将触发组件重新渲染
    i18n.changeLanguage(newLang);
  };

  /**
   * Dropdown 触发器的样式 (Value & Enablement 按钮)。
   */
  const dropdownTriggerClass = (isOpen: boolean) => {
    // 检查是否有任何子路由当前处于激活状态
    const isChildRouteActive = dropdownItems.subItems.some((item) =>
      location.pathname.startsWith(item.path)
    );

    // 触发器基础样式
    const baseClass = `relative group px-4 py-2 text-md font-medium transition-colors border-b-2 border-transparent flex items-center focus:outline-none 
                       text-gray-700 hover:text-green-600  cursor-pointer
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300`;

    // 根据打开状态或子路由激活状态来应用下划线和文本颜色
    if (isOpen || isChildRouteActive) {
      // 当下拉菜单打开或子路由激活时，强制激活样式
      return `${baseClass} text-green-600 after:scale-x-100`;
    }

    return `${baseClass} group-hover:after:scale-x-100`; // 仅在悬停时动画
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white shadow-md backdrop-blur-md bg-opacity-95">
      {/* 外部 div 铺满宽度 */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* 内部 div 居中内容 */}
        <div className="flex justify-between items-center h-16 max-w-full">
          {/* 左侧：品牌 LOGO/名称 */}
          <NavLink
            to="/"
            className="block shrink-0 max-w-42 text-xl font-bold  text-gray-800 hover:text-green-600 transition-colors"
          >
            <img
              src="/logo.jpg"
              alt="ABC ESG Link Logo"
              className=" object-contain"
            />
          </NavLink>

          {/* 中间：主导航链接 */}
          <div className="hidden md:flex space-x-1">
            {/* 1. 普通导航项 (直接使用 navLinkClass 函数) */}
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {t("navbar." + item.name)}
              </NavLink>
            ))}

            {/* 2. 下拉菜单项 (Value & Enablement) */}
            <DropdownMenu.Root modal={false}>
              {/* 使用 DropdownMenu.Trigger 渲染 Button */}
              <DropdownMenu.Trigger asChild>
                {/* 使用 data-state 监听打开状态，并应用到 trigger 的样式 */}
                <button
                  // 注意: 我们通过外部的 DropdownMenu.Root 来判断 isOpen 状态。
                  // 这里使用 data-state 属性来确保样式在打开时应用。
                  // 这是一个常见的 Radix 模式。
                  className={dropdownTriggerClass(false)} // isOpen 默认传入 false，让内部逻辑根据 data-state 判断
                  // data-state={dropdownItems.subItems.some(item => location.pathname.startsWith(item.path)) ? 'open' : undefined}
                  aria-label={t("navbar." + dropdownItems.name)}
                >
                  {t("navbar." + dropdownItems.name)}{" "}
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform " />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className={dropdownContentClasses}
                  sideOffset={5}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {dropdownItems.subItems.map((subItem) => (
                    // 关键: 使用 DropdownLink 包装器
                    <DropdownLink
                      key={subItem.path}
                      path={subItem.path}
                      name={t("navbar." + subItem.name)}
                      dropdownItemClass={dropdownItemClass} // 传入样式函数
                    />
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* 3. Settings 独立链接 */}
            <NavLink to="/settings" className={navLinkClass}>
              {t("navbar.nav_settings")}
            </NavLink>
          </div>

          {/* 右侧：操作/语言切换 */}
          <LanguageToggle toggleLanguage={toggleLanguage}></LanguageToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
