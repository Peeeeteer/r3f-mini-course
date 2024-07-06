###### Hint 3: Code

Lets only make changes to the `useFrame`

**`# Robot.jsx`**
```javascript
  useFrame(({ pointer, viewport, clock }) => {

    const elapsedTime = clock.getElapsedTime();
    const cycleTime = 2; // Blink every X seconds
    const blinkDuration = 0.15; // Duration of the blink
    
    // Calculate the cycle phase using % 
    const phase =  
    
    // If the phase is less than the blink duration
    if () {
      nodes.Smile.morphTargetInfluences[0] = 1 // Blink

    // Else dont blink
    } else {
      nodes.Smile.morphTargetInfluences[0] = 0 // Dont blink
    }

    // Ignore this
    const x = (pointer.x * viewport.width) / 6
    const y = (pointer.y * viewport.height) / 6
    meshRef.current.lookAt(x, y, 1)

  })
```
