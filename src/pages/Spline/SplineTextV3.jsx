// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Float } from "@react-three/drei";

// import { TextureLoader } from "three";

// import { useRef } from "react";

// import * as THREE from "three";

// import "./splinev3.scss";

// function FloatingImage() {
//   const meshRef = useRef();

//   const texture = useLoader(
//     TextureLoader,
//     "/images/lanterne-text.jpg"
//   );

//   useFrame((state) => {
//     const mouseX = state.mouse.x;
//     const mouseY = state.mouse.y;

//     if (meshRef.current) {
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(
//         meshRef.current.rotation.y,
//         mouseX * 0.25,
//         0.08
//       );

//       meshRef.current.rotation.x = THREE.MathUtils.lerp(
//         meshRef.current.rotation.x,
//         -mouseY * 0.15,
//         0.08
//       );

//       meshRef.current.position.x = THREE.MathUtils.lerp(
//         meshRef.current.position.x,
//         mouseX * 0.4,
//         0.08
//       );

//       meshRef.current.position.y = THREE.MathUtils.lerp(
//         meshRef.current.position.y,
//         mouseY * 0.2,
//         0.08
//       );
//     }
//   });

//   return (
//     <Float speed={1.5} floatIntensity={0.2}>
//       <mesh ref={meshRef}>
//         <planeGeometry args={[7, 3]} />

//         <meshBasicMaterial
//           map={texture}
//           transparent
//         />
//       </mesh>
//     </Float>
//   );
// }

// export default function SplineTextV3() {
//   return (
//     <div className="hero_canvas">
//       <div className="grain_overlay"></div>

//       <Canvas camera={{ position: [0, 0, 8] }}>
//         <ambientLight intensity={2} />

//         <FloatingImage />
//       </Canvas>
//     </div>
//   );
// }