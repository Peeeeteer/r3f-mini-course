###### Hint 3: Code

Replace the `<mesh>` with the `<Robot />` component.  

**`App.jsx`**
```javascript
import { Robot } from './components/Robot';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <h1 className="mt-10 text-xl">No Tutorials, No Courses</h1>
      <h1 className="mt-2 text-xl">justcode</h1>
      <Canvas className="flex-grow">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        {/* Replace mesh with <Robot />*/}
        <mesh scale={[2.5, 2.5, 2.5]} rotation={[0, 7, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

      </Canvas>
      <button className="mb-20">Press me</button>
    </div>
  );
}
```

If the robot looks like this  
<img src="/robot-landing/image6.png" alt="index.js" width="640" height="480">

You need to do some changes inside the `index.css`   
as the template we used had some predefined css styling on the `body` which we should remove/change
