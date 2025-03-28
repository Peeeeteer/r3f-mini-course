###### Hint 1: Adjust it manually

If we modify the `morphTargetInfluences[0]` value we can control the blining manually:
<video width="640" height="480" controls preload>
  <source src="https://bq46iimbxf.ufs.sh/f/d6oWbqcM0NRhJ7ldv2NcXdOGj6kW0xyhSBE2gu98UwmPHqNR" type="video/mp4">
  Your browser does not support the video tag.
</video>


Inside `Robot.jsx`  
Try to figure out how to have it happen on a time basis, so every 2 seconds we blink. 
```javascript
export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');

  nodes.Smile.morphTargetInfluences[0] = 1 <- Change this value

...
```

💡 useFrame might be what you need 💡



