import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function HandlingErrorsBoundaries() {
  return (
    <>
      <Lead
        title="Handling Errors and Error Boundaries in React"
        paragraph1="Learn how to handle errors gracefully in your React components using Error Boundaries."
        paragraph2="Error handling is a critical part of building robust React applications. React provides a built-in mechanism called Error Boundaries to help catch JavaScript errors anywhere in your component tree, log those errors, and display a fallback UI."
      />

      <Section>
        <h2>What Are Error Boundaries?</h2>
        <p>
          Error boundaries are special React components that act as a catch-all for errors in their child components. They can catch errors during rendering, in lifecycle methods, and in constructors of the components within their tree.
        </p>
        <p>
          However, error boundaries do not catch errors in the following cases:
        </p>
        <ul>
          <li>Event handlers</li>
          <li>Asynchronous code (e.g., promises)</li>
          <li>Server-side rendering</li>
          <li>Errors thrown inside the error boundary itself</li>
        </ul>
        <p>
          They provide an easy way to display a fallback UI and prevent the entire app from crashing, improving the user experience when things go wrong.
        </p>
      </Section>

      <Section>
        <h2>How Do Error Boundaries Work?</h2>
        <p>
          Error boundaries work by using either the <code>getDerivedStateFromError</code> static method or the <code>componentDidCatch</code> lifecycle method to catch errors in the components rendered by their child components.
        </p>
        <p>
          When an error occurs, the error boundary updates its state to indicate the error and renders a fallback UI, ensuring that the rest of the application remains functional.
        </p>
        <p>
          While traditionally error boundaries are implemented as class components, future versions of React may allow functional components with hooks to handle errors in a similar manner.
        </p>
      </Section>

      <Section>
        <h2>Creating an Error Boundary</h2>
        <p>
          To create an error boundary in React, you need to create a class component that implements either the <code>componentDidCatch</code> method or the <code>getDerivedStateFromError</code> method. This component will render a fallback UI when an error is caught.
        </p>
        <CodeSnippet language="jsx" code={`import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has been caught
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally log error details to an external service
    console.error('Error:', error);
    console.error('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI when error occurs
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Render children components normally
    return this.props.children;
  }
}

export default ErrorBoundary;`} />
        
        <p>
          In this example, the <code>ErrorBoundary</code> component has a state variable called <code>hasError</code> to track whether an error has occurred. When an error occurs in any child component, the fallback UI is rendered, and the error is logged to the console.
        </p>
      </Section>

      <Section>
        <h2>Using the Error Boundary</h2>
        <p>
          Once you have created an error boundary, you can use it to wrap any component that might throw an error.
        </p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function ProblematicComponent() {
  throw new Error('Something went wrong!');
  return <div>Everything is fine!</div>;
}

function App() {
  return (
    <div>
      <h1>React App</h1>
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;`} />
        
        <p>
          In this example, the <code>ProblematicComponent</code> intentionally throws an error. However, because it is wrapped inside the <code>ErrorBoundary</code> component, the error is caught, and the fallback UI is shown instead of crashing the app.
        </p>
      </Section>

      <Section>
        <h2>Handling Errors in Event Handlers</h2>
        <p>
          Error boundaries do not catch errors thrown inside event handlers. For event handler errors, you can manually handle them using a <code>try-catch</code> block.
        </p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function EventHandlerWithError() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    try {
      if (count === 2) {
        throw new Error('Count cannot be 2');
      }
      setCount(count + 1);
    } catch (error) {
      console.error('Caught error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default EventHandlerWithError;`} />
        
        <p>
          In this example, when the count reaches 2, an error is manually thrown inside the event handler. The <code>try-catch</code> block catches the error, preventing the entire app from crashing.
        </p>
      </Section>

      <Section>
        <h2>Fallback UI</h2>
        <p>
          When an error is caught by an error boundary, you can render any fallback UI you choose. This could range from a simple error message to a custom error page or even an option to retry the failed operation.
        </p>
        <p>
          You can also enhance the user experience by adding interactive elements like a "Retry" button, allowing users to try reloading the failed component or recover from the error.
        </p>
      </Section>

      <Section>
        <h2>Best Practices for Error Boundaries</h2>
        <ul>
          <li><strong>Wrap high-level components:</strong> Wrap your top-level components in an error boundary to catch errors throughout the entire app.</li>
          <li><strong>Be specific:</strong> Use error boundaries for specific components that are prone to errors (e.g., external API calls or forms).</li>
          <li><strong>Provide a useful fallback:</strong> Ensure the fallback UI clearly communicates the error to the user, including options like retrying or seeking support.</li>
          <li><strong>Logging:</strong> Always log errors to help diagnose issues. Consider using an external logging service like Sentry or LogRocket for tracking and debugging.</li>
        </ul>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>
          Error boundaries are essential for building resilient React applications. They allow you to handle errors gracefully without crashing the entire app. By providing a fallback UI and preventing unhandled exceptions from affecting the user experience, error boundaries significantly improve the robustness and reliability of your React applications.
        </p>
      </Section>

      <PageNavigation prevPage={RoutePath.FETCHING_DATA_API_CALLS} nextPage={RoutePath.TESTING_REACT_COMPONENTS} />
    </>
  );
}
