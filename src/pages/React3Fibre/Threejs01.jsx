import "./react3Fibre.scss";
import { Canvas } from "@react-three/fiber";

const Threejs01 = () => {
  return (
    <>
      <div className="threejs01_sec1" id="threejs01_container">
        <Canvas className="three_canvas" camera={{ position: [2, 2, 2] }}>
          <mesh>
            <sphereGeometry
              //  args={[3, 8, 8]}
              args={[3, 80, 80]}
            />
            <boxGeometry args={[2, 3, 2]} />
            {/* <meshBasicMaterial
              color="gold"
              // wireframe
            /> */}
            {/* <======= No light in meshPhongMaterial material so color not be visible ===========> */}
            <meshPhongMaterial color="gold" />
            <directionalLight position={[2, 2, 1]} intensity={3} />
          </mesh>
        </Canvas>

        <Canvas
          className="three_canvas"
          style={{ backgroundColor: "blue" }}
          camera={{ position: [2, -2, 2] }}
        >
          <mesh
            position={[2, 4, 1]}
            rotation={[0, 0, Math.PI]}
            scale={[2, 0.5, 2]}
          >
            <boxGeometry args={[2, 3, 2]} />
            <meshBasicMaterial color="red" />
            <directionalLight position={[2, 4, 1]} intensity={3} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default Threejs01;
