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
                paragraph1="React Hooks were introduced in React 16.8, allowing functional components to use features like state and lifecycle methods without needing to write class components."
                paragraph2="Hooks revolutionized the way we write React components. They provide a simpler, more intuitive syntax and enable functional components to handle state, side effects, context, and more, making them just as powerful as class components."
            />

            <Section>
                <h2>What Are React Hooks?</h2>
                <p>React Hooks are functions that allow you to “hook into” React features from functional components. They enable state management, side effects, context usage, and other lifecycle-related actions, all without the need for class components.</p>
                <p>Some of the most commonly used hooks include:</p>
                <ul>
                    <li><strong>useState</strong> – Allows functional components to have state.</li>
                    <li><strong>useEffect</strong> – Handles side effects such as fetching data, updating the DOM, or subscribing to external events.</li>
                    <li><strong>useContext</strong> – Accesses values from React’s context API.</li>
                    <li><strong>useReducer</strong> – Manages complex state logic, especially for larger applications.</li>
                    <li><strong>useRef</strong> – Creates a reference to DOM elements or stores values across renders.</li>
                    <li><strong>useMemo</strong> & <strong>useCallback</strong> – Optimizes performance by memoizing values or functions to avoid unnecessary recalculations.</li>
                </ul>
            </Section>

            <Section>
                <h2>Why Use Hooks?</h2>
                <p>Before hooks, functional components were stateless, while class components were needed to handle state and side effects. Hooks allow you to achieve the power of class components in a simpler and more concise way.</p>
                <p>Here are several advantages of using hooks:</p>
                <ul>
                    <li><strong>Simpler Syntax:</strong> Write more readable, less verbose code with functional components and hooks.</li>
                    <li><strong>Better Reusability:</strong> Hooks make it easy to extract and reuse stateful logic across different components.</li>
                    <li><strong>Improved Performance:</strong> Hooks like <code>useMemo</code> and <code>useCallback</code> enable fine-grained performance optimization.</li>
                    <li><strong>Cleaner Code:</strong> Hooks reduce the need for boilerplate code and lifecycle methods found in class components, making the codebase more maintainable.</li>
                </ul>
            </Section>

            <Section>
                <h2>The <code>useState</code> Hook</h2>
                <p>The <code>useState</code> hook adds state to functional components. It returns an array with two elements: the current state value and a function to update the state value.</p>
                <p>Example usage of the <code>useState</code> hook:</p>
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
                <></>
                <p>In this example, we initialize the state with <code>useState(0)</code>, where <code>count</code> is the current state value, and <code>setCount</code> is the function that updates the state.</p>
            </Section>

            <Section>
                <h2>The <code>useEffect</code> Hook</h2>
                <p>The <code>useEffect</code> hook lets you perform side effects in your functional components. Side effects include things like data fetching, DOM manipulation, or even subscribing to external data sources.</p>
                <p>By default, <code>useEffect</code> runs after every render. You can control when it runs by passing an array of dependencies as the second argument. If this array is empty, it runs only once, after the initial render.</p>
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
                <></>
                <p>In this example, <code>useEffect</code> is used to fetch data from an API. The empty dependency array ensures that this effect runs only once, just like <code>componentDidMount</code> in class components.</p>
            </Section>

            <Section>
                <h2>Rules of Hooks</h2>
                <p>There are two main rules you need to follow when using hooks:</p>
                <ul>
                    <li><strong>Only call hooks at the top level:</strong> Do not call hooks inside loops, conditions, or nested functions. They must be called in the same order each time the component renders.</li>
                    <li><strong>Only call hooks from React functions:</strong> Hooks should only be called inside functional components or custom hooks, not regular JavaScript functions.</li>
                </ul>
                <p>These rules ensure that hooks work correctly, maintaining consistency and predictability in your application.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>React Hooks offer a simple yet powerful way to work with state, side effects, and more in functional components. They enable cleaner code, improve performance, and enhance the reusability of logic. By mastering hooks, you can unlock the full potential of React and create more efficient, maintainable applications.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.LIFTING_STATE_UP} nextPage={RoutePath.WORKING_WITH_EFFECTS_USEEFFECT} />
        </>
    );
}
