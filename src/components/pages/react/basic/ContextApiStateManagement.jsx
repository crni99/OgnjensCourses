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
        paragraph1="Learn how to manage state globally across your application using React’s Context API."
        paragraph2="The Context API allows you to share state between components without needing to pass props through every level of your component tree. This is especially useful for state that needs to be accessed by many components at different nesting levels, such as theme settings, user authentication status, or language preferences."
      />

      <Section>
        <h2>What is the Context API?</h2>
        <p>The Context API is a feature in React that provides a way to share values between components without having to pass props explicitly at each level. It enables you to create global state that can be accessed by any component in the component tree.</p>
        <p>Context is often used for things like:</p>
        <ul>
          <li>User authentication status</li>
          <li>Global theming (e.g., light or dark mode)</li>
          <li>Language preferences</li>
        </ul>
        <p>By using Context, you can avoid "prop drilling," which occurs when props need to be passed down multiple levels of nested components.</p>
      </Section>

      <Section>
        <h2>Creating Context</h2>
        <p>To use the Context API, we need to create a context using the <code>createContext</code> function. This context will hold the state and allow other components to consume it.</p>
        <CodeSnippet language="jsx" code={`import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };`} />
        <br></br>
        <p>In this example, we create a <code>ThemeContext</code> and a <code>ThemeProvider</code> component. The <code>ThemeProvider</code> component wraps the children components and provides them access to the context's value. The value consists of the current theme and a function to toggle the theme.</p>
      </Section>

      <Section>
        <h2>Consuming Context</h2>
        <p>Once the context is created, any component in the component tree can consume the context value using the <code>useContext</code> hook.</p>
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
        <br></br>
        <p>In this example, the <code>ThemedComponent</code> uses the <code>useContext</code> hook to access the current theme and the <code>toggleTheme</code> function from the <code>ThemeContext</code>. The component can then use this data to update its display.</p>
      </Section>

      <Section>
        <h2>Using Context in the App</h2>
        <p>To use the context in your application, wrap the top-level component (usually <code>App.js</code>) with the <code>ThemeProvider</code> component. This will allow all child components to access the theme context.</p>
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
        <br></br>
        <p>Here, <code>App</code> is wrapped with <code>ThemeProvider</code>, which provides the context value to all components inside it. Any component inside <code>App</code> (like <code>ThemedComponent</code>) can now access and update the theme state.</p>
      </Section>

      <Section>
        <h2>Advantages of Using Context API</h2>
        <ul>
          <li><strong>Global State Management:</strong> The Context API helps manage state globally, allowing any component to access and modify it without passing props through every level of the component tree.</li>
          <li><strong>Cleaner Code:</strong> Context reduces the need for prop drilling and makes the code more maintainable and readable.</li>
          <li><strong>Better for Small to Medium Applications:</strong> For applications with a moderate amount of shared state, the Context API is a simple and effective solution compared to other state management libraries like Redux.</li>
        </ul>
      </Section>

      <Section>
        <h2>Limitations of Context API</h2>
        <ul>
          <li><strong>Performance Considerations:</strong> While the Context API is useful for passing down state, it can cause unnecessary re-renders of components that consume the context, especially if the context value changes frequently.</li>
          <li><strong>Not Suitable for Large Applications:</strong> For larger applications with complex state management needs, using the Context API may become inefficient, and a more robust solution like Redux might be necessary.</li>
        </ul>
        <p>Despite these limitations, the Context API is a great choice for many React applications, especially those with simpler state management needs.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>The Context API provides an efficient and easy way to manage global state in React applications. It eliminates the need for prop drilling and allows components to share data without explicitly passing props through every level of the component tree. Although the Context API is not a replacement for more complex state management solutions like Redux, it is a powerful tool for smaller to medium-sized applications where global state needs to be shared across various components.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.LIFTING_STATE_UP} nextPage={RoutePath.REACT_ROUTER_NAVIGATION} />
    </>
  );
}
