import { SalesData } from '@/types';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function filterSalesByThreshold(data: SalesData[], threshold: number): SalesData[] {
  return data.map((item) => {
    const filteredItem: SalesData = {
      month: item.month,
      2022: item[2022] >= threshold ? item[2022] : 0,
      2023: item[2023] >= threshold ? item[2023] : 0,
      2024: item[2024] >= threshold ? item[2024] : 0,
      category: item.category,
    };

    return filteredItem;
  });
}