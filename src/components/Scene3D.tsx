import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingElements() {
  const meshRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.z = time * 0.5;
    }
  });

  return (
    <group>
      {/* Central Box */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>

      {/* Floating Spheres */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[0.5]} position={[-3, 1, -1]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.3]} position={[3, -1, 1]}>
          <meshStandardMaterial 
            color="#10b981" 
            metalness={0.7} 
            roughness={0.3}
            emissive="#059669"
            emissiveIntensity={0.15}
          />
        </Sphere>
      </Float>

      {/* Rotating Torus */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.5}>
        <Torus ref={torusRef} args={[1, 0.3, 16, 32]} position={[2, 2, -2]}>
          <meshStandardMaterial 
            color="#f59e0b" 
            metalness={0.6} 
            roughness={0.4}
            emissive="#d97706"
            emissiveIntensity={0.1}
          />
        </Torus>
      </Float>

      {/* Additional smaller elements */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <Box args={[0.4, 0.4, 0.4]} position={[-2, -2, 2]}>
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#dc2626"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
          castShadow
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color="#3b82f6"
        />
        <pointLight 
          position={[10, -10, 5]} 
          intensity={0.3} 
          color="#8b5cf6"
        />
        
        <FloatingElements />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}