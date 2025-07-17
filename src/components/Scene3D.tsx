
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente para renderizar ícones SVG como texturas
function SocialIcon({ position, icon, color }: { position: [number, number, number], icon: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[0.8, 0.8]} />
      <meshStandardMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

function GoogleIcon({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial color="#4285F4" />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function FacebookIcon({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = Math.sin(time * 0.6) * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
      <meshStandardMaterial color="#1877F2" />
    </mesh>
  );
}

function InstagramIcon({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.z = time * 0.3;
      meshRef.current.position.z = position[2] + Math.sin(time * 1.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial 
        color="#E4405F"
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

function TikTokIcon({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.8;
      meshRef.current.position.x = position[0] + Math.sin(time * 0.7) * 0.4;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <tetrahedronGeometry args={[0.6]} />
      <meshStandardMaterial 
        color="#000000"
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

function FloatingTechElement({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.6 + position[0]) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[0.3]} />
      <meshStandardMaterial 
        color="hsl(var(--primary))"
        metalness={0.8}
        roughness={0.2}
        emissive="hsl(var(--primary))"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8}
          castShadow
        />
        <pointLight 
          position={[-5, -5, 2]} 
          intensity={0.4} 
          color="hsl(var(--primary))"
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="hsl(var(--accent))"
        />
        
        {/* Ícones das redes sociais */}
        <GoogleIcon position={[-2.5, 1, 0]} />
        <FacebookIcon position={[2.5, -1, -1]} />
        <InstagramIcon position={[-1.5, -2, 1]} />
        <TikTokIcon position={[2, 1.5, 0.5]} />
        
        {/* Elementos tecnológicos flutuantes */}
        <FloatingTechElement position={[0, 0, -2]} />
        <FloatingTechElement position={[-3, 0.5, 1]} />
        <FloatingTechElement position={[3, -0.5, -0.5]} />
        <FloatingTechElement position={[0, 2.5, 1]} />
        <FloatingTechElement position={[1.5, -1.5, 2]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
