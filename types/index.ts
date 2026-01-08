export interface SalesData {
  month: string;
  2022: number;
  2023: number;
  2024: number;
  category: string;
}

export interface ChartConfig {
  [key: string]: { color: string; name: string };
}

export type ChartType = 'bar' | 'line' | 'pie';