###### Milestone 4 Solution

Make sure you have these common problems fixed.

<br>

**# Problem 1**

Component name & file name to be **Robot/Robot.jsx**

```javascript
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb')
  ...

```

<br>

**# Problem 2**

Make sure you have `drei` installed

```bash
npm i @react-three/drei
```

<br>

**# Problem 3**

File stracture:
<img src="/robot-landing/image18.png" alt="index.js" width="480" height="480">

<br>

**# Final code for `App.jsx`**

```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';

function App() {
  return (
    <div className="relative w-full h-screen">
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
        No Star, No Wars
      </h1>
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
        Starwars
      </h1>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Robot />
      </Canvas>
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
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
      <mesh
        name="Angry"
        geometry={nodes.Angry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Angry.morphTargetDictionary}
        morphTargetInfluences={nodes.Angry.morphTargetInfluences}
      />
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
        name="Smile"
        geometry={nodes.Smile.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Smile.morphTargetDictionary}
        morphTargetInfluences={nodes.Smile.morphTargetInfluences}
      />
      <mesh
        name="Starry"
        geometry={nodes.Starry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Starry.morphTargetDictionary}
        morphTargetInfluences={nodes.Starry.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload('/robot-transformed.glb');
```

**Remove** .body from **`index.css`**
```css
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```
