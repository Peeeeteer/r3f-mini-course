###### Milestone 3 Solution

Final code for **`App.jsx`**
```javascript
import './App.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <h1 className="mt-10 text-xl">No Tutorials, No Courses</h1>
      <h1 className="mt-2 text-xl">justcode</h1>
      <Canvas className="flex-grow">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh scale={[2.5, 2.5, 2.5]} rotation={[0, 7, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      <button className="mb-20">Press me</button>
    </div>
  );
}

export default App;
```

Final code for **`.eslintrc.cjs`**  
Under plugins we added “react-refresh” & “react-three”

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },

  "plugins": [
    "react-refresh",
    "react-three"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

