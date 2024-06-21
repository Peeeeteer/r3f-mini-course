###### Hint 3: Fill in the blanks

Here's what my code looks like so far; fill in the blanks.


Popup.jsx
```javascript
import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [blockedUrls, setBlockedUrls] = useState([]);

  const handleSubmit = () => {
  };

  const handleRemoveUrl = (urlToRemove) => {
  };

  return (
    <div className="App">
      <header className="App-header">
        <input/>
        <button>Add</button>
        <ul>
        </ul>
      </header>
    </div>
  );
};

export default Popup;
```

```css
.body {
  width: 300px; /* Adjust the width as needed */
  height: 400px; /* Adjust the height as needed */
}
...
```


