import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MOCK_SUPPLIERS } from "./mockdata";
import { ChevronDown, Factory, Globe, Search } from "lucide-react";
import { CustomSelect } from "./select";
import { ComplianceBadge } from "./badge";
import { useNavigate } from "react-router-dom";

export default function Suppliers() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filterCountry, setFilterCountry] = useState("All");
  const [filterCompliance, setFilterCompliance] = useState("All");
  const convertedData = Object.values(MOCK_SUPPLIERS);
  const industries = ["All", ...new Set(convertedData.map((s) => s.industry))];
  const countries = ["All", ...new Set(convertedData.map((s) => s.country))];
  const complianceLevels = ["All", "High", "Medium", "Low"];

  const filteredSuppliers = useMemo(() => {
    return convertedData.filter((s) => {
      const matchSearch = s.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchIndustry =
        filterIndustry === "All" || s.industry === filterIndustry;
      const matchCountry =
        filterCountry === "All" || s.country === filterCountry;
      const matchCompliance =
        filterCompliance === "All" || s.compliance === filterCompliance;
      return matchSearch && matchIndustry && matchCountry && matchCompliance;
    });
  }, [
    convertedData,
    searchTerm,
    filterIndustry,
    filterCountry,
    filterCompliance,
  ]);
  const navigate = useNavigate();
  const handleRowClick = (id: string) => {
    navigate("/suppliers/" + id);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            {t("supplier.page_title")}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {t("supplier.page_subtitle")}
          </p>
        </div>

        {/* 筛选区域 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center gap-6 relative z-[90]">
          <div className="relative flex-1 min-w-[280px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder={t("supplier.search_placeholder")}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <CustomSelect
              label={t("supplier.filters.industry")}
              options={industries}
              value={filterIndustry}
              onChange={setFilterIndustry}
              placeholder={t("supplier.filters.all_industries")}
              t={t}
              type="industries"
            />
            <CustomSelect
              label={t("supplier.filters.country")}
              options={countries}
              value={filterCountry}
              onChange={setFilterCountry}
              placeholder={t("supplier.filters.all_countries")}
              t={t}
              type="countries"
            />
            <CustomSelect
              label={t("supplier.filters.compliance")}
              options={complianceLevels}
              value={filterCompliance}
              onChange={setFilterCompliance}
              placeholder={t("supplier.filters.all_compliance")}
              t={t}
              type="compliance"
            />
          </div>
        </div>

        {/* 表格区域 */}
        <div className="bg-white rounded-4xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("supplier.table.th_id")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("supplier.table.th_name")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("supplier.table.th_industry")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("supplier.table.th_country")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                    {t("supplier.table.th_carbon")}
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t("supplier.table.th_compliance")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredSuppliers.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => handleRowClick(s.id)}
                    className="group hover:bg-emerald-50/60 transition-all cursor-pointer relative"
                  >
                    <td className="px-8 py-5 text-xs font-mono font-black text-slate-300 group-hover:text-emerald-600">
                      #{s.id}
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-slate-700">
                      <div className="flex items-center gap-2">
                        {s.name}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-md uppercase tracking-tighter font-black">
                          Open
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs font-bold text-slate-500">
                      <div className="flex items-center gap-2">
                        <Factory size={14} className="text-slate-200" />
                        {t(`supplier.industries.${s.industry.toLowerCase()}`)}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs font-bold text-slate-500">
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-slate-200" />
                        {t(`supplier.countries.${s.country.toLowerCase()}`)}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center text-sm font-black text-slate-800 tracking-tighter">
                      {s.metrics.scope1 + s.metrics.scope2 + s.metrics.scope3}
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-between">
                        <ComplianceBadge level={s.compliance} t={t} />
                        <ChevronDown
                          size={14}
                          className="text-slate-200 -rotate-90 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredSuppliers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-32 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <Search size={40} className="text-slate-100" />
                        <p className="text-sm font-bold text-slate-400 uppercase">
                          {t("supplier.table.no_results")}
                        </p>
                        <button
                          onClick={() => {
                            setSearchTerm("");
                            setFilterIndustry("All");
                            setFilterCountry("All");
                            setFilterCompliance("All");
                          }}
                          className="px-6 py-2 bg-emerald-500 text-white text-xs font-black rounded-full shadow-lg shadow-emerald-500/20"
                        >
                          {t("supplier.table.reset_filter")}
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/30">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {t("supplier.table.total_count", {
                count: filteredSuppliers.length,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
