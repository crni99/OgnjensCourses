import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function IntroductionToHooks() {
    return (
        <>
            <Lead
                title="Introduction to React Hooks"
                paragraph1="Learn the fundamentals of React Hooks and how they allow you to use state and lifecycle features in functional components."
                paragraph2="Before React Hooks, functional components were stateless, meaning they couldn't manage state or side effects. With the introduction of Hooks in React 16.8, functional components can now have their own state and lifecycle methods, making them as powerful as class components."
            />

            <Section>
                <h2>What Are React Hooks?</h2>
                <p>React Hooks are functions that let you use React features in functional components. They allow you to manage state, side effects, context, refs, and more, all without the need for class components. Hooks enable functional components to have the same capabilities as class components, but with a simpler and more concise syntax.</p>
                <p>Some of the most commonly used hooks are:</p>
                <ul>
                    <li><strong>useState</strong> – For managing state in functional components.</li>
                    <li><strong>useEffect</strong> – For performing side effects like data fetching, subscriptions, or manually changing the DOM.</li>
                    <li><strong>useContext</strong> – For accessing and updating context values.</li>
                    <li><strong>useReducer</strong> – For managing complex state logic.</li>
                    <li><strong>useRef</strong> – For creating references to DOM elements or values that persist across renders.</li>
                    <li><strong>useMemo</strong> and <strong>useCallback</strong> – For memoizing values and functions to optimize performance.</li>
                </ul>
            </Section>

            <Section>
                <h2>Why Use Hooks?</h2>
                <p>Before Hooks, class components were required to handle state and lifecycle methods. However, functional components were simpler and easier to write. With Hooks, you can now write more concise and readable functional components without losing access to important features like state, side effects, or context.</p>
                <p>Here are some reasons why you should use Hooks:</p>
                <ul>
                    <li><strong>Simpler Syntax:</strong> Functional components with hooks are easier to understand and manage compared to class components.</li>
                    <li><strong>Better Reusability:</strong> Hooks make it easier to reuse stateful logic between components.</li>
                    <li><strong>Improved Performance:</strong> Hooks like <code>useMemo</code> and <code>useCallback</code> help optimize your app’s performance by memoizing values and functions.</li>
                    <li><strong>Cleaner Code:</strong> Hooks reduce the need for boilerplate code, resulting in fewer lines of code and more maintainable components.</li>
                </ul>
            </Section>

            <Section>
                <h2>The useState Hook</h2>
                <p>The <code>useState</code> hook allows you to add state to your functional components. It returns an array with two elements: the current state value and a function to update that state value.</p>
                <p>Here’s how to use the <code>useState</code> hook:</p>
                <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;`} />
                <br></br>
                <p>In the example above, we use <code>useState(0)</code> to initialize the state value <code>count</code> to 0. The <code>setCount</code> function updates the state value when the button is clicked.</p>
            </Section>

            <Section>
                <h2>The useEffect Hook</h2>
                <p>The <code>useEffect</code> hook allows you to perform side effects in your functional components. Side effects are actions like data fetching, setting up a subscription, or manually changing the DOM, and they were previously only possible in class component lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.</p>
                <p>The <code>useEffect</code> hook runs after every render by default, but you can control when it runs by passing a dependency array as a second argument. If the array is empty, the effect runs only once, similar to <code>componentDidMount</code>.</p>
                <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means the effect runs only once after the first render

  if (!data) {
    return <p>Loading...</p>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default FetchData;`} />
                <br></br>
                <p>In this example, <code>useEffect</code> is used to fetch data from an API when the component first renders. Since the dependency array is empty, the effect runs only once, similar to <code>componentDidMount</code>.</p>
            </Section>

            <Section>
                <h2>Rules of Hooks</h2>
                <p>There are a few important rules you need to follow when using hooks:</p>
                <ul>
                    <li><strong>Only call hooks at the top level:</strong> Do not call hooks inside loops, conditions, or nested functions. They must be called in the same order each time a component renders.</li>
                    <li><strong>Only call hooks from React functions:</strong> You should only call hooks inside functional components or custom hooks. Do not call them from regular JavaScript functions.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>React Hooks are a powerful addition to the React ecosystem, enabling functional components to handle state, side effects, and more. They allow you to write cleaner, more concise code and provide a better developer experience. By mastering hooks, you can unlock the full potential of React's functional components.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.HANDLING_ERRORS_BOUNDARIES} nextPage={RoutePath.ADVANCED_HOOKS_USEMEMO_USECALLBACK} />
        </>
    );
}
