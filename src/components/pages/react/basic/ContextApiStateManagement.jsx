import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function ContextApiStateManagement() {
  return (
    <>
      <Lead
        title="Context API for State Management"
        paragraph1="Learn how to manage global state across your React application using the Context API."
        paragraph2="The Context API allows components at different nesting levels to access shared state without prop drilling. It is ideal for scenarios like theme settings, authentication status, and language preferences."
      />

      <Section>
        <h2>What is the Context API?</h2>
        <p>The Context API is a powerful feature in React that enables state and functions to be shared between components without the need to pass props manually through each level of the component tree.</p>
        <p>Common use cases for the Context API include:</p>
        <ul>
          <li>User authentication and login status</li>
          <li>Global theming (e.g., dark or light mode)</li>
          <li>Language preferences and localization</li>
        </ul>
        <p>By using the Context API, you can prevent "prop drilling," where props need to be passed down through multiple layers of components, making your code cleaner and more manageable.</p>
      </Section>

      <Section>
        <h2>Creating Context</h2>
        <p>To create a context, we use the <code>createContext</code> function. The context allows other components to consume and interact with the state and functions it provides.</p>
        <CodeSnippet language="jsx" code={`import React, { createContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };`} />
        <br />
        <p>In this example, we define a <code>ThemeContext</code> and a <code>ThemeProvider</code> component. The provider wraps the child components and makes the current theme and the <code>toggleTheme</code> function accessible to them.</p>
      </Section>

      <Section>
        <h2>Consuming Context</h2>
        <p>To consume the context in a component, we use the <code>useContext</code> hook. This hook retrieves the context value, allowing the component to access the current state and functions.</p>
        <CodeSnippet language="jsx" code={`import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>The current theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;`} />
        <br />
        <p>The <code>ThemedComponent</code> uses the <code>useContext</code> hook to access the current theme and toggle function. It then applies the theme to the component’s styles and provides a button to toggle the theme.</p>
      </Section>

      <Section>
        <h2>Using Context in Your App</h2>
        <p>To use the context globally, you wrap your top-level component (usually <code>App.js</code>) with the <code>ThemeProvider</code>. This makes the theme state available to all nested components.</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;`} />
        <br />
        <p>By wrapping <code>App</code> with <code>ThemeProvider</code>, any component inside <code>App</code> (like <code>ThemedComponent</code>) can access and modify the theme state.</p>
      </Section>

      <Section>
        <h2>Advantages of the Context API</h2>
        <ul>
          <li><strong>Global State Management:</strong> The Context API provides an easy way to share state globally, eliminating the need to pass props manually at every level.</li>
          <li><strong>Cleaner Code:</strong> It simplifies the code by avoiding prop drilling and reducing component complexity.</li>
          <li><strong>Good for Small to Medium Applications:</strong> For moderate global state management, the Context API is a lightweight alternative to more complex solutions like Redux.</li>
        </ul>
      </Section>

      <Section>
        <h2>Limitations of the Context API</h2>
        <ul>
          <li><strong>Performance Considerations:</strong> Frequent updates to the context value can cause unnecessary re-renders, especially if many components consume the context.</li>
          <li><strong>Not Suitable for Large Applications:</strong> For large applications with intricate state management needs, using the Context API can become inefficient. In such cases, a more robust solution like Redux may be necessary.</li>
        </ul>
        <p>Despite these limitations, the Context API is ideal for applications with simpler state management needs or when managing small to medium amounts of global state.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>The Context API is a powerful tool for managing global state in React applications. It enables easy sharing of state between components, eliminating prop drilling and making code more maintainable. While it may not be suitable for large-scale state management in complex applications, it is an excellent choice for smaller applications where global state is required.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.ADVANCED_HOOKS_USEMEMO_USECALLBACK} nextPage={RoutePath.REACT_ROUTER_NAVIGATION} />
    </>
  );
}
