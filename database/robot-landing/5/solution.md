###### Milestone 5 Solution

Final code for **`App.jsx`**
```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import { Stage, OrbitControls, } from '@react-three/drei'

function App() {
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
          <Robot />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        Press me
      </button>
    </div>
  );
}

export default App;
```
