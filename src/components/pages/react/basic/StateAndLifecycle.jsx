import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function StateAndLifecycle() {
  return (
    <>
      <Lead
        title="State and Lifecycle"
        paragraph1="Learn how to manage and update component data using state, and how to perform side effects using lifecycle methods. State allows React components to keep track of dynamic data, while lifecycle methods control component behavior during different stages of its existence."
        paragraph2="State is one of the most powerful features of React. It allows components to manage and update their own data, making them dynamic and interactive. In addition, React provides lifecycle methods that give you control over what happens when a component is created, updated, or destroyed."
      />

      <Section>
        <h2>What is State?</h2>
        <p>In React, <strong>state</strong> refers to the data that can change over time and affect the rendering of a component. Each component can have its own state, and when the state changes, React re-renders the component to reflect the updated state in the UI.</p>
        <p>State is similar to props, but while props are immutable and passed down from parent to child components, state is managed within the component itself and can be changed by the component.</p>
      </Section>

      <Section>
        <h2>Creating State in a Component</h2>
        <p>To add state to a React component, we use the <code>useState</code> hook in functional components. Here’s how you can declare and update state in a component:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`} />
        <br></br>
        <p>In this example, the <code>useState(0)</code> hook initializes a state variable called <code>count</code> with an initial value of <code>0</code>. The <code>setCount</code> function is used to update the value of <code>count</code>, and each time the button is clicked, the component re-renders with the updated state.</p>
      </Section>

      <Section>
        <h2>Understanding setState and Re-renders</h2>
        <p>When you update state using <code>setState</code> (or the state updater function from <code>useState</code>), React triggers a re-render of the component. This is how React ensures that the UI is in sync with the current state of the application.</p>
        <p>However, React optimizes the re-render process. It only re-renders the component that has changed state, and it does so efficiently by comparing the old and new state (a process called <strong>reconciliation</strong>).</p>
      </Section>

      <Section>
        <h2>Lifecycle Methods</h2>
        <p>In class components, React provides lifecycle methods that allow you to run code at specific points during the component's life. These methods include:</p>
        <ul>
          <li><strong>componentDidMount</strong>: Called after the component is rendered to the screen. It is commonly used for initial API calls or setting up subscriptions.</li>
          <li><strong>componentDidUpdate</strong>: Called when the component’s state or props change. It’s useful for performing side effects in response to state or prop changes.</li>
          <li><strong>componentWillUnmount</strong>: Called before the component is removed from the screen. It’s often used to clean up resources like timers or subscriptions.</li>
        </ul>
        <p>In functional components, React provides a hook called <code>useEffect</code> to handle side effects that would traditionally go in lifecycle methods.</p>
      </Section>

      <Section>
        <h2>Using useEffect in Functional Components</h2>
        <p>The <code>useEffect</code> hook allows you to perform side effects in functional components, such as fetching data, setting up subscriptions, and manually changing the DOM. It is similar to the lifecycle methods in class components, but it combines multiple lifecycle events into a single API.</p>
        <p>The syntax for <code>useEffect</code> is as follows:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetcher;`} />
        <br></br>
        <p>In this example, the <code>useEffect</code> hook runs after the component mounts (because of the empty dependency array <code>[]</code>). It fetches data from an API and updates the component’s state with the response.</p>
        <p>If you want to run the effect when specific values change, you can pass those values in the dependency array. For example, if you wanted to fetch data when the value of a specific state variable changes, you would pass that variable in the array.</p>
      </Section>

      <Section>
        <h2>State and Lifecycle Together</h2>
        <p>When using state and lifecycle methods (or hooks), React allows you to manage both the data and behavior of components over time. For example, you can store data in the state and use lifecycle methods or <code>useEffect</code> to fetch or modify that data.</p>
        <p>Here’s an example combining both state and lifecycle management using <code>useEffect</code>:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    
    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
    </div>
  );
}

export default Timer;`} />
        <br></br>
        <p>In this example, the <code>Timer</code> component keeps track of the time in the state and updates it every second using <code>setInterval</code>. The <code>useEffect</code> hook sets up the timer and cleans it up when the component unmounts to prevent memory leaks.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Understanding state and lifecycle methods (or hooks in functional components) is essential to building dynamic, interactive React applications. State allows you to manage and update component data, while lifecycle methods or the <code>useEffect</code> hook help you control side effects and component behavior over time. By combining state with lifecycle management, you can create responsive and efficient React apps.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.COMPONENTS_AND_PROPS} nextPage={RoutePath.HANDLING_EVENTS} />
    </>
  );
}
