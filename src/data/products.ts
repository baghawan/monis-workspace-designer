export type Category = 'desk' | 'chair' | 'monitor' | 'lamp' | 'plant' | 'accessory';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  color?: string;
  dimensions?: { width: number; height: number; depth: number };
}

export const products: Product[] = [
  {
    id: 'standing-desk',
    name: 'Standing Desk',
    category: 'desk',
    price: 150,
    color: '#8B4513',
    dimensions: { width: 1.2, height: 0.75, depth: 0.6 },
  },
  {
    id: 'classic-desk',
    name: 'Classic Desk',
    category: 'desk',
    price: 100,
    color: '#DEB887',
    dimensions: { width: 1.0, height: 0.75, depth: 0.5 },
  },
  {
    id: 'ergonomic-chair',
    name: 'Ergonomic Chair',
    category: 'chair',
    price: 80,
    color: '#1e293b',
  },
  {
    id: 'simple-chair',
    name: 'Simple Chair',
    category: 'chair',
    price: 50,
    color: '#64748b',
  },
  {
    id: 'monitor-27',
    name: '27" Monitor',
    category: 'monitor',
    price: 60,
    color: '#1e293b',
    dimensions: { width: 0.6, height: 0.4, depth: 0.05 },
  },
  {
    id: 'monitor-32-ultrawide',
    name: '32" Ultrawide',
    category: 'monitor',
    price: 90,
    color: '#1e293b',
    dimensions: { width: 0.8, height: 0.35, depth: 0.05 },
  },
  {
    id: 'desk-lamp',
    name: 'Desk Lamp',
    category: 'lamp',
    price: 25,
    color: '#f59e0b',
  },
  {
    id: 'floor-lamp',
    name: 'Floor Lamp',
    category: 'lamp',
    price: 35,
    color: '#f59e0b',
  },
  {
    id: 'small-plant',
    name: 'Small Plant',
    category: 'plant',
    price: 15,
    color: '#22c55e',
  },
  {
    id: 'large-plant',
    name: 'Large Plant',
    category: 'plant',
    price: 25,
    color: '#16a34a',
  },
];

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter((p) => p.category === category);
};
