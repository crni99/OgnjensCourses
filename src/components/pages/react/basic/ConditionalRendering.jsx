import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function ConditionalRendering() {
  return (
    <>
      <Lead
        title="Conditional Rendering"
        paragraph1="Learn how to render components or elements conditionally in React. This allows you to display different content depending on the state, props, or conditions, enabling you to create more dynamic and responsive user interfaces."
        paragraph2="Conditional rendering is an essential technique in React, as it allows you to display different UI elements based on the application's state or user actions. React offers several ways to handle conditional rendering, each suited to different use cases."
      />

      <Section>
        <h2>What is Conditional Rendering?</h2>
        <p>Conditional rendering refers to the ability to render different elements based on certain conditions. This is commonly used to render components, messages, or UI elements based on the current state of your application or user input.</p>
        <p>In React, conditional rendering works similarly to how you might handle conditions in JavaScript: using <code>if</code> statements, ternary operators, and logical operators like <code>&&</code>.</p>
      </Section>

      <Section>
        <h2>Using If-Else for Conditional Rendering</h2>
        <p>One of the most straightforward ways to handle conditional rendering in React is using an <code>if-else</code> statement inside the render method or functional component.</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <button onClick={() => setIsLoggedIn(true)}>Log In</button>;
  }
}

export default WelcomeMessage;`} />
        <br></br>
        <p>In this example, if the <code>isLoggedIn</code> state is true, the component will display a welcome message; otherwise, it will show a login button. This logic is implemented using a standard <code>if-else</code> statement.</p>
      </Section>

      <Section>
        <h2>Using Ternary Operator</h2>
        <p>The ternary operator is another common way to handle conditional rendering in React. It’s a concise way of writing an <code>if-else</code> statement. The syntax is:</p>
        <CodeSnippet language="jsx" code={`condition ? expressionIfTrue : expressionIfFalse`} />
        <br></br>
        <p>Here’s an example of using the ternary operator in React:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
    </div>
  );
}

export default WelcomeMessage;`} />
        <br></br>
        <p>In this example, the ternary operator checks if <code>isLoggedIn</code> is true. If so, it renders a welcome message, otherwise, it shows the login button.</p>
      </Section>

      <Section>
        <h2>Using Logical AND (&&) Operator</h2>
        <p>The logical AND operator can be useful when you want to render an element only if a certain condition is true, without needing an <code>else</code> case. Here's an example:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function Notifications() {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  return (
    <div>
      {hasNewNotifications && <p>You have new notifications!</p>}
      <button onClick={() => setHasNewNotifications(!hasNewNotifications)}>
        Toggle Notifications
      </button>
    </div>
  );
}

export default Notifications;`} />
        <br></br>
        <p>In this example, if <code>hasNewNotifications</code> is true, the message "You have new notifications!" will be rendered. If the condition is false, nothing will be rendered. This is a compact and readable way to handle conditions without an <code>else</code> block.</p>
      </Section>

      <Section>
        <h2>Using Switch Statement</h2>
        <p>If you have multiple conditions to check, you can use a <code>switch</code> statement for more complex conditional rendering.</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function StatusMessage() {
  const [status, setStatus] = useState("loading");

  const renderMessage = () => {
    switch (status) {
      case "loading":
        return <p>Loading...</p>;
      case "error":
        return <p>Error occurred!</p>;
      case "success":
        return <p>Data loaded successfully!</p>;
      default:
        return <p>No status available.</p>;
    }
  };

  return (
    <div>
      {renderMessage()}
      <button onClick={() => setStatus("success")}>Simulate Success</button>
    </div>
  );
}

export default StatusMessage;`} />
        <br></br>
        <p>In this example, the <code>switch</code> statement checks the current <code>status</code> and renders the appropriate message. This approach is useful when you have multiple possible outcomes.</p>
      </Section>

      <Section>
        <h2>Conditional Rendering in JSX</h2>
        <p>Conditional rendering is an essential part of JSX, and as you can see, it can be implemented in many ways. It's important to note that when using JSX, the conditional logic must be placed inside the curly braces <code>{ }</code> in order for the expressions to be evaluated correctly.</p>
        <p>For example:</p>
        <CodeSnippet language="jsx" code={`function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
    </div>
  );
}`} />
        <br></br>
        <p>In this example, the message is displayed based on the value of <code>isLoggedIn</code>, using the ternary operator inside the JSX expression.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Conditional rendering is a powerful feature in React that allows you to display different UI elements based on the current application state or user input. React provides several methods for conditional rendering, including <code>if-else</code>, the ternary operator, the logical AND operator, and <code>switch</code> statements, making it flexible to handle different use cases.</p>
        <p>By mastering conditional rendering, you can create more dynamic and responsive applications that provide personalized content to users based on their interactions or application state.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.HANDLING_EVENTS} nextPage={RoutePath.LISTS_AND_KEYS} />
    </>
  );
}
