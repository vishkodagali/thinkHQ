'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Model() {
  const gltf = useGLTF('/assets/scene.gltf');

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (material) {
          material.transparent = false;
          material.opacity = 1;
          material.depthWrite = true;
          material.side = THREE.FrontSide;
        }
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} scale={0.6} />;
}
useGLTF.preload('/assets/scene.gltf');

function CameraRig() {
  const { camera } = useThree();
  const targetPosition = new THREE.Vector3(300, 300, 300);
  const [start] = useState(() => new THREE.Vector3(0, 0, 0));
  const progress = useRef(0);

  useFrame((_, delta) => {
    if (progress.current < 1) {
      progress.current += delta * 0.5;
      camera.position.lerpVectors(start, targetPosition, progress.current);
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

export default function CreativityBlock() {
  return (
    <section className="relative w-full flex justify-center items-center overflow-hidden -mb-24 z-10">
      {/* Maintain aspect ratio & responsiveness */}
      <div className="w-full max-w-[82.75rem] aspect-[1324/665]">
        <Canvas
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, #cfe9ff 0%, #a8d2f2 100%)',
          }}
          camera={{ position: [0, 40, 160], fov: 45 }}
          shadows
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <hemisphereLight color="#e6f0ff" groundColor="#cccccc" intensity={0.9} />
            <directionalLight position={[500, 500, 500]} intensity={1.2} />
            <directionalLight position={[-500, 200, -300]} intensity={0.8} />
            <Model />
            <CameraRig />
            <OrbitControls enableZoom zoomSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
