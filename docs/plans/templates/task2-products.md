```typescript
export interface Product {
  id: string;
  name: string;
  category: 'desk' | 'chair' | 'monitor' | 'lamp' | 'plant' | 'accessory';
  price: number;
  color: string;
  dimensions: { width: number; height: number; depth: number };
}

export const products: Product[] = [
  // Desks
  {
    id: 'desk-standing',
    name: 'Standing Desk',
    category: 'desk',
    price: 150,
    color: '#8B4513',
    dimensions: { width: 1.6, height: 0.75, depth: 0.8 },
  },
  {
    id: 'desk-classic',
    name: 'Classic Desk',
    category: 'desk',
    price: 100,
    color: '#D2691E',
    dimensions: { width: 1.4, height: 0.75, depth: 0.7 },
  },
  // Chairs
  {
    id: 'chair-ergonomic',
    name: 'Ergonomic Chair',
    category: 'chair',
    price: 80,
    color: '#1e293b',
    dimensions: { width: 0.6, height: 1.2, depth: 0.6 },
  },
  {
    id: 'chair-simple',
    name: 'Simple Chair',
    category: 'chair',
    price: 50,
    color: '#64748b',
    dimensions: { width: 0.5, height: 0.9, depth: 0.5 },
  },
  // Monitors
  {
    id: 'monitor-27',
    name: '27" Monitor',
    category: 'monitor',
    price: 60,
    color: '#0f172a',
    dimensions: { width: 0.6, height: 0.4, depth: 0.05 },
  },
  {
    id: 'monitor-32',
    name: '32" Ultrawide',
    category: 'monitor',
    price: 90,
    color: '#0f172a',
    dimensions: { width: 0.8, height: 0.35, depth: 0.05 },
  },
  // Lamps
  {
    id: 'lamp-desk',
    name: 'Desk Lamp',
    category: 'lamp',
    price: 25,
    color: '#f59e0b',
    dimensions: { width: 0.15, height: 0.4, depth: 0.15 },
  },
  {
    id: 'lamp-floor',
    name: 'Floor Lamp',
    category: 'lamp',
    price: 35,
    color: '#f59e0b',
    dimensions: { width: 0.3, height: 1.5, depth: 0.3 },
  },
  // Plants
  {
    id: 'plant-small',
    name: 'Small Plant',
    category: 'plant',
    price: 15,
    color: '#22c55e',
    dimensions: { width: 0.2, height: 0.3, depth: 0.2 },
  },
  {
    id: 'plant-large',
    name: 'Large Plant',
    category: 'plant',
    price: 25,
    color: '#16a34a',
    dimensions: { width: 0.35, height: 0.8, depth: 0.35 },
  },
];

export const categories = [
  { id: 'desk', name: 'Desks', icon: 'Desk' },
  { id: 'chair', name: 'Chairs', icon: 'Armchair' },
  { id: 'monitor', name: 'Monitors', icon: 'Monitor' },
  { id: 'lamp', name: 'Lamps', icon: 'Lamp' },
  { id: 'plant', name: 'Plants', icon: 'Flower2' },
] as const;
```
