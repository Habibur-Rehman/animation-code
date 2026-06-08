import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// const TorchModel = (props) => {
//   const ref = useRef();
//   const { scene } = useGLTF("/images/low_poly_torch.glb");

//   return (
//     <primitive
//       ref={ref}
//       object={scene}
//       scale={19}
//       // position={[0, 10, 0]}
//       position={[0, -1, 0]} // ✅ bring into view
//       rotation={[0, Math.PI, 0]}
//       {...props}
//     />
//   );
// };


const TorchModel = () => {
  const { scene } = useGLTF("/images/low_poly_torch.glb");
  const lightRef = useRef();

  useFrame(() => {
    if (!scene || !lightRef.current) return;

    // 🔥 Get bounding box of model
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // 👉 Position light at TOP FRONT (torch head)
    lightRef.current.position.set(
      center.x,
      center.y + size.y * 0.5,  // top
      center.z + size.z * 0.5   // front
    );
  });
    return (
    <>
      <primitive object={scene} scale={10} position={[0, -1, 0]} />

      {/* 🔥 Torch Light */}
      <pointLight
        ref={lightRef}
        intensity={5}
        distance={10}
        color="orange"
      />
    </>
  );
};

const TorchScene = () => {
  return (
    <div className="threejs02_sec1">
      <Canvas
        camera={{
          // position: [-3, 5, -1],
          position: [0, 1, 5],
          fov: 50,
        }}
      >
        {/* Debug helper */}
        <axesHelper args={[5]} />

        {/* Lights */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 2]} intensity={5} />

        {/* Torch Model */}
        <TorchModel />

        {/* Controls (optional) */}
        <OrbitControls enableZoom={false} />

        {/* Environment lighting */}
        {/* <Environment preset="sunset" /> */}
      </Canvas>
    </div>
  );
};

export default TorchScene;
