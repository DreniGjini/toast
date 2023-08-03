# my-toaster

Short description of your component.

![Your Component](link-to-your-component-screenshot.gif)

## How to Test the Application

To test the application, follow the steps below:

1. You can use StoryBook and/or Rollup, but a more simple way would be `npm link` to link the component with your application.
2. Wrap your application with `<ToasterProvider>` to enable toast functionality.
3. Import the `useToast` hook in your app to access toast functions:

```jsx
import React, { useEffect } from 'react';
import { ToasterProvider } from 'my-toaster';

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
```
### Step 2 would be inside a higher order component (best case) eg. Layout wrapper to call the options functions

```jsx
import React, { useEffect } from 'react';
import { useToast } from 'my-toaster';

const Layout = () => {
  const { addToaster, toastOptions } = useToast();

  useEffect(() => {
    toastOptions({ position: "bottom", transitionTimingFunction: "ease", time: 5000 });
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
```
- position: Is responsible for the apperance of the toast `bottom | top  `
- transitionTimingFunction: Transition options
- time: Will set the duration of the toast globaly.

## To use the component you would call the addToaster() function like below

```jsx

  return (
    <div>
     <button
        onClick={() =>
          addToaster({
            description: "Your example message",
            title: "your title or a default one success | danger | warning"
            id: Math.random(),
            type: "danger",
          })
        }
      >
        Click Me
      </button>
    </div>
  );
};

```

## Demo 

To test demo would be to start the app normaly and in the default rout would give you 3 use cases.
To Edit the cases you should edit the `ShowCast.tsx` file.

# Contributor

## Dreni Gjini

