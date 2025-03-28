###### Milestone 9:  😉 Blink Blink

The goal is now to have the character blink
<video width="640" height="480" controls preload>
  <source src="https://bq46iimbxf.ufs.sh/f/d6oWbqcM0NRhxqBe1d8n91RJfCkGZuM8agTBvlztKhrWXqVE" type="video/mp4">
  Your browser does not support the video tag.
</video>

We will be doing that usin by using `morph` aka `shapekeys` 

You can find the `morph` in the `<mesh />` that has the name `Smile` 

```javascript
<mesh
  name="Smile"
  geometry={nodes.Smile.geometry}
  material={materials.Expression}
  morphTargetDictionary={nodes.Smile.morphTargetDictionary}
  morphTargetInfluences={nodes.Smile.morphTargetInfluences}
/>
```

Only this default mesh has the shapekeys to blink.  
Try and go figure how you can use modify the morph value to basically have the robot blink.


**Task ✅**
- Add blinking functionalitiy 


