import { ArrowRight, Database, Factory, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
export default function LandingSection2() {
  const { t } = useTranslation();
  const solutions = [
    {
      title: t("card1_title"),
      desc: t("card1_desc"),
      icon: <Factory className="text-emerald-500" size={24} />,
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: t("card2_title"),
      desc: t("card2_desc"),
      icon: <Database className="text-blue-500" size={24} />,
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: t("card3_title"),
      desc: t("card3_desc"),
      icon: <Globe className="text-indigo-500" size={24} />,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    },
  ];
  return (
    <section className="py-24 bg-slate-50/50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            {t("sec2_title")}
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            {t("sec2_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-4xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3
                  className={`${
                    i18n.language === "en" ? "text-xl" : "text-2xl"
                  } leading-12 font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors`}
                >
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-500 leading-relaxed mb-8 grow min-h-[6.8em]">
                {item.desc}
              </p>

              <div className="relative w-full aspect-2/1 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
