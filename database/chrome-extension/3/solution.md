###### Milestone 3. Solution 

**Popup.jsx & Popup.css**  
We will be modifying the Popup.jsx and Popup.css files only, here is the final code.  

**Popup.jsx:**
```javascript

import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [blockedUrls, setBlockedUrls] = useState([]);

  const handleSubmit = () => {
    setBlockedUrls([...blockedUrls, url]);
  };

  const handleRemoveUrl = (urlToRemove) => {
    setBlockedUrls(blockedUrls.filter((url) => url !== urlToRemove));
  };


  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Website URL"
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {blockedUrls.map((blockedUrl) => (
            <div key={blockedUrl}>
              {blockedUrl}
              <button onClick={() => handleRemoveUrl(blockedUrl)}>x</button>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Popup;

```



**Popup.css:**
I kept everything else in the css file and I only adjusted the width/height
```css
.body{
  width: 300px;
  height: 390px;
}
...

```
