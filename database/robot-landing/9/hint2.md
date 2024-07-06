###### Hint 2: useFrame & clock

`useFrame` has a clock 🕒

```javascript
useFrame(({ pointer, viewport, clock }) => {
```

The clock has an `getElapsedTime()` function that we can use get the elapsed time.  
With it we can always know how much time has passed and calculate the blinking.

So,  
the start of `useFrame` should look something like this

```javascript
useFrame(({ pointer, viewport, clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const cycleTime = 2; // Blink every X seconds
    const blinkDuration = 0.15; // Duration of the blink
    
...

```

Use **Google,Youtube or AI** to try to solve this…  
Again nobody cares how you solve it as long as you just understand how it was solved and that you solved it.
