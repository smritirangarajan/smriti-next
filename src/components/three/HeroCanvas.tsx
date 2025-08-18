"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshWobbleMaterial, useTexture } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Blob() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshWobbleMaterial color="#D9B7F5" speed={1.5} factor={0.9} />
      </mesh>
    </Float>
  );
}

function PicturePlane({ url }: { url: string }) {
  const tex = useTexture(url);
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2.4, 2.4]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  );
}

export default function HeroCanvas() {
  const [showReal, setShowReal] = useState(true);
  return (
    <div className="h-[360px] w-full rounded-3xl bg-lavender-200">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          {showReal ? <PicturePlane url="/assets/hero/front-image-hover.png" /> : <Blob />}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}


