import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { easing } from "maath";

export function Robot(props) {
  const { nodes, materials } = useGLTF("/robot-transformed.glb");
  const [dummy] = useState(() => new THREE.Object3D());

  const meshRef = useRef();

  useFrame(({ pointer, viewport, clock, dt }) => {
    const elapsedTime = clock.getElapsedTime();

    // Have the cycle mode be a random number from 1-5
    const cycleTime = 2; // Total cycle duration in seconds
    const blinkDuration = 0.09; // Duration of the blink in seconds
    const phase = (elapsedTime % cycleTime) / cycleTime; // Calculate current phase of the cycle

    let blink;
    if (phase <= blinkDuration) {
      // Adjusted to make the blink happen in the first 0.5 seconds
      if (phase <= blinkDuration / 2) {
        blink = (phase / (blinkDuration / 2)) * 1; // From 0 to 1
      } else {
        blink = 1 - (phase - blinkDuration / 2) / (blinkDuration / 2); // From 1 back to 0
      }
    } else {
      blink = 0; // No influence outside the blink duration
    }
    nodes.Smile.morphTargetInfluences[0] = blink;

    const x = (pointer.x * viewport.width) / 13;
    const y = (pointer.y * viewport.height) / 13;
    // meshRef.current.lookAt(x, y, 1)

    dummy.lookAt(x, y, 1); // Use dummy for smooth lookAt
    if (meshRef.current) {
      easing.dampQ(meshRef.current.quaternion, dummy.quaternion, 0.2, dt); // Step 3
    }
  });

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
        );

      case "Starry":
        return (
          <mesh
            name="Starry"
            geometry={nodes.Starry.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Starry.morphTargetDictionary}
            morphTargetInfluences={nodes.Starry.morphTargetInfluences}
          />
        );
      default:
        return (
          <mesh
            name="Neutral"
            geometry={nodes.Neutral.geometry}
            material={materials.Expression}
            morphTargetDictionary={nodes.Neutral.morphTargetDictionary}
            morphTargetInfluences={nodes.Neutral.morphTargetInfluences}
          />
        );
    }
  };

  const handleClick = () => {
    // Open a youtube url in a new tab
    window.open("https://youtu.be/MDKogbx1NbI", "_blank");
  };

  // Function to revert cursor to default
  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  // Function to change cursor to pointer
  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  return (
    <group
      {...props}
      dispose={null}
      ref={meshRef}
      onClick={() => {
        handleClick();
      }}
    >
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        geometry={nodes.Computer_Head.geometry}
        material={materials.Computer}
      />
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
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

useGLTF.preload("/robot-transformed.glb");
