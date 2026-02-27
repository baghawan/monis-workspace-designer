# src/components/Header.tsx

```tsx
import { Store } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Store className="w-6 h-6 text-primary" />
        <span className="text-xl font-semibold text-gray-900">
          monis.rent
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">Workspace Designer</span>
      </div>
      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
        Start Renting
      </button>
    </header>
  );
}
```
