# src/components/CheckoutModal.tsx

```tsx
'use client';

import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { useWorkspaceStore } from '@/store/workspaceStore';

export function CheckoutModal() {
  const { 
    isCheckoutOpen, 
    setCheckoutOpen, 
    selectedDesk, 
    selectedChair, 
    accessories,
    rentalDays,
    setRentalDays,
    getTotalPrice
  } = useWorkspaceStore();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isCheckoutOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutOpen]);

  const allItems = [selectedDesk, selectedChair, ...accessories].filter(Boolean);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-200 ${
        isCheckoutOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={() => setCheckoutOpen(false)}
    >
      <div
        className={`bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transition-transform duration-200 ${
          isCheckoutOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Complete Your Rental</h2>
          <button
            onClick={() => setCheckoutOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Rental Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rental Duration
            </label>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <select
                value={rentalDays}
                onChange={(e) => setRentalDays(Number(e.target.value))}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days</option>
                <option value={180}>180 days</option>
                <option value={365}>365 days</option>
              </select>
            </div>
          </div>

          {/* Items Summary */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Items</h3>
            <div className="space-y-2">
              {allItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-900">{item.name}</span>
                  </div>
                  <span className="text-gray-600">${item.price}/mo</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Monthly Total</span>
              <span className="text-gray-900">${getTotalPrice() / (rentalDays / 30)}</span>
            </div>
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total for {rentalDays} days</span>
              <span className="text-primary">${getTotalPrice().toFixed(0)}</span>
            </div>
          </div>

          {/* Submit */}
          <button
            className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors active:scale-[0.98]"
            onClick={() => alert('Rental request submitted! We will contact you soon.')}
          >
            Submit Rental Request
          </button>

          <p className="text-xs text-center text-gray-500">
            By submitting, you agree to the terms of service. We'll contact you to finalize the rental.
          </p>
        </div>
      </div>
    </div>
  );
}
```
