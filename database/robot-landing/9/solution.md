###### Milestone 9 Solution

Final code for **`Robot.jsx`**
```javascript
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';


export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');

  const meshRef = useRef();

  useFrame(({ pointer, viewport, clock }) => {

    const elapsedTime = clock.getElapsedTime();
    const cycleTime = 2; // Blink every X seconds
    const blinkDuration = 0.15; // Duration of the blink
    
    const phase = (elapsedTime % cycleTime) / cycleTime; // Calculate current phase of the cycle

    if (phase <= (blinkDuration / cycleTime)) {
      nodes.Smile.morphTargetInfluences[0] = 1 // Blink
    } else {
      nodes.Smile.morphTargetInfluences[0] = 0 // Dont blink
    }

    // Ignore this. Code for the robot & pointer stuff.
    const x = (pointer.x * viewport.width) / 6
    const y = (pointer.y * viewport.height) / 6
    meshRef.current.lookAt(x, y, 1)


  })

  const Expression = () => {
    switch (props.expression) {
      case "Angry":
        return (
          <mesh
            name="Angry"
            geometry={nodes.Angry.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Angry.morphTargetDictionary}
            morphTargetInfluences={nodes.Angry.morphTargetInfluences}
          />
        );
      case "Smile":
        return (
          <mesh
            name="Smile"
            geometry={nodes.Smile.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Smile.morphTargetDictionary}
            morphTargetInfluences={nodes.Smile.morphTargetInfluences}
          />
        );
      case "Cry":
        return (
          <mesh
            name="Cry"
            geometry={nodes.Cry.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Cry.morphTargetDictionary}
            morphTargetInfluences={nodes.Cry.morphTargetInfluences}
          />
        )
      case "Starry":
        return (
          <mesh
            name="Starry"
            geometry={nodes.Starry.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Starry.morphTargetDictionary}
            morphTargetInfluences={nodes.Starry.morphTargetInfluences}
          />
        )
      default:
        return (
          <mesh
            name="Neutral"
            geometry={nodes.Neutral.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Neutral.morphTargetDictionary}
            morphTargetInfluences={nodes.Neutral.morphTargetInfluences}
          />
        )
    }
  };

  return (
    <group {...props} dispose={null} ref={meshRef}>
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


    </group>
  );
}

useGLTF.preload('/robot-transformed.glb');
```

