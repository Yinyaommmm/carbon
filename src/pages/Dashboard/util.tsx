import i18n from "../../i18n";

export const getLabels = (timeRange: string) => {
  const isEn = i18n.language.startsWith("en");

  if (timeRange === "30d") {
    const rawDays = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];
    return rawDays.map((d) => {
      if (!isEn) return `${d}日`;
      const s = ["th", "st", "nd", "rd"][
        d % 10 > 3 || Math.floor((d % 100) / 10) === 1 ? 0 : d % 10
      ];
      return `${d}${s}`;
    });
  }

  // 月份
  return isEn
    ? [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
    : [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
};
