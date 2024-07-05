###### Hint 2: Expressions


Inside `App.jsx`  
we can pass down `props` to the `<Robot />` component, just like this:

```javascript
<Robot expression={expression} />
```

And then inside the `Robot.jsx` file we can use it:

```javascript

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');

  console.log(props.expression);

...
```


With the `props.expression` value do something like this.
 
If expression = “Smile”:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shows a smile mesh.

If expression = “Angry”:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show the angry mesh.

