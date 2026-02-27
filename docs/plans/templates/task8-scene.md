# src/components/Scene.tsx

```tsx
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { Desk } from './Desk';
import { Chair } from './Chair';
import { Monitor } from './Monitor';
import { Lamp } from './Lamp';
import { Plant } from './Plant';

export function Scene() {
  const { selectedDesk, selectedChair, accessories } = useWorkspaceStore();
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      <OrbitControls 
        enablePan={false} 
        minPolarAngle={Math.PI / 6} 
        maxPolarAngle={Math.PI / 2.2}
        minDistance={2}
        maxDistance={8}
      />
      
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.3} />
      
      <Environment preset="city" />
      
      <group ref={groupRef}>
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#e8e4e0" roughness={0.9} />
        </mesh>
        
        {/* Desk */}
        {selectedDesk && (
          <Desk key={selectedDesk.id} product={selectedDesk} />
        )}
        
        {/* Chair */}
        {selectedChair && (
          <Chair 
            key={selectedChair.id} 
            product={selectedChair}
            position={[0, 0, selectedDesk ? selectedDesk.dimensions.depth / 2 + 0.3 : 0.5]} 
          />
        )}
        
        {/* Accessories */}
        {accessories.map((product, index) => {
          const xOffset = ((index % 3) - 1) * 0.4;
          const zOffset = Math.floor(index / 3) * 0.3 - 0.3;
          
          return (
            <group key={product.id} position={[xOffset, 0.75, zOffset - 0.2]}>
              {product.category === 'monitor' && <Monitor product={product} />}
              {product.category === 'lamp' && <Lamp product={product} />}
              {product.category === 'plant' && <Plant product={product} />}
            </group>
          );
        })}
      </group>
      
      <ContactShadows 
        position={[0, 0.01, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
      />
    </>
  );
}
```
