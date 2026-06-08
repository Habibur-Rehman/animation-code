import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import "./spline.scss";

function FloatingText() {
  const textRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (textRef.current && glowRef.current) {
      // MAIN TEXT
      textRef.current.rotation.y = THREE.MathUtils.lerp(
        textRef.current.rotation.y,
        mouseX * 0.35,
        0.08
      );

      textRef.current.rotation.x = THREE.MathUtils.lerp(
        textRef.current.rotation.x,
        -mouseY * 0.2,
        0.08
      );

      textRef.current.position.x = THREE.MathUtils.lerp(
        textRef.current.position.x,
        mouseX * 0.35,
        0.08
      );

      textRef.current.position.y = THREE.MathUtils.lerp(
        textRef.current.position.y,
        mouseY * 0.15,
        0.08
      );

      // GLOW LAYER
      glowRef.current.rotation.y = THREE.MathUtils.lerp(
        glowRef.current.rotation.y,
        mouseX * 0.45,
        0.08
      );

      glowRef.current.rotation.x = THREE.MathUtils.lerp(
        glowRef.current.rotation.x,
        -mouseY * 0.25,
        0.08
      );

      glowRef.current.position.x = THREE.MathUtils.lerp(
        glowRef.current.position.x,
        mouseX * 0.45,
        0.08
      );

      glowRef.current.position.y = THREE.MathUtils.lerp(
        glowRef.current.position.y,
        mouseY * 0.2,
        0.08
      );
    }
  });

  return (
    <Float speed={1.8} floatIntensity={0.2}>
      {/* BLUR / GLOW LAYER */}
      <Text
        ref={glowRef}
        font="/fonts/Anton-Regular.ttf"
        fontSize={1.25}
        color="#ff5b2e"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
        position={[0, 0, -0.2]}
      >
        LANTERNE{"\n"}ARCHITECTES

        <meshBasicMaterial
          color="#ff5b2e"
          transparent
          opacity={0.35}
        />
      </Text>

      {/* MAIN TEXT */}
      <Text
        ref={textRef}
        font="/fonts/Anton-Regular.ttf"
        fontSize={1.15}
        color="#f04d23"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
      >
        LANTERNE{"\n"}ARCHITECTES

        <meshBasicMaterial color="#f04d23" />
      </Text>
    </Float>
  );
}

export default function SplineTextV2() {
  return (
    <div className="hero_canvas">
      {/* GRAIN OVERLAY */}
      <div className="grain_overlay"></div>

      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={2} />

        <FloatingText />
      </Canvas>
    </div>
  );
}