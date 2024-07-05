###### Hint 2: 3D stuff

React Three Fiber has <a href="https://docs.pmnd.rs/react-three-fiber/api/objects" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">a lot of good documentation</a>. Try reading and looking trough it.

For the cube,  
you will only be making changes to `<mesh>` and a small styling change to `<Canvas>` so that it has more space.

They have a good example right at the top of the page.  
It lets you know how you can **rotate,scale and position** the `<mesh>`

```javascript
<mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink" transparent />
</mesh>
```

Also,  
<a href="https://docs.pmnd.rs/react-three-fiber/getting-started/examples" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">Check out some of the example R3F scenes</a>, they are also pretty cool  
Looking at others peoples code is always a good way of learning.


