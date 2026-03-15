"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function generateGlobePoints(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function generateGlobeLines(count: number, radius: number) {
  const lines: THREE.Vector3[][] = [];
  
  // Latitude lines
  for (let i = 0; i < 8; i++) {
    const lat = (Math.PI / 8) * i - Math.PI / 2;
    const points: THREE.Vector3[] = [];
    for (let j = 0; j <= 64; j++) {
      const lon = (Math.PI * 2 * j) / 64;
      points.push(
        new THREE.Vector3(
          radius * Math.cos(lat) * Math.cos(lon),
          radius * Math.sin(lat),
          radius * Math.cos(lat) * Math.sin(lon)
        )
      );
    }
    lines.push(points);
  }
  
  // Longitude lines
  for (let i = 0; i < 12; i++) {
    const lon = (Math.PI * 2 * i) / 12;
    const points: THREE.Vector3[] = [];
    for (let j = 0; j <= 32; j++) {
      const lat = (Math.PI * j) / 32 - Math.PI / 2;
      points.push(
        new THREE.Vector3(
          radius * Math.cos(lat) * Math.cos(lon),
          radius * Math.sin(lat),
          radius * Math.cos(lat) * Math.sin(lon)
        )
      );
    }
    lines.push(points);
  }
  
  return lines;
}

function GlobeWireframe() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  const lines = useMemo(() => generateGlobeLines(20, 2.5), []);
  const points = useMemo(() => generateGlobePoints(2000, 2.5), []);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto rotation
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
      
      // Mouse interaction - subtle tilt
      groupRef.current.rotation.x += (mouse.y * 0.1 - groupRef.current.rotation.x) * 0.01;
      groupRef.current.rotation.z += (mouse.x * 0.1 - groupRef.current.rotation.z) * 0.01;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Wireframe lines */}
      {lines.map((linePoints, index) => (
        <Line
          key={index}
          points={linePoints}
          color="#00f0ff"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}
      
      {/* Particle points on globe surface */}
      <Points positions={points}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });
  
  return (
    <Points ref={particlesRef} positions={particles}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function ThreeGlobe() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <GlobeWireframe />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
