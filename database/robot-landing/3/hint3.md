###### Hint 3: Code

Here is some code,  
Try to add the remaining needed code yourself.


**`App.jsx`**
```javascript
import './App.css';
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    // Add tailwindcss styling to all html elements
    <div className="">
      <h1 className="">No Tutorials, No Courses</h1>
      <h1 className="">justcode</h1>
      <Canvas className="">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh 
		    // Make changes here.
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>


      <button className="">Press me</button>
    </div>
  );
}

export default App;
```


**`.eslintrc.cjs`**  
See what google/stackoverflow/github/ai tells you to add there?

```javascript
  ...
  plugins: [], <- - - - Lets add something here.

  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  ...


```



