###### Hint 3: Code

We are still only working inside the `Robot.jsx`  
Need to check the pointer's location and then tell the Cute Robot to lookAt it.



**`# Robot.jsx`**
```javascript
import { useRef } from 'react';

export function Robot(props) {

  const meshRef = useRef(); // Reference to the mesh

  useFrame(({ pointer, viewport }) => {
    
    // Calculate x,y
    const x = 
    const y = 
    
    // Look at x,y
    meshRef...

  })

}
```

We have to assign the meshRef to Robot;

```javascript
return (
    <group {...props} dispose={null} ref={meshRef}>
    ...

```