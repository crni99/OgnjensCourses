import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function AdvancedHooksUseMemoUseCallback() {
  return (
    <>
      <Lead
        title="Advanced Hooks: useMemo & useCallback"
        paragraph1="Learn how to optimize performance in React using the useMemo and useCallback hooks."
        paragraph2="In React, performance optimization can be crucial, especially when building complex applications. The `useMemo` and `useCallback` hooks help you memoize values and functions to prevent unnecessary re-renders, improving performance."
      />

      <Section>
        <h2>What is Memoization?</h2>
        <p>Memoization is a technique used to optimize performance by caching the results of expensive function calls. When a function is called with the same arguments, it can return the cached result instead of recalculating the value, thus saving computation time.</p>
        <p>In React, memoization helps avoid unnecessary re-rendering of components when certain values or functions haven't changed between renders. The `useMemo` and `useCallback` hooks are designed for this purpose.</p>
      </Section>

      <Section>
        <h2>useMemo Hook</h2>
        <p>The `useMemo` hook memoizes the result of a function. It only recomputes the result when one of the dependencies has changed. This is useful for optimizing performance in cases where a calculation is expensive or a value doesn’t change often.</p>
        <p>Here’s an example of how to use the `useMemo` hook:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    console.log('Performing expensive calculation...');
    return count * 2; // A sample expensive calculation
  }, [count]); // Recompute only when 'count' changes

  return (
    <div>
      <p>Expensive Calculation: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveCalculation;`} />
        <br></br>
        <p>In this example, the expensive calculation will only be re-executed when the `count` value changes. If `count` remains the same between renders, React will use the cached result from the previous render.</p>
      </Section>

      <Section>
        <h2>useCallback Hook</h2>
        <p>The `useCallback` hook is similar to `useMemo`, but it is specifically used for memoizing functions. It ensures that a function reference remains the same between renders unless its dependencies change.</p>
        <p>This can be useful when passing callback functions as props to child components to prevent unnecessary re-renders of those components when the parent re-renders.</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked', count);
  }, [count]); // Memoize handleClick function based on 'count'

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

export default ParentComponent;`} />
        <br></br>
        <p>In this example, the `handleClick` function is memoized using `useCallback`. The function will only be recreated when the `count` value changes. This ensures that the `ChildComponent` does not re-render unnecessarily when the parent component re-renders, unless the `handleClick` function changes.</p>
      </Section>

      <Section>
        <h2>When to Use useMemo & useCallback</h2>
        <p>Both `useMemo` and `useCallback` should be used sparingly, as they introduce additional complexity. They are most useful in situations where:</p>
        <ul>
          <li><strong>Expensive calculations:</strong> You need to avoid recalculating values unnecessarily (use `useMemo`).</li>
          <li><strong>Preventing unnecessary re-renders:</strong> You need to prevent child components from re-rendering due to unchanged props or functions (use `useCallback`).</li>
        </ul>
        <p>Use these hooks only when performance issues are observed. Premature optimization can lead to unnecessary complexity, so always profile your app before deciding to use them.</p>
      </Section>

      <Section>
        <h2>Common Pitfalls</h2>
        <p>While `useMemo` and `useCallback` are helpful, there are some common pitfalls to watch out for:</p>
        <ul>
          <li><strong>Overusing memoization:</strong> Memoizing everything can actually slow down your app rather than improving it. Only memoize values or functions that are expensive or have noticeable performance impact.</li>
          <li><strong>Incorrect dependencies:</strong> Always make sure the dependencies passed to `useMemo` and `useCallback` are correct. If the dependencies are not properly tracked, React might not re-run the memoized function when necessary, leading to bugs or stale values.</li>
        </ul>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>The `useMemo` and `useCallback` hooks are powerful tools for optimizing performance in React applications. They allow you to memoize values and functions, preventing unnecessary re-renders and expensive calculations. By using these hooks selectively, you can improve the performance of your application and make it more efficient, especially when dealing with large or complex data sets.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.INTRODUCTION_TO_HOOKS} nextPage={RoutePath.TESTING_REACT_COMPONENTS} />
    </>
  );
}
