import { SalesData } from "@/types";

// Mock sales data based on Kaggle e-commerce datasets
export const salesData: SalesData[] = [
  { month: 'Jan', 2022: 15000, 2023: 18000, 2024: 22000, category: 'Electronics' },
  { month: 'Feb', 2022: 16000, 2023: 19000, 2024: 23000, category: 'Electronics' },
  { month: 'Mar', 2022: 17000, 2023: 21000, 2024: 25000, category: 'Home & Kitchen' },
  { month: 'Apr', 2022: 18000, 2023: 22000, 2024: 28000, category: 'Home & Kitchen' },
  { month: 'May', 2022: 20000, 2023: 24000, 2024: 30000, category: 'Fashion' },
  { month: 'Jun', 2022: 22000, 2023: 26000, 2024: 32000, category: 'Fashion' },
  { month: 'Jul', 2022: 21000, 2023: 25000, 2024: 31000, category: 'Sports' },
  { month: 'Aug', 2022: 23000, 2023: 27000, 2024: 33000, category: 'Sports' },
  { month: 'Sep', 2022: 24000, 2023: 28000, 2024: 34000, category: 'Books' },
  { month: 'Oct', 2022: 26000, 2023: 30000, 2024: 36000, category: 'Books' },
  { month: 'Nov', 2022: 30000, 2023: 35000, 2024: 40000, category: 'Electronics' },
  { month: 'Dec', 2022: 35000, 2023: 40000, 2024: 45000, category: 'Electronics' },
];

export const chartConfig: { [key: string]: { color: string; name: string } } = {
  2022: { color: '#8884d8', name: '2022 Sales' },
  2023: { color: '#82ca9d', name: '2023 Sales' },
  2024: { color: '#ffc658', name: '2024 Sales' },
};