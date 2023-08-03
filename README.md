# Your Component Name

Short description of your component.

![Your Component](link-to-your-component-screenshot.gif)

## How to Test the Application

To test the application, follow the steps below:

1. You can use StoryBook and/or Rollup, but a more simple way would be `npm link` to link the component with your application.
2. Wrap your application with `<ToasterProvider>` to enable toast functionality.
3. Import the `useToast` hook in your app to access toast functions:

```jsx
import React, { useEffect } from 'react';
import { ToasterProvider, useToast } from 'your-component-name';

const App = () => {
  const { addToaster, toastOptions } = useToast();

  // Set global options using useEffect in your higher-order components (e.g., layout).
  useEffect(() => {
    toastOptions({ position: "bottom", transitionTimingFunction: "ease" });
  }, []);

  return (
    <ToasterProvider>
      {/* Your application content here */}
    </ToasterProvider>
  );
};

export default App;
