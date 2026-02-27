# src/components/Lamp.tsx

```tsx
import { Product } from '@/data/products';

interface LampProps {
  product: Product;
}

export function Lamp({ product }: LampProps) {
  const isDesk = product.id === 'lamp-desk';
  const height = product.dimensions.height;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <mesh position={[0, 0.02, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.04, 32]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Pole */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, height - 0.1, 16]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Lamp head */}
      <mesh position={[0, height - 0.08, 0]} castShadow>
        <coneGeometry args={[0.08, 0.1, 32, 1, true]} />
        <meshStandardMaterial color={product.color} emissive={product.color} emissiveIntensity={0.3} side={2} />
      </mesh>
      
      {/* Light */}
      <pointLight position={[0, height - 0.1, 0]} intensity={0.5} color="#fff5e6" />
    </group>
  );
}
```
