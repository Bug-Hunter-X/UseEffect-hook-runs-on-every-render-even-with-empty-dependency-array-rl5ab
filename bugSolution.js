```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran!'); // This will now only run once
    // Perform side effects here
    return () => {
      // Cleanup function (optional)
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```