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
        <p>Conditional rendering refers to rendering different elements or components based on certain conditions. This is commonly used to show or hide elements dynamically, display different UI states, or optimize rendering performance.</p>
        <p>In React, conditional rendering works similarly to JavaScript conditions, using <code>if</code> statements, the ternary operator, logical operators, and <code>switch</code> statements.</p>
      </Section>

      <Section>
        <h2>Using If-Else for Conditional Rendering</h2>
        <p><code>if-else</code> is the most basic way to handle conditional rendering in React.</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } 
  return <button onClick={() => setIsLoggedIn(true)}>Log In</button>;
}

export default WelcomeMessage;`} />
        <br></br>
        <p><strong>Best Practice:</strong> Avoid using <code>if-else</code> directly inside JSX because it can make the code harder to read.</p>
      </Section>

      <Section>
        <h2>Using the Ternary Operator</h2>
        <p>The ternary operator is a concise way to handle conditional rendering.</p>
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
        <p><strong>Best Practice:</strong> Use the ternary operator for simple conditions, but avoid nesting multiple ternary expressions as they reduce readability.</p>
      </Section>

      <Section>
        <h2>Using Logical AND (&&) Operator</h2>
        <p>The <code>&&</code> operator can be used when you only need to render something **if a condition is true**, without an <code>else</code> case.</p>
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
        <p><strong>Important:</strong> If <code>hasNewNotifications</code> is <code>false</code>, React renders **nothing** instead of <code>false</code>.</p>
      </Section>

      <Section>
        <h2>Short-Circuiting with Logical OR (||)</h2>
        <p>You can use the **Logical OR (`||`) operator** to display a default value when a condition is <code>false</code>.</p>
        <CodeSnippet language="jsx" code={`function UserGreeting({ name }) {
  return <h1>Hello, {name || "Guest"}!</h1>;
}`} />
        <br></br>
        <p>Here, if <code>name</code> is **falsy** (e.g., `null`, `undefined`, `""`), it defaults to `"Guest"`.</p>
      </Section>

      <Section>
        <h2>Using a Switch Statement</h2>
        <p>For multiple conditions, using a **switch statement** can improve readability.</p>
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
        <p><strong>When to Use:</strong> Use the switch statement when dealing with multiple discrete cases.</p>
      </Section>

      <Section>
        <h2>Lazy Loading for Performance Optimization</h2>
        <p>Sometimes, components should only be loaded when needed. This can be done using React’s <code>lazy</code> and <code>Suspense</code> for **better performance**.</p>
        <CodeSnippet language="jsx" code={`import React, { lazy, Suspense, useState } from 'react';

const Profile = lazy(() => import('./Profile'));

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <button onClick={() => setShowProfile(true)}>Load Profile</button>
      {showProfile && (
        <Suspense fallback={<p>Loading...</p>}>
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default App;`} />
        <br></br>
        <p><strong>Why?</strong> Lazy loading improves initial page load time by **deferring the loading of components** until they are needed.</p>
      </Section>

      <Section>
        <h2>Conditional Rendering in JSX</h2>
        <p>Conditional rendering is a key part of JSX. Any valid JavaScript expression must be placed inside curly braces <code>{ }</code> for React to evaluate it.</p>
        <CodeSnippet language="jsx" code={`function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
    </div>
  );
}`} />
        <br></br>
        <p>Here, the message is displayed dynamically based on the <code>isLoggedIn</code> state.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>React provides multiple ways to conditionally render elements:</p>
        <ul>
          <li><strong>If-else</strong>: Best for complex logic outside JSX.</li>
          <li><strong>Ternary operator</strong>: Ideal for simple conditions.</li>
          <li><strong>Logical AND (`&&`)</strong>: Renders when the condition is true.</li>
          <li><strong>Logical OR (`||`)</strong>: Provides a fallback/default value.</li>
          <li><strong>Switch statement</strong>: Best for multiple conditions.</li>
          <li><strong>Lazy loading</strong>: Optimizes performance.</li>
        </ul>
        <p>Choosing the right approach depends on readability, maintainability, and performance needs.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.HANDLING_EVENTS} nextPage={RoutePath.LISTS_AND_KEYS} />
    </>
  );
}
