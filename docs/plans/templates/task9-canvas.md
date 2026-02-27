# src/components/WorkspaceCanvas.tsx

```tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function WorkspaceCanvas() {
  return (
    <div className="flex-1 h-full bg-gradient-to-b from-gray-100 to-gray-200">
      <Canvas
        shadows
        camera={{ position: [3, 2, 3], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
```
