
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        metalness={0.8} 
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      const time = state.clock.getElapsedTime();
      sphereRef.current.position.y = Math.sin(time + 1) * 0.3;
      sphereRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-2, 0, -1]}>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        metalness={0.9} 
        roughness={0.1}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      const time = state.clock.getElapsedTime();
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.y = Math.sin(time + 2) * 0.15;
    }
  });

  return (
    <mesh ref={torusRef} position={[2, 0, -1]}>
      <torusGeometry args={[0.8, 0.2, 16, 32]} />
      <meshStandardMaterial 
        color="#f59e0b" 
        metalness={0.6} 
        roughness={0.4}
      />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
        />
        <pointLight 
          position={[-5, -5, -5]} 
          intensity={0.5} 
          color="#3b82f6"
        />
        
        <FloatingBox />
        <FloatingSphere />
        <FloatingTorus />
        
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
