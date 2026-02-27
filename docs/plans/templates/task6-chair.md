# src/components/Chair.tsx

```tsx
import { Product } from '@/data/products';
import { RoundedBox } from '@react-three/drei';

interface ChairProps {
  product: Product;
  position?: [number, number, number];
}

export function Chair({ product, position = [0, 0, 0] }: ChairProps) {
  const { width, height, depth } = product.dimensions;
  const isErgonomic = product.id === 'chair-ergonomic';
  
  return (
    <group position={position}>
      {/* Seat */}
      <RoundedBox
        args={[width, 0.08, depth]}
        radius={0.02}
        position={[0, 0.45, 0]}
        castShadow
      >
        <meshStandardMaterial color={product.color} roughness={0.7} />
      </RoundedBox>
      
      {/* Backrest */}
      <RoundedBox
        args={[width, height - 0.5, 0.06]}
        radius={0.02}
        position={[0, 0.45 + (height - 0.5) / 2, -depth / 2 + 0.03]}
        castShadow
      >
        <meshStandardMaterial color={product.color} roughness={0.7} />
      </RoundedBox>
      
      {/* Armrests for ergonomic */}
      {isErgonomic && (
        <>
          <RoundedBox
            args={[0.05, 0.25, 0.05]}
            radius={0.01}
            position={[-width / 2 + 0.03, 0.55, 0]}
            castShadow
          >
            <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
          </RoundedBox>
          <RoundedBox
            args={[0.05, 0.25, 0.05]}
            radius={0.01}
            position={[width / 2 - 0.03, 0.55, 0]}
            castShadow
          >
            <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
          </RoundedBox>
        </>
      )}
      
      {/* Base */}
      <mesh position={[0, 0.225, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.45]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels base */}
      <group position={[0, 0.02, 0]}>
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <RoundedBox
            key={i}
            args={[0.03, 0.02, 0.08]}
            radius={0.01}
            position={[
              Math.sin((angle * Math.PI) / 180) * 0.15,
              0,
              Math.cos((angle * Math.PI) / 180) * 0.15,
            ]}
            rotation={[0, (angle * Math.PI) / 180, 0]}
            castShadow
          >
            <meshStandardMaterial color="#1e293b" />
          </RoundedBox>
        ))}
      </group>
    </group>
  );
}
```
