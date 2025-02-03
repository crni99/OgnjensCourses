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
        paragraph2="In React, side effects are operations that affect something outside the component, such as fetching data from an API, interacting with the DOM, or setting up subscriptions. The <code>useEffect</code> hook lets you perform these operations in function components."
      />

      <Section>
        <h2>What is useEffect?</h2>
        <p>The <code>useEffect</code> hook is one of the most commonly used hooks in React. It is used to perform side effects in function components, such as data fetching, manual DOM manipulations, or subscriptions to events. It runs after the render cycle, so it doesn't block the UI from updating.</p>
        <p><code>useEffect</code> takes two arguments:</p>
        <ul>
          <li>A function that contains the side effect logic.</li>
          <li>An optional array of dependencies, which tells React when to re-run the effect.</li>
        </ul>
      </Section>

      <Section>
        <h2>Basic Usage of useEffect</h2>
        <p>Here is a simple example of using <code>useEffect</code> to log a message whenever the component is rendered:</p>
        <CodeSnippet language="jsx" code={`import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Component rendered!");
  });

  return <h2>Check the console!</h2>;
}

export default MyComponent;`} />
        <br></br>
        <p>In this example, <code>useEffect</code> is called with a function that logs a message to the console every time the component renders. Since no dependency array is provided, the effect runs on every render.</p>
      </Section>

      <Section>
        <h2>Running useEffect Only Once</h2>
        <p>If you want an effect to run only once, similar to how <code>componentDidMount</code> works in class components, you can pass an empty dependency array (<code>[]</code>) as the second argument to <code>useEffect</code>.</p>
        <CodeSnippet language="jsx" code={`import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Empty array means run only once

  return <h2>Check the console!</h2>;
}

export default MyComponent;`} />
        <br></br>
        <p>This example will log the message only once when the component mounts for the first time.</p>
      </Section>

      <Section>
        <h2>Using useEffect for Data Fetching</h2>
        <p>One of the most common use cases for <code>useEffect</code> is fetching data from an API. Let's see how to use it to fetch data when a component mounts:</p>
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
      });
  }, []); // Runs only once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;`} />
        <br></br>
        <p>In this example, <code>useEffect</code> is used to fetch data from an API when the component mounts. The component will display a loading message until the data is fetched, and then display the data in a formatted way.</p>
      </Section>

      <Section>
        <h2>Cleaning Up Effects with useEffect</h2>
        <p>Sometimes, you may need to clean up or unsubscribe from certain effects to avoid memory leaks or unintended side effects. You can do this by returning a cleanup function inside the effect function.</p>
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

  return <h2>Check the console for the timer output.</h2>;
}

export default TimerComponent;`} />
        <br></br>
        <p>In this example, <code>useEffect</code> sets up a timer that logs a message every second. The cleanup function clears the timer when the component unmounts, preventing memory leaks.</p>
      </Section>

      <Section>
        <h2>Effect with Dependencies</h2>
        <p>You can specify dependencies for <code>useEffect</code>. The effect will only run if one of the values in the dependency array has changed since the last render. This helps to optimize performance and avoid unnecessary effects.</p>
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
        <br></br>
        <p>In this example, the effect only runs when the <code>count</code> state changes. This prevents unnecessary logging on every render.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>The <code>useEffect</code> hook is a powerful tool for handling side effects in your React function components. It enables data fetching, DOM manipulations, subscriptions, and other side effects while keeping your components clean and optimized. By managing dependencies and cleanup, you can ensure that effects run efficiently and correctly throughout the component's lifecycle.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.REACT_ROUTER_NAVIGATION} nextPage={RoutePath.FETCHING_DATA_API_CALLS} />
    </>
  );
}
