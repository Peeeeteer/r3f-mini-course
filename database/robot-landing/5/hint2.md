###### Hint 2: Experiment
To add `<OrbitControls />` place it inside the `<Canvas />`

```javascript
import { OrbitControls } from '@react-three/drei'
...

      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        
        <OrbitControls />
        
        <Robot />
      </Canvas>
      
...
```

Try adding other components to enhance the scene.   
I liked the look of `<Stage />`, `<Environment />`, `<fog>` and `<ambientLight />`

Keep adding values and experimenting and get the Robot looking nice! 🤖