import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function HandlingEvents() {
  return (
    <>
      <Lead
        title="Handling Events"
        paragraph1="Learn how to handle user interactions, such as clicks, form submissions, and keyboard inputs, in React components. React provides a way to listen for events and trigger functions in response, enabling dynamic behavior in your application."
        paragraph2="Event handling is a crucial part of building interactive applications. React provides a declarative approach to handling events, allowing you to manage interactions with the UI in a clean and organized way."
      />

      <Section>
        <h2>What are Events in React?</h2>
        <p>In React, an event is any user interaction with the UI, such as clicking a button, submitting a form, or typing in an input field. React allows you to listen for these events and execute functions in response.</p>
        <p>React's event system is similar to the traditional DOM event handling, but with a few key differences:</p>
        <ul>
          <li>Events are named using camelCase (e.g., <code>onClick</code>, <code>onChange</code>).</li>
          <li>Event handlers are passed as functions, not strings of code.</li>
          <li>React handles the event delegation internally for better performance.</li>
        </ul>
      </Section>

      <Section>
        <h2>Handling a Click Event</h2>
        <p>To handle a click event in React, you simply need to pass a function to the <code>onClick</code> attribute of an element:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;`} />
        <></>
        <p>In this example, the <code>handleClick</code> function is triggered when the user clicks the button. The function updates the <code>count</code> state, which re-renders the component with the updated value.</p>
      </Section>

      <Section>
        <h2>Passing Arguments to Event Handlers</h2>
        <p>Sometimes, you may need to pass arguments to an event handler. React allows you to do this by using an anonymous function or an arrow function:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function GreetUser() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Hello, ' + name + '!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Greet</button>
    </form>
  );
}

export default GreetUser;`} />
        <></>
        <p>In this example, the <code>handleChange</code> function updates the <code>name</code> state when the input value changes. The <code>handleSubmit</code> function is triggered when the form is submitted, and it alerts a greeting message with the entered name.</p>
      </Section>

      <Section>
        <h2>Handling Form Events</h2>
        <p>Forms are common in many applications, and React makes handling form submissions simple. You can listen to the <code>onSubmit</code> event on a form element to handle form submission:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function FormExample() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! Email: " + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;`} />
        <></>
        <p>In this form example, the <code>handleEmailChange</code> function updates the email state, and the <code>handleSubmit</code> function handles the form submission by preventing the default browser behavior and displaying an alert.</p>
      </Section>

      <Section>
        <h2>Event Pooling in React</h2>
        <p>In React, events are pooled, meaning that the event object is reused across multiple events. As a result, the event object will be nullified after the event handler runs. This can be problematic if you need to access the event object asynchronously.</p>
        <p>To solve this issue, React provides a mechanism where you can explicitly use the <code>event.persist()</code> method to retain the event object for later use:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function PersistEventExample() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    event.persist();
    setTimeout(() => {
      setMessage('Event persisted: ' + event.target.value);
    }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>{message}</p>
    </div>
  );
}

export default PersistEventExample;`} />
        <></>
        <p>In this example, the <code>event.persist()</code> method ensures that the event object remains available for the asynchronous operation inside the <code>setTimeout</code> function.</p>
      </Section>

      <Section>
        <h2>Event Binding</h2>
        <p>In React, event handlers are typically defined as methods inside components. However, if you use regular JavaScript functions or methods, they may lose the correct <code>this</code> context, causing issues.</p>
        <p>To ensure the event handler has the correct context, you need to bind the event handler method to the component instance. In class components, this can be done in the constructor:</p>
        <CodeSnippet language="jsx" code={`import React, { Component } from 'react';

class EventBindingExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Click Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default EventBindingExample;`} />
        <></>
        <p>In this example, the <code>handleClick</code> method is bound to the component instance in the constructor, ensuring that it has access to the correct <code>this</code> context when the button is clicked.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Handling events in React is straightforward and intuitive. React's declarative approach to event handling allows you to manage user interactions and trigger updates to your components with minimal code. Whether you're dealing with click events, form submissions, or other interactions, React provides the tools you need to make your application interactive and responsive.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.STATE_AND_LIFECYCLE} nextPage={RoutePath.CONDITIONAL_RENDERING} />
    </>
  );
}
