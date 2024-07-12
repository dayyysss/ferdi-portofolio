import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Periksa posisi di model GLTF
  earth.scene.traverse((child) => {
    if (child.isMesh) {
      const positions = child.geometry.attributes.position.array;
      let hasNaN = false;
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          console.error(`NaN value found in Earth model at index ${i}`);
          hasNaN = true;
          positions[i] = 0; // Inisialisasi nilai default
        }
      }
      if (hasNaN) {
        child.geometry.attributes.position.needsUpdate = true;
        console.error('NaN values were found in Earth model and replaced with 0.');
      }
    }
  });

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;