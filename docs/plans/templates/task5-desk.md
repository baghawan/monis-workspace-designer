# src/components/Desk.tsx

```tsx
import { Product } from '@/data/products';
import { RoundedBox } from '@react-three/drei';

interface DeskProps {
  product: Product;
}

export function Desk({ product }: DeskProps) {
  const { width, height, depth } = product.dimensions;
  
  return (
    <group position={[0, height / 2, 0]}>
      {/* Desktop surface */}
      <RoundedBox
        args={[width, 0.05, depth]}
        radius={0.02}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={product.color} roughness={0.5} />
      </RoundedBox>
      
      {/* Left leg */}
      <RoundedBox
        args={[0.05, height - 0.05, 0.05]}
        radius={0.01}
        position={[-width / 2 + 0.05, -(height / 2) + 0.025, -depth / 2 + 0.05]}
        castShadow
      >
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      
      {/* Right leg */}
      <RoundedBox
        args={[0.05, height - 0.05, 0.05]}
        radius={0.01}
        position={[width / 2 - 0.05, -(height / 2) + 0.025, -depth / 2 + 0.05]}
        castShadow
      >
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  );
}
```
