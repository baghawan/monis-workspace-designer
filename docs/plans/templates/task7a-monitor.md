# src/components/Monitor.tsx

```tsx
import { Product } from '@/data/products';
import { RoundedBox } from '@react-three/drei';

interface MonitorProps {
  product: Product;
}

export function Monitor({ product }: MonitorProps) {
  const { width, height, depth } = product.dimensions;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Screen */}
      <RoundedBox
        args={[width, height, depth]}
        radius={0.01}
        position={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.5} />
      </RoundedBox>
      
      {/* Stand neck */}
      <mesh position={[0, -height / 2 - 0.1, 0]} castShadow>
        <boxGeometry args={[0.05, 0.2, 0.05]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Stand base */}
      <mesh position={[0, -height / 2 - 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
```
