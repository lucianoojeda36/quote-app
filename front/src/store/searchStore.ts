import { create } from 'zustand';

interface SearchStore {
  queryId: string | null;
  setQueryId: (id: string) => void;
  reset: () => void;
}

interface IQuoteStore {
  from: string;
  to: string;
  amount: number;
  rate: number;
  convertedAmount: number;
  timestamp: string;
  expiresAt: string;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
  setAmount: (amount: number) => void;
  setRate: (rate: number) => void;
  setConvertedAmount: (convertedAmount: number) => void;
  setTimestamp: (timestamp: string) => void;
  setExpiresAt: (expiresAt: string) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  queryId: null,
  setQueryId: (id) => set({ queryId: id }),

  reset: () =>
    set({
      queryId: null,
    }),
}));

export const useQuoteStore = create<IQuoteStore>((set) => ({
  from: '',
  to: '',
  amount: 0,
  rate: 0,
  convertedAmount: 0,
  timestamp: '',
  expiresAt: '',
  setFrom: (from) => set({ from }),
  setTo: (to) => set({ to }),
  setAmount: (amount) => set({ amount }),
  setRate: (rate) => set({ rate }),
  setConvertedAmount: (convertedAmount) => set({ convertedAmount }),
  setTimestamp: (timestamp) => set({ timestamp }),
  setExpiresAt: (expiresAt) => set({ expiresAt }),

  reset: () =>
    set({
      from: '',
      to: '',
      amount: 0,
      rate: 0,
      convertedAmount: 0,
      timestamp: '',
      expiresAt: '',
    }),
}));
