
export interface RevenuePhase {
  name: string;
  period: string;
  licence: number;
  services: number;
  total: number;
  purpose: string;
  description: string;
}

export interface UnitEconomic {
  label: string;
  revenue: number;
  operatingCost: number;
  margin: number;
}

export interface GTMStep {
  date: string;
  title: string;
  points: string[];
  goal: string;
}

export interface BusinessData {
  primaryCustomers: string[];
  secondaryCustomers: string[];
  offerings: {
    title: string;
    items: string[];
    model: string;
  }[];
  revenuePhases: RevenuePhase[];
  gtmTimeline: GTMStep[];
  competitiveAdvantages: {
    category: string;
    points: string[];
  }[];
}
