# src/components/Plant.tsx

```tsx
import { Product } from '@/data/products';
import { Sphere } from '@react-three/drei';

interface PlantProps {
  product: Product;
}

export function Plant({ product }: PlantProps) {
  const isLarge = product.id === 'plant-large';
  
  return (
    <group position={[0, 0, 0]}>
      {/* Pot */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.16, 32]} />
        <meshStandardMaterial color="#b45309" roughness={0.8} />
      </mesh>
      
      {/* Soil */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.02, 32]} />
        <meshStandardMaterial color="#3d2b1f" roughness={1} />
      </mesh>
      
      {/* Plant foliage - simplified as spheres */}
      {isLarge ? (
        <>
          <Sphere args={[0.12, 16, 16]} position={[0, 0.35, 0]} castShadow>
            <meshStandardMaterial color={product.color} roughness={0.8} />
          </Sphere>
          <Sphere args={[0.1, 16, 16]} position={[0.08, 0.28, 0.05]} castShadow>
            <meshStandardMaterial color={product.color} roughness={0.8} />
          </Sphere>
          <Sphere args={[0.08, 16, 16]} position={[-0.06, 0.25, -0.04]} castShadow>
            <meshStandardMaterial color={product.color} roughness={0.8} />
          </Sphere>
        </>
      ) : (
        <Sphere args={[0.08, 16, 16]} position={[0, 0.28, 0]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.8} />
        </Sphere>
      )}
    </group>
  );
}
```
