import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function ComponentsAndProps() {
  return (
    <>
      <Lead
        title="Components and Props"
        paragraph1="Learn how to create reusable components in React and pass data to them using props. Components are the building blocks of a React application, and props allow data to flow from parent to child components."
        paragraph2="Components are the core of React. They allow you to break down the UI into independent, reusable pieces. Props are used to pass data to these components, enabling dynamic rendering and interaction."
      />

      <Section>
        <h2>What Are React Components?</h2>
        <p>In React, components are the fundamental building blocks of the application. They allow you to split the UI into smaller, reusable pieces. Each component is like a JavaScript function that accepts inputs (known as <strong>props</strong>) and returns a React element describing how the UI should appear.</p>
        <p>There are two types of components in React:</p>
        <ul>
          <li>
            <strong>Function components</strong>: The most common type of React components. They are JavaScript functions that return JSX and can use hooks like <code>useState</code> and <code>useEffect</code>.
          </li>
          <li>
            <strong>Class components</strong>: These were commonly used before hooks were introduced. They extend <code>React.Component</code> and use the <code>render()</code> method.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Passing Data with Props</h2>
        <p>Props (short for "properties") are used to pass data from a parent component to a child component. Props are **read-only**, meaning that the child component cannot modify them.</p>

        <p>Here’s an example of a functional component receiving a single prop:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;`} />
        
        <p>In this example, <code>Welcome</code> accepts a prop called <code>name</code>, which is displayed inside the <code>h1</code> tag.</p>
      </Section>

      <Section>
        <h2>Destructuring Props</h2>
        <p>Instead of using <code>props.name</code>, you can destructure props directly in the function parameter:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`} />
        
        <p>This makes the code cleaner and more readable.</p>
      </Section>

      <Section>
        <h2>Passing Multiple Props</h2>
        <p>You can pass multiple props to a component, just like function arguments.</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function UserInfo({ name, age }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;`} />
        
        <p>And use it in a parent component:</p>
        <CodeSnippet language="jsx" code={`import UserInfo from './UserInfo';

function App() {
  return (
    <div>
      <UserInfo name="Alice" age={25} />
      <UserInfo name="Bob" age={30} />
    </div>
  );
}

export default App;`} />
      </Section>

      <Section>
        <h2>The Children Prop</h2>
        <p>The <code>children</code> prop allows a component to wrap and display other components or elements inside it.</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;`} />
        
        <p>Usage example:</p>
        <CodeSnippet language="jsx" code={`import Card from './Card';

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is some content inside the card.</p>
    </Card>
  );
}

export default App;`} />
        
        <p>In this example, <code>children</code> represents the content inside <code>Card</code>.</p>
      </Section>

      <Section>
        <h2>Default Props with ES6 Syntax</h2>
        <p>You can set default values for props using function parameter defaults:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Welcome({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`} />
        
        <p>This approach is an alternative to using <code>defaultProps</code>.</p>
      </Section>

      <Section>
        <h2>Props Are Immutable</h2>
        <p>Props are immutable, meaning that once they are set by the parent component, they **cannot be modified** by the child component.</p>
        <p>If you need to modify data in a component, you should use **state** instead of props.</p>
      </Section>

      <Section>
        <h2>Prop Types</h2>
        <p>React provides a way to validate the type of props using the <code>prop-types</code> liary.</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import PropTypes from 'prop-types';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default Welcome;`} />
        
        <p>In this example, <code>name</code> is required and must be a string.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>React components are reusable building blocks, and props allow data to be passed between them. Understanding how to use props effectively is key to developing dynamic applications. Always remember:</p>
        <ul>
          <li>Props are <strong>immutable</strong> and should not be modified by the child component.</li>
          <li>Use <strong>destructuring</strong> for cleaner code.</li>
          <li>Use <strong>children prop</strong> for wrapping content.</li>
          <li>Use <strong>default props</strong> to handle missing values.</li>
          <li>Use <strong>prop-types</strong> to ensure correct prop types.</li>
        </ul>
      </Section>

      <PageNavigation prevPage={RoutePath.UNDERSTANDING_JSX} nextPage={RoutePath.STATE_AND_LIFECYCLE} />
    </>
  );
}
