###### Milestone 2 Solution

Final code for **`App.jsx`**
```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
```

Make sure you installed `three & @ react-three/fiber`

```bash
cd your-app-name
npm install three @react-three/fiber
```

And to run it, do:
```bash
npm run dev
```
