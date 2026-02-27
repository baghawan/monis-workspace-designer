# src/components/Sidebar.tsx

```tsx
'use client';

import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import { useWorkspaceStore } from '@/store/workspaceStore';

export function Sidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>('desk');
  const { 
    selectedDesk, 
    selectedChair, 
    accessories, 
    setSelectedDesk, 
    setSelectedChair, 
    addAccessory,
    removeAccessory,
    setCheckoutOpen,
    getTotalPrice
  } = useWorkspaceStore();

  const selectedProducts = [
    selectedDesk,
    selectedChair,
    ...accessories
  ].filter(Boolean) as Product[];

  const categoryProducts = products.filter(p => p.category === activeCategory);

  const handleSelect = (product: Product) => {
    if (product.category === 'desk') {
      setSelectedDesk(selectedDesk?.id === product.id ? null : product);
    } else if (product.category === 'chair') {
      setSelectedChair(selectedChair?.id === product.id ? null : product);
    } else {
      const exists = accessories.find(a => a.id === product.id);
      if (exists) {
        removeAccessory(product.id);
      } else {
        addAccessory(product);
      }
    }
  };

  const isSelected = (product: Product) => {
    if (product.category === 'desk') return selectedDesk?.id === product.id;
    if (product.category === 'chair') return selectedChair?.id === product.id;
    return accessories.some(a => a.id === product.id);
  };

  return (
    <div className="w-80 h-full bg-white border-l border-gray-200 flex flex-col">
      {/* Categories */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          {categories.find(c => c.id === activeCategory)?.name || 'Select'}
        </h3>
        <div className="space-y-2">
          {categoryProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product)}
              className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-150 active:scale-[0.98] ${
                isSelected(product)
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">${product.price}/mo</p>
                </div>
                <div 
                  className="w-6 h-6 rounded-full border-2"
                  style={{ backgroundColor: isSelected(product) ? product.color : 'transparent', borderColor: product.color }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="font-medium text-gray-900 mb-3">Your Setup</h3>
        {selectedProducts.length === 0 ? (
          <p className="text-sm text-gray-500">No items selected yet</p>
        ) : (
          <div className="space-y-2 mb-4">
            {selectedProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{product.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900">${product.price}</span>
                  {(product.category === 'monitor' || product.category === 'lamp' || product.category === 'plant') && (
                    <button 
                      onClick={() => removeAccessory(product.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-200">
          <span className="font-medium text-gray-900">Total</span>
          <span className="text-xl font-bold text-primary">${getTotalPrice().toFixed(0)}/mo</span>
        </div>
        
        <button
          onClick={() => setCheckoutOpen(true)}
          disabled={selectedProducts.length === 0}
          className="w-full py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-5 h-5" />
          Rent Now
        </button>
      </div>
    </div>
  );
}
```
