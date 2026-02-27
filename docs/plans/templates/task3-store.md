```typescript
import { create } from 'zustand';
import { Product } from '@/data/products';

interface WorkspaceState {
  selectedDesk: Product | null;
  selectedChair: Product | null;
  accessories: Product[];
  rentalDays: number;
  isCheckoutOpen: boolean;
  
  setSelectedDesk: (desk: Product | null) => void;
  setSelectedChair: (chair: Product | null) => void;
  addAccessory: (product: Product) => void;
  removeAccessory: (productId: string) => void;
  setRentalDays: (days: number) => void;
  setCheckoutOpen: (open: boolean) => void;
  getTotalPrice: () => number;
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  selectedDesk: null,
  selectedChair: null,
  accessories: [],
  rentalDays: 30,
  isCheckoutOpen: false,

  setSelectedDesk: (desk) => set({ selectedDesk: desk }),
  setSelectedChair: (chair) => set({ selectedChair: chair }),
  
  addAccessory: (product) => set((state) => ({
    accessories: [...state.accessories, product],
  })),
  
  removeAccessory: (productId) => set((state) => ({
    accessories: state.accessories.filter((a) => a.id !== productId),
  })),
  
  setRentalDays: (days) => set({ rentalDays: days }),
  setCheckoutOpen: (open) => set({ isCheckoutOpen: open }),
  
  getTotalPrice: () => {
    const state = get();
    let total = 0;
    if (state.selectedDesk) total += state.selectedDesk.price;
    if (state.selectedChair) total += state.selectedChair.price;
    state.accessories.forEach((a) => (total += a.price));
    return total * (state.rentalDays / 30);
  },
}));
```
