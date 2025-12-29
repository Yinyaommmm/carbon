import type { ComplianceLevel } from "./badge";

export const MOCK_SUPPLIERS: {
  id: string;
  name: string;
  industry: string;
  country: string;
  compliance: ComplianceLevel;
  carbon: string;
}[] = [
  {
    id: "S001",
    name: "GreenTex Solutions",
    industry: "Textile",
    country: "China",
    compliance: "High",
    carbon: "1,200",
  },
  {
    id: "S002",
    name: "EcoDrive Auto Parts",
    industry: "Auto",
    country: "Germany",
    compliance: "High",
    carbon: "3,450",
  },
  {
    id: "S003",
    name: "Silicon Cycle Inc.",
    industry: "Electronics",
    country: "Vietnam",
    compliance: "Medium",
    carbon: "890",
  },
  {
    id: "S004",
    name: "Nordic Fiber Co.",
    industry: "Textile",
    country: "Sweden",
    compliance: "High",
    carbon: "560",
  },
  {
    id: "S005",
    name: "Global Alloy Works",
    industry: "Auto",
    country: "India",
    compliance: "Low",
    carbon: "5,600",
  },
  {
    id: "S006",
    name: "Zenith Electronics",
    industry: "Electronics",
    country: "Japan",
    compliance: "High",
    carbon: "1,100",
  },
  {
    id: "S007",
    name: "Silk Route Textiles",
    industry: "Textile",
    country: "India",
    compliance: "Medium",
    carbon: "2,100",
  },
  {
    id: "S008",
    name: "Bav Bavarian Precision",
    industry: "Auto",
    country: "Germany",
    compliance: "High",
    carbon: "2,800",
  },
  {
    id: "S009",
    name: "Pacific Tech Components",
    industry: "Electronics",
    country: "USA",
    compliance: "Medium",
    carbon: "1,500",
  },
  {
    id: "S010",
    name: "Atlas Heavy Industry",
    industry: "Auto",
    country: "China",
    compliance: "Low",
    carbon: "8,900",
  },
];
