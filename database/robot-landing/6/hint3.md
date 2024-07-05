###### Hint 3: Code

Here is some code,  
Try to add the remaining needed code yourself.

**`# App.jsx`**
```javascript

  // Create the expression state
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

	        // Pass down the expression
          <Robot expression={expression} />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
        onMouseOver={() => {
	    // Do something here

        }}
        onMouseLeave={() => {
	    // Do something here

        }}
      >
        Press me
      </button>
    </div>
  );

```

<br>

**`# Robot.jsx`**


```javascript
export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');
  
  // See what value is returned
  console.log(props.expression);
  
  // Do something here
  const Expression = () => {
  
    if () {
      return (

      )

    } else if () {
      return (

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
    </group>
  );
}
```