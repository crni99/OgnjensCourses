import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

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
        <p>Error boundaries are React components that act as a catch-all for errors in their child components. They can catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>
        <p>Error boundaries don't catch errors inside event handlers, asynchronous code, server-side rendering, or errors in the error boundary itself. However, they provide an easy way to show a fallback UI and prevent the entire app from crashing.</p>
      </Section>

      <Section>
        <h2>How Do Error Boundaries Work?</h2>
        <p>React Error Boundaries work by using the <code>componentDidCatch</code> lifecycle method or the <code>static getDerivedStateFromError</code> method to catch errors in the components that are rendered by their child components. You can display a fallback UI when an error is caught, which helps to maintain a good user experience even when things go wrong.</p>
        <p>An error boundary is typically a class component, but you can also create a functional component with hooks to implement error handling in the future.</p>
      </Section>

      <Section>
        <h2>Creating an Error Boundary</h2>
        <p>To create an error boundary in React, you need to create a class component that implements the <code>componentDidCatch</code> method (or <code>getDerivedStateFromError</code>) and renders a fallback UI when an error is caught.</p>
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
    // Log error details to an external service (optional)
    console.error('Error:', error);
    console.error('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI when error occurs
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Render child components normally
    return this.props.children;
  }
}

export default ErrorBoundary;`} />
        <br></br>
        <p>In this example, the <code>ErrorBoundary</code> component has a state variable called <code>hasError</code> that tracks whether an error has been caught. If an error occurs in any of the child components, the fallback UI is displayed, and the component logs the error to the console.</p>
      </Section>

      <Section>
        <h2>Using the Error Boundary</h2>
        <p>Once you've created an error boundary, you can use it to wrap any component that might throw an error.</p>
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
        <br></br>
        <p>In the example above, the <code>ProblematicComponent</code> will intentionally throw an error, but because it’s wrapped inside the <code>ErrorBoundary</code>, the error is caught, and the fallback UI is displayed instead of crashing the whole app.</p>
      </Section>

      <Section>
        <h2>Handling Errors in Event Handlers</h2>
        <p>Error boundaries don't catch errors inside event handlers. For those cases, you can handle errors manually using a <code>try-catch</code> block.</p>
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
        <br></br>
        <p>In this example, when the count reaches 2, an error is manually thrown inside the event handler. This error is caught by the <code>try-catch</code> block, which prevents the entire app from crashing.</p>
      </Section>

      <Section>
        <h2>Fallback UI</h2>
        <p>When an error is caught by an error boundary, you can render any fallback UI you like. You could display a simple error message, a custom error page, or even try to recover from the error (e.g., by retrying the failed operation).</p>
        <p>For instance, you could render an error page or offer the user a "Retry" button to try reloading the component or performing a recovery action.</p>
      </Section>

      <Section>
        <h2>Best Practices for Error Boundaries</h2>
        <ul>
          <li><strong>Wrap high-level components:</strong> Wrap your top-level components in an error boundary to catch errors in the entire app.</li>
          <li><strong>Be specific:</strong> Use error boundaries for individual components that may have specific error-prone areas (e.g., external API calls or forms).</li>
          <li><strong>Provide a useful fallback:</strong> Make sure the fallback UI provides enough information to the user to understand what happened (e.g., a general message, an option to retry, etc.).</li>
          <li><strong>Logging:</strong> Always log errors for debugging purposes. You can log errors to the console, or you may want to send them to an error tracking service like Sentry.</li>
        </ul>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Error boundaries are an essential tool in building resilient React applications. They allow you to catch and handle errors gracefully without crashing the entire app. When used properly, error boundaries improve the user experience by providing a fallback UI and preventing unhandled exceptions from affecting your app.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.FETCHING_DATA_API_CALLS} nextPage={RoutePath.INTRODUCTION_TO_HOOKS} />
    </>
  );
}
