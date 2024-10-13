interface SaoKe {
  id: number;
  date: string;
  transactionCode: string;
  description: string;
}

interface SaoKeRequest {
  currentPage: number;
  totalItem: number;
  totalPage: number;
  tutorials: SaoKe[];
}

export type { SaoKe, SaoKeRequest };
