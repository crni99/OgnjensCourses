import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

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
        <p>In React, components are the fundamental building blocks of the application. They allow you to split the UI into smaller, reusable pieces. Each component is like a JavaScript function that can accept inputs (known as <strong>props</strong>) and returns a React element that describes how the UI should appear.</p>
        <p>There are two types of components in React:</p>
        <ul>
          <li><strong>Function components</strong>: These are JavaScript functions that return JSX (or React elements).</li>
          <li><strong>Class components</strong>: These are ES6 classes that extend <code>React.Component</code> and use the <code>render()</code> method to return JSX.</li>
        </ul>
      </Section>

      <Section>
        <h2>Creating a Simple Component</h2>
        <p>Let’s start by creating a simple functional component. Here’s an example of a basic component that returns a heading and a paragraph:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is my first component.</p>
    </div>
  );
}

export default MyComponent;`} />
        <br></br>
        <p>In this example, <code>MyComponent</code> is a function that returns JSX. This is a basic React functional component.</p>
      </Section>

      <Section>
        <h2>Passing Data with Props</h2>
        <p>Props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only, meaning that the child component cannot modify them.</p>
        <p>Let’s modify our component to accept a prop and display its value:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Welcome;`} />
        <br></br>
        <p>In this example, <code>Welcome</code> is a component that takes a prop called <code>name</code>. The value of the <code>name</code> prop is displayed inside the <code>h1</code> tag.</p>
      </Section>

      <Section>
        <h2>Using Components with Props</h2>
        <p>Now that we have a component that accepts a prop, let’s use it inside a parent component and pass data to it:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;`} />
        <br></br>
        <p>Here, the <code>App</code> component is the parent component, and it renders the <code>Welcome</code> component twice, passing different values for the <code>name</code> prop each time.</p>
      </Section>

      <Section>
        <h2>Props Are Immutable</h2>
        <p>Props are immutable, meaning that once they are set by the parent component, they cannot be modified by the child component. If you need to modify the data in a component, you should use <strong>state</strong> instead of props. This is an important concept in React, as it helps keep the data flow predictable and unidirectional.</p>
        <p>For example, if you want to change the greeting message, you should update the state in the parent component, not the prop in the child component.</p>
      </Section>

      <Section>
        <h2>Default Props</h2>
        <p>Sometimes, you might want to set default values for props if they are not provided by the parent component. You can do this by defining default props:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

// Set default props
Welcome.defaultProps = {
  name: 'Guest'
};

export default Welcome;`} />
        <br></br>
        <p>In this example, if the <code>name</code> prop is not passed from the parent component, the component will default to displaying "Guest".</p>
      </Section>

      <Section>
        <h2>Prop Types</h2>
        <p>React provides a way to validate the type of props that are passed to a component. This is done using the <code>prop-types</code> library. By specifying the expected types, React will warn you in development if the wrong type of prop is passed.</p>
        <p>Here’s an example of how to use prop types to validate props:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import PropTypes from 'prop-types';

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default Welcome;`} />
        <br></br>
        <p>In this example, <code>name</code> is expected to be a string, and React will issue a warning if <code>name</code> is not provided or is of the wrong type.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Components are the heart of React, and props are the mechanism through which data flows between components. Understanding how to create reusable components and pass data through props is essential for building dynamic React applications. Remember, props are immutable and should be used for passing data from parent to child components.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.UNDERSTANDING_JSX} nextPage={RoutePath.STATE_AND_LIFECYCLE} />
    </>
  );
}
