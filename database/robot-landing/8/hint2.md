###### Hint 2: useFrame

To do changes to the Robot, we work in the `Robot.jsx`  
We need to use `useFrame` and it has a `pointer` and `viewport` we can try to do something with that!


```javascript
useFrame(({ pointer, viewport }) => {
  // Let's do something here.

})
```

Also,  
you might need to use a `useRef` and assign that to the Robot

