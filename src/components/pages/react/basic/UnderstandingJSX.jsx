import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function UnderstandingJSX() {
    return (
        <>
            <Lead
                title="Understanding JSX"
                paragraph1="Learn the basics of JSX (JavaScript XML), a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. JSX makes it easier to work with React components by blending HTML structure with JavaScript logic."
                paragraph2="JSX is one of the core features that makes React so powerful. It provides a concise way to write UI components while maintaining the full power of JavaScript. Let’s dive into how JSX works and how you can use it in React."
            />

            <Section>
                <h2>What is JSX?</h2>
                <p>JSX is a syntax extension for JavaScript that looks similar to HTML but has the full power of JavaScript. It is commonly used in React to describe the UI structure of your components. Instead of using traditional JavaScript methods to create elements, JSX allows you to write them directly in your code.</p>
                <p>JSX is not required to use React, but it is highly recommended because it makes the code more readable and easier to write.</p>
            </Section>

            <Section>
                <h2>Basic JSX Example</h2>
                <p>Here’s a basic example of JSX in a React component:</p>
                <CodeSnippet language="jsx" code={`import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a simple JSX example inside a React component.</p>
    </div>
  );
}

export default MyComponent;`} />
                <></>
                <p>This JSX code looks like HTML but is actually JavaScript that React can render.</p>
            </Section>

            <Section>
                <h2>Embedding JavaScript Expressions in JSX</h2>
                <p>In JSX, you can embed JavaScript expressions inside curly aces `{ }`. For example, if you want to display a variable inside JSX, you can do it like this:</p>
                <CodeSnippet language="jsx" code={`import React from 'react';

function MyComponent() {
  const greeting = "Hello, world!";
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default MyComponent;`} />
                <></>
                <p>The value of the `greeting` variable will be displayed inside the <code>h1</code> tag when the component is rendered.</p>
            </Section>

            <Section>
                <h2>JSX Elements Are Just Objects</h2>
                <p>JSX code is not directly rendered to the browser. React takes the JSX code and transforms it into regular JavaScript objects. For example, the JSX code:</p>
                <CodeSnippet language="jsx" code={`const element = <h1>Hello, world!</h1>;`} />
                <></>
                <p>is actually converted to something like:</p>
                <CodeSnippet language="javascript" code={`const element = React.createElement('h1', null, 'Hello, world!');`} />
                <></>
                <p>So, even though we write HTML-like code, React turns it into JavaScript objects under the hood.</p>
            </Section>

            <Section>
                <h2>JSX is Case Sensitive</h2>
                <p>JSX is case-sensitive, so you must use the correct case for HTML elements and React components:</p>
                <ul>
                    <li><strong>HTML elements</strong> are lowercase, e.g., <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>.</li>
                    <li><strong>React components</strong> must be capitalized, e.g., <code>&lt;MyComponent /&gt;</code>.</li>
                </ul>
                <p>Using lowercase for components will cause React to treat them as HTML elements, leading to errors.</p>
            </Section>

            <Section>
                <h2>JSX and Attributes</h2>
                <p>In JSX, you can pass attributes to elements just like you would in HTML, but some of them are different. For example, `class` in HTML is written as `className` in JSX because `class` is a reserved keyword in JavaScript:</p>
                <CodeSnippet language="jsx" code={`<div className="my-class">Hello, JSX!</div>`} />
                <></>
                <p>Similarly, attributes like <code>for</code> in HTML are written as <code>htmlFor</code> in JSX:</p>
                <CodeSnippet language="jsx" code={`<label htmlFor="input">Label</label>`} />
            </Section>

            <Section>
                <h2>JSX and Comments</h2>
                <p>In JSX, comments are written differently from regular JavaScript. You must use curly aces and the standard JavaScript comment syntax:</p>
                <CodeSnippet language="jsx" code={`// This is a comment in JSX
{/* This is a comment inside JSX */}`} />
                <></>
                <p>Regular JavaScript comments don’t work inside JSX, so make sure to use the correct syntax when commenting inside JSX code blocks.</p>
            </Section>

            <Section>
                <h2>JSX vs HTML</h2>
                <p>While JSX looks similar to HTML, there are a few key differences:</p>
                <ul>
                    <li>JSX uses <code>className</code> instead of <code>class</code> for assigning classes.</li>
                    <li>JSX uses <code>htmlFor</code> instead of <code>for</code> to associate labels with form controls.</li>
                    <li>Attributes like <code>style</code> are passed as objects instead of strings in JSX.</li>
                </ul>
                <p>These differences are due to the underlying JavaScript implementation of JSX, which ensures compatibility with JavaScript features.</p>
            </Section>

            <Section>
                <h2>JSX Best Practices</h2>
                <p>Here are some best practices to follow when using JSX:</p>
                <ul>
                    <li>Use self-closing tags for elements that don’t have children, e.g., <code>&lt;img /&gt;</code>, <code>&lt; /&gt;</code>.</li>
                    <li>Always return a single parent element in a component. You can use <code>&lt;div&gt;</code>, <code>&lt;Fragment&gt;</code>, or React’s <code>&lt;&gt; &lt;/&gt;</code> shorthand to wrap multiple elements.</li>
                    <li>Indent your JSX properly to keep it readable and maintainable.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>JSX is a powerful tool that makes React development much more intuitive. It allows you to mix JavaScript and HTML-like syntax, enabling you to build rich UI components with ease. Keep experimenting with JSX, and you’ll quickly get comfortable with its syntax and concepts.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.REACT_BASICS} nextPage={RoutePath.COMPONENTS_AND_PROPS} />
        </>
    );
}
