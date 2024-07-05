###### Hint 3: Code

Here is some code,  
Make sure to see how it was done inside the <a href="https://codesandbox.io/s/pbwi6i" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer"> Drone Example</a> and do the same.


**`App.jsx`**
```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import { Stage, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="relative w-full h-screen">
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
        No Wall, No e
      </h1>
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
        Wall-e
      </h1>


	  // Change stuff here
      <Canvas >
        <fog  />
        <Stage >
          <Robot />
        </Stage>
        <OrbitControls />
      </Canvas>


	  // No changes here.
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        Press me
      </button>
    </div>
  );
}


export default App;

```

