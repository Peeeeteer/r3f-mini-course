###### Hint 2: Small but important things

Once you get the `Robot.jsx` file  
And try importing it in `App.jsx` you might run into a couple of problems...

###### Problem 1.

It auto generates the component name to be Model:

```javascript
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb')
  ...

```

So when you import it into `App.jsx`, it will **not** work...

```javascript
import { Robot } from './components/Robot';
```

You have to make sure you actually call it Robot, like this
```javascript
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb')
  ...

```

<br>

###### Problem 2 
For some reason they mention this at the very bottom of the documentation,   
but the `Robot.jsx` is using a library called `@react-three/drei`


So make sure you install it.

```bash
npm i @react-three/drei
```
<br>

These are the two common issues,  
fix these and you should have it!