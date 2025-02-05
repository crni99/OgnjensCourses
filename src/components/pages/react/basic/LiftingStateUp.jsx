import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function LiftingStateUp() {
  return (
    <>
      <Lead
        title="Lifting State Up"
        paragraph1="Learn how to share state between components in React by lifting state up to a common ancestor."
        paragraph2="In React, data can be passed between components using props. However, when multiple components need to share state, we can lift the state up to their nearest common ancestor to manage and share that state."
      />

      <Section>
        <h2>What is Lifting State Up?</h2>
        <p>Lifting state up refers to the process of moving state to the closest common ancestor of components that need to share it. By lifting state up, you can pass state as props to child components, enabling them to access and modify the shared state.</p>
        <p>This concept is especially useful when multiple components need to interact with the same piece of state, such as when two sibling components need to communicate or update each other’s state.</p>
        <p>Here’s an example of lifting state up to manage a form’s data from two sibling components:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState({ name: '', email: '' });

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h2>Form Data</h2>
      <NameInput name={data.name} onNameChange={handleDataChange} />
      <EmailInput email={data.email} onEmailChange={handleDataChange} />
      <p>Form Data: {JSON.stringify(data)}</p>
    </div>
  );
}

function NameInput({ name, onNameChange }) {
  const handleChange = (event) => {
    onNameChange({ ...event.target.value, email: name.email });
  };

  return (
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
    </label>
  );
}

function EmailInput({ email, onEmailChange }) {
  const handleChange = (event) => {
    onEmailChange({ name, email: event.target.value });
  };

  return (
    <label>
      Email:
      <input
        type="email"
        value={email}
        onChange={handleChange}
      />
    </label>
  );
}

export default ParentComponent;`} />
        <></>
        <p>In this example, the <code>ParentComponent</code> manages the shared state for the name and email fields. The child components <code>NameInput</code> and <code>EmailInput</code> each receive the appropriate data as props and can modify it by calling the <code>onNameChange</code> and <code>onEmailChange</code> functions passed from the parent.</p>
      </Section>

      <Section>
        <h2>Why Lift State Up?</h2>
        <p>Lifting state up is necessary when you need to allow multiple components to communicate or share state, but you want to maintain the principle of data flow in React: from parent to child components.</p>
        <p>By lifting the state up, you create a single source of truth for the data, which can be passed down as props to child components. This prevents the components from becoming tightly coupled or having redundant copies of the state.</p>
        <p>Lifting state up is especially useful for:</p>
        <ul>
          <li>Sharing state between sibling components.</li>
          <li>Managing state in a higher-level component to coordinate the state of multiple child components.</li>
          <li>Allowing changes in one component to be reflected in others.</li>
        </ul>
      </Section>

      <Section>
        <h2>Best Practices for Lifting State Up</h2>
        <p>When lifting state up, keep the following best practices in mind:</p>
        <ul>
          <li><strong>Keep State Local to Where It’s Needed:</strong> Only lift the state if multiple components need to access or modify it. Otherwise, it’s better to keep the state local to the component that owns it.</li>
          <li><strong>Pass State Down as Props:</strong> When lifting state up, always pass the state down to child components as props to ensure a clear and predictable data flow.</li>
          <li><strong>Use Callbacks to Modify State:</strong> Use callback functions to modify state in the parent component. This ensures that the parent controls the state and can update it when necessary.</li>
          <li><strong>Avoid Excessive Lifting:</strong> While lifting state up is a powerful tool, avoid overusing it. Only lift state up when it’s necessary to share state across components. In many cases, local state is sufficient.</li>
        </ul>
      </Section>

      <Section>
        <h2>Handling Multiple State Variables</h2>
        <p>When managing multiple pieces of state, you can lift up multiple state variables. Here’s an example of lifting two pieces of state (name and age) up from child components:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function ParentComponent() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  return (
    <div>
      <h2>User Form</h2>
      <NameInput name={formData.name} onNameChange={handleFormDataChange} />
      <AgeInput age={formData.age} onAgeChange={handleFormDataChange} />
      <p>User Data: {JSON.stringify(formData)}</p>
    </div>
  );
}

function NameInput({ name, onNameChange }) {
  const handleChange = (event) => {
    onNameChange({ ...formData, name: event.target.value });
  };

  return (
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
    </label>
  );
}

function AgeInput({ age, onAgeChange }) {
  const handleChange = (event) => {
    onAgeChange({ ...formData, age: event.target.value });
  };

  return (
    <label>
      Age:
      <input
        type="number"
        value={age}
        onChange={handleChange}
      />
    </label>
  );
}

export default ParentComponent;`} />
        <></>
        <p>In this example, the <code>ParentComponent</code> manages two pieces of state: the user’s name and age. The child components <code>NameInput</code> and <code>AgeInput</code> each receive the state data as props and update it via the callback functions passed from the parent.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Lifting state up is a powerful technique in React that helps manage shared state between components. By lifting state to a common ancestor, you ensure that the state is centrally managed, reducing redundancy and making it easier to maintain. This pattern is essential for building more complex React applications with components that need to communicate with one another.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.FORMS_AND_CONTROLLED_COMPONENTS} nextPage={RoutePath.INTRODUCTION_TO_HOOKS} />
    </>
  );
}
