###### Hint 1: Hide


There are a couple ways to do it, but React-Three-Fiber has a bunch of helpers  
One of them is called <a href="https://github.com/pmndrs/drei?tab=readme-ov-file#scrollcontrols" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">ScrollControls</a>, which is something pretty useful.

Especially this part:
```javascript
<ScrollControls pages={3} damping={0.1}>
  {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
  <SomeModel />

  <Scroll>
    {/* Canvas contents in here will scroll along */}
    <Foo position={[0, 0, 0]} />
    <Foo position={[0, viewport.height, 0]} />
    <Foo position={[0, viewport.height * 1, 0]} />
  </Scroll>
  <Scroll html>
    {/* DOM contents in here will scroll along */}
    <h1>html in here (optional)</h1>
    <h1 style={{ top: '100vh' }}>second page</h1>
    <h1 style={{ top: '200vh' }}>third page</h1>
  </Scroll>

</ScrollControls>

```

Also!  
There are some good <a href="https://www.youtube.com/results?search_query=React+Three+Fiber+ScrollControls" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">Youtube Videos </a> on this topic, watch them and try to apply it to our robot scene.



Yes, watching tutorials… I know against justcode policy,  
but you are only learning a specific thing and applying it to your project.

Achieve the goal of the miestone, after that 😡 close the tutorial. 😡 
