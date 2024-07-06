###### Hint 3: Code

Here is some code,  
Try to add the remaining needed code yourself.

**`# App.jsx`**
```javascript
 return (

    <div className="relative w-full h-screen">
      <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
        
        //! Change the pages amount & damping inside ScrollControls
        <ScrollControls >
          <fog attach="fog" args={['black', 15, 22.5]} />
          <Stage intensity={0.5} environment="studio" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
            <Robot expression={expression} />
          </Stage>
          <OrbitControls enableZoom={false} />
		
          //! Set the width to 100% so content is centred
          <Scroll html>
            <div className="relative w-full h-screen">
              <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
                No Wall, No e
              </h1>
              <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
                Wall-e
              </h1>

              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                onMouseOver={() => { setExpression("Angry"); }}
                onMouseLeave={() => { setExpression("Smile") }}
              >
                Press me
              </button>
            </div>
		
            //! Add two more buttons


          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
```

<br>

Also!  
Do you have scrollbars?
<img src="/robot-landing/image222.png" alt="index.js" width="640" height="620">

Inside `App.css` you need to adjust the `#root`


```css

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
...
```
