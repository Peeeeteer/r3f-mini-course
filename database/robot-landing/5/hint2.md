###### Hint 2: Ignore some things

Some things in the documentation we can ignore, for example:

```javascript
ReactDOM.createRoot(document.getElementById('root')).render...
```

Because we are already doing it in `main.jsx`

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**🚨 Dont forget 🚨**     
Everything 3D happens within the `<Canvas>`, so make sure to import it. 

```javascript
import { Canvas } from '@react-three/fiber';

```