import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function WorkingWithEffectsUseEffect() {
  return (
    <>
      <Lead
        title="Working with Effects: useEffect"
        paragraph1="Learn how to handle side effects in React with the useEffect hook."
        paragraph2="In React, side effects are operations that affect something outside the component, such as fetching data from an API, interacting with the DOM, or setting up subscriptions. The <code>useEffect</code> hook lets you perform these operations in function components without disrupting the UI rendering cycle."
      />

      <Section>
        <h2>What is useEffect?</h2>
        <p>The <code>useEffect</code> hook is one of the most commonly used hooks in React. It is designed for handling side effects in function components, such as data fetching, manual DOM manipulations, or event subscriptions. It is called after the render phase, allowing it to perform operations without blocking the UI update.</p>
        <p><code>useEffect</code> takes two arguments:</p>
        <ul>
          <li>A function that contains the side effect logic. This is where you perform the operations that need to occur.</li>
          <li>An optional array of dependencies that tells React when to re-run the effect. If the dependencies haven't changed since the last render, the effect won’t run again, helping with performance optimizations.</li>
        </ul>
        <p>This allows you to precisely control when effects should be triggered, offering significant flexibility and control in your components.</p>
      </Section>

      <Section>
        <h2>Basic Usage of useEffect</h2>
        <p>Let's start with a simple example that uses <code>useEffect</code> to log a message whenever the component is rendered:</p>
        <CodeSnippet language="jsx" code={`import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Component rendered!");
  });

  return <h2>Check the console!</h2>;
}

export default MyComponent;`} />
        <br />
        <p>In this case, <code>useEffect</code> is executed after every render. Since we have not provided a dependency array, the effect will run each time the component renders. This is useful for scenarios where you want to track or log each render.</p>
      </Section>

      <Section>
        <h2>Running useEffect Only Once</h2>
        <p>If you need an effect to run only once, similar to how <code>componentDidMount</code> works in class components, you can pass an empty dependency array (<code>[]</code>) as the second argument to <code>useEffect</code>.</p>
        <CodeSnippet language="jsx" code={`import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Empty array means run only once

  return <h2>Check the console!</h2>;
}

export default MyComponent;`} />
        <br />
        <p>In this example, the <code>useEffect</code> hook only runs once when the component mounts. By passing an empty array, we ensure that the effect is not triggered on subsequent re-renders.</p>
      </Section>

      <Section>
        <h2>Using useEffect for Data Fetching</h2>
        <p>Data fetching is one of the most common use cases for <code>useEffect</code>. Here's an example that fetches data from an API when the component mounts:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Runs only once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;`} />
        <br />
        <p>This example demonstrates how to use <code>useEffect</code> to fetch data from an API when the component mounts. While the data is being fetched, a loading message is displayed. Once the data is retrieved, it's displayed in a formatted way. You should also handle any potential errors that may occur during data fetching.</p>
      </Section>

      <Section>
        <h2>Cleaning Up Effects with useEffect</h2>
        <p>Sometimes, side effects such as timers, event listeners, or subscriptions need to be cleaned up to avoid memory leaks or unintended side effects. To do this, <code>useEffect</code> can return a cleanup function that will be run when the component unmounts or before the effect is run again.</p>
        <CodeSnippet language="jsx" code={`import React, { useEffect } from 'react';

function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Timer cleared!');
    };
  }, []); // Runs only once on mount

  return <h2>Check the console for timer output.</h2>;
}

export default TimerComponent;`} />
        <br />
        <p>This example demonstrates setting up a timer that logs a message every second. The cleanup function is called when the component unmounts or before the effect runs again. This is essential to prevent memory leaks and ensure that unnecessary side effects don’t persist after the component is removed from the DOM.</p>
      </Section>

      <Section>
        <h2>Effect with Dependencies</h2>
        <p>Dependencies in <code>useEffect</code> allow you to optimize performance by ensuring that the effect only runs when specific values change. This prevents unnecessary execution of side effects and improves performance, especially for expensive operations.</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`} />
        <br />
        <p>In this example, the effect only runs when the <code>count</code> state changes. This ensures that the effect isn’t executed on every render but only when the state is updated. Using dependencies like this helps improve performance by reducing unnecessary side effect executions.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>The <code>useEffect</code> hook is one of the most powerful and flexible tools in React. It allows you to handle side effects such as data fetching, event subscriptions, DOM manipulations, and timers in a way that doesn't interfere with the component's render flow. By carefully managing dependencies and cleanup functions, you can optimize your component's performance and avoid common pitfalls like memory leaks.</p>
        <p>Mastering <code>useEffect</code> is essential for building efficient and maintainable React applications. By understanding how to control when effects run and how to clean up after them, you can create smooth and efficient user experiences in your applications.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.INTRODUCTION_TO_HOOKS} nextPage={RoutePath.ADVANCED_HOOKS_USEMEMO_USECALLBACK} />
    </>
  );
}
