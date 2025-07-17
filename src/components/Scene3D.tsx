
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.x = Math.sin(time * 0.8) * 2;
      meshRef.current.position.y = Math.cos(time * 0.8) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -1]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = time * 0.7;
      meshRef.current.position.x = Math.cos(time * 0.5) * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, 0]}>
      <torusGeometry args={[0.8, 0.3, 16, 32]} />
      <meshStandardMaterial color="#f59e0b" />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ 
          position: [0, 0, 6], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color="#3b82f6"
        />
        
        <AnimatedBox />
        <AnimatedSphere />
        <AnimatedTorus />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
