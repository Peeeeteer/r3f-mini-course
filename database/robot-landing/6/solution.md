###### Milestone 2 Solution

Final code for **`App.jsx`**
```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import { Stage, OrbitControls, } from '@react-three/drei'
import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState("Smile");

  return (
    <div className="relative w-full h-screen">
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
        No Wall, No e
      </h1>
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
        Wall-e
      </h1>
      <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
        <fog attach="fog" args={['black', 15, 22.5]} />
        <Stage intensity={0.5} environment="studio" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
          <Robot expression={expression} />
        </Stage>
        <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      </Canvas>


      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
        onMouseOver={() => {
          setExpression("Angry");
        }}

        onMouseLeave={() => {
          setExpression("Smile");
        }
        }
      >
        Press me
      </button>
    </div>
  );
}

export default App;
```


Final code for **`Robot.jsx`**
```javascript
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');

  console.log(props.expression);

  const Expression = () => {

    if (props.expression === "Angry") {
      return (
        <mesh
          name="Angry"
          geometry={nodes.Angry.geometry}
          material={materials.Expression}
          morphTargetDictionary={nodes.Angry.morphTargetDictionary}
          morphTargetInfluences={nodes.Angry.morphTargetInfluences}
        />
      )
    } else if (props.expression === "Smile") {
      return (
        <mesh
          name="Smile"
          geometry={nodes.Smile.geometry}
          material={materials.Expression}
          morphTargetDictionary={nodes.Smile.morphTargetDictionary}
          morphTargetInfluences={nodes.Smile.morphTargetInfluences}
        />
      )
    }

  }

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Computer_Head.geometry}
        material={materials.Computer}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Parts}
        position={[1.995, 0.04, 0.378]}
        rotation={[-0.41, 0, 0.438]}
        scale={0.974}
      />
      <Expression />

      {/* 
      <mesh
        name="Cry"
        geometry={nodes.Cry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Cry.morphTargetDictionary}
        morphTargetInfluences={nodes.Cry.morphTargetInfluences}
      />
      <mesh
        name="Neutral"
        geometry={nodes.Neutral.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Neutral.morphTargetDictionary}
        morphTargetInfluences={nodes.Neutral.morphTargetInfluences}
      />

      <mesh
        name="Starry"
        geometry={nodes.Starry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Starry.morphTargetDictionary}
        morphTargetInfluences={nodes.Starry.morphTargetInfluences}
      />
      */}

    </group>
  );
}

useGLTF.preload('/robot-transformed.glb');
```

