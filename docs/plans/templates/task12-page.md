# src/app/page.tsx

```tsx
import { Header } from '@/components/Header';
import { WorkspaceCanvas } from '@/components/WorkspaceCanvas';
import { Sidebar } from '@/components/Sidebar';
import { CheckoutModal } from '@/components/CheckoutModal';

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <WorkspaceCanvas />
        <Sidebar />
      </div>
      <CheckoutModal />
    </main>
  );
}
```
