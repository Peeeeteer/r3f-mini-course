###### Hint 2: Expressions

Make sure you look at the <a href="https://github.com/pmndrs/drei?tab=readme-ov-file#scrollcontrols" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">documentation</a>  there is a lot of useful information there  

One thing they don't mention is that `<ScrollControls>` needs to be inside the `<Canvas />`

So....something like this:
```javascript
<div>
  <Canvas>
    <ScrollControls>
    // 3D Content


      <Scroll>
      // Html content


      </Scroll>
    </ScrollControls>
  </Canvas>
</div>
```

And if you get this error:
<img src="/robot-landing/image12.png" alt="index.js" width="640" height="620">




That means that you have to tell the `<Scroll>` that it has `html` inside.  
See how they did that in the <a href="https://github.com/pmndrs/drei?tab=readme-ov-file#scrollcontrols" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">documentation</a>
