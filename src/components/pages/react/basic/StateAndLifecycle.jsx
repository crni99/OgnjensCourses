import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

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
        <p>State is similar to props, but while props are immutable and passed down from parent to child components, state is managed within the component itself and can be changed by the component. This allows a component to respond to user input or other events dynamically, providing an interactive experience for the user.</p>
        <p>Understanding how to use state is crucial for creating interactive applications, such as forms, counters, or dashboards.</p>
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
        <></>
        <p>In this example, the <code>useState(0)</code> hook initializes a state variable called <code>count</code> with an initial value of <code>0</code>. The <code>setCount</code> function is used to update the value of <code>count</code>, and each time the button is clicked, the component re-renders with the updated state.</p>
        <p><strong>Note:</strong> React guarantees that the component will re-render every time the state changes. This ensures that the UI is always in sync with the state of the component.</p>
      </Section>

      <Section>
        <h2>Understanding setState and Re-renders</h2>
        <p>When you update state using <code>setState</code> (or the state updater function from <code>useState</code>), React triggers a re-render of the component. This is how React ensures that the UI is in sync with the current state of the application.</p>
        <p>However, React optimizes the re-render process. It only re-renders the component that has changed state, and it does so efficiently by comparing the old and new state (a process called <strong>reconciliation</strong>). This process is efficient because React minimizes the number of changes it needs to apply to the DOM.</p>
        <p>Re-renders can be triggered by user actions, such as form submissions or button clicks, but they can also occur when props or state change in child components. React makes sure that the app’s UI remains consistent even as data changes.</p>
      </Section>

      <Section>
        <h2>Lifecycle Methods</h2>
        <p>In class components, React provides lifecycle methods that allow you to run code at specific points during the component's life. These methods include:</p>
        <ul>
          <li><strong>componentDidMount</strong>: Called after the component is rendered to the screen. It is commonly used for initial API calls or setting up subscriptions.</li>
          <li><strong>componentDidUpdate</strong>: Called when the component’s state or props change. It’s useful for performing side effects in response to state or prop changes.</li>
          <li><strong>componentWillUnmount</strong>: Called before the component is removed from the screen. It’s often used to clean up resources like timers or subscriptions to avoid memory leaks.</li>
        </ul>
        <p>While these methods are used in class components, React’s functional components can achieve similar results using the <code>useEffect</code> hook.</p>
        <p>Understanding these lifecycle methods is essential for tasks like fetching data from APIs, handling timers, or cleaning up event listeners when the component is no longer needed.</p>
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
        <></>
        <p>In this example, the <code>useEffect</code> hook runs after the component mounts (because of the empty dependency array <code>[]</code>). It fetches data from an API and updates the component’s state with the response. This is ideal for fetching data from an external source or making side effects only when the component is mounted.</p>
        <p>If you want to run the effect when specific values change, you can pass those values in the dependency array. For example, if you wanted to fetch data when the value of a specific state variable changes, you would pass that variable in the array. This ensures that the side effect runs only when necessary.</p>
        <p><strong>Example:</strong> If you're listening for changes to a form input, you can pass the form value as a dependency to the <code>useEffect</code> hook, triggering the effect whenever the form value changes.</p>
      </Section>

      <Section>
        <h2>State and Lifecycle Together</h2>
        <p>When using state and lifecycle methods (or hooks in functional components), React allows you to manage both the data and behavior of components over time. For example, you can store data in the state and use lifecycle methods or <code>useEffect</code> to fetch or modify that data.</p>
        <p>Here’s an example combining both state and lifecycle management using <code>useEffect</code>:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    
    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
    </div>
  );
}

export default Timer;`} />
        <></>
        <p>In this example, the <code>Timer</code> component keeps track of the time in the state and updates it every second using <code>setInterval</code>. The <code>useEffect</code> hook sets up the timer when the component mounts and ensures it gets cleaned up when the component unmounts to prevent memory leaks.</p>
        <p><strong>Why Cleanup?</strong> The cleanup function is important for preventing memory leaks and side effects when the component is removed from the DOM, such as when switching between different pages or components.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Understanding state and lifecycle methods (or hooks in functional components) is essential to building dynamic, interactive React applications. State allows you to manage and update component data, while lifecycle methods or the <code>useEffect</code> hook help you control side effects and component behavior over time. By combining state with lifecycle management, you can create responsive and efficient React apps that provide real-time updates, data fetching, and more.</p>
        <p>React’s flexibility with state management and lifecycle methods makes it a powerful tool for building scalable applications. As you continue to work with React, you’ll get better at optimizing components, managing data flow, and creating seamless user experiences.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.COMPONENTS_AND_PROPS} nextPage={RoutePath.HANDLING_EVENTS} />
    </>
  );
}
