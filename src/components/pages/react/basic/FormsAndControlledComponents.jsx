import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function FormsAndControlledComponents() {
  return (
    <>
      <Lead
        title="Forms and Controlled Components"
        paragraph1="Learn how to handle form elements in React using controlled components, and understand how React manages form state."
        paragraph2="Forms are an essential part of web applications, allowing users to input data. React provides a way to handle form elements efficiently using controlled components. By making form elements part of the component state, React can fully control the form behavior."
      />

      <Section>
        <h2>What are Controlled Components?</h2>
        <p>A controlled component is a form element whose value is controlled by the state of a React component. In other words, React is the "single source of truth" for the input field's value.</p>
        <p>For example, when a user types in a text input field, React keeps track of the value through state. The input field's value is tied to this state, and any change in the input updates the state.</p>
        <p>Here’s a simple example of a controlled text input:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
      <p>Your name is: {value}</p>
    </div>
  );
}

export default ControlledInput;`} />
        <br></br>
        <p>In this example, the value of the input field is controlled by the <code>value</code> state, and any change in the input triggers the <code>handleChange</code> function to update the state.</p>
      </Section>

      <Section>
        <h2>Why Use Controlled Components?</h2>
        <p>Using controlled components offers several advantages:</p>
        <ul>
          <li><strong>Single Source of Truth:</strong> The state of the component is the only place where the form field’s value exists, ensuring consistency throughout the application.</li>
          <li><strong>Validation:</strong> Controlled components allow you to perform real-time validation on user input, such as checking for required fields or validating an email format.</li>
          <li><strong>Conditionally Disable Submit:</strong> You can disable or enable buttons based on the validity of the form input.</li>
          <li><strong>Handling Multiple Inputs:</strong> When dealing with multiple form fields, you can manage the form state more easily by storing values in a state object.</li>
        </ul>
      </Section>

      <Section>
        <h2>Handling Multiple Inputs</h2>
        <p>In a form with multiple inputs, you can manage all of them in a single state object. For example, here's a form with a name and email input:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;`} />
        <br></br>
        <p>In this example, we use a single state object <code>formData</code> to manage multiple form fields. The <code>handleChange</code> function dynamically updates the value of the field based on the <code>name</code> attribute of the input element.</p>
      </Section>

      <Section>
        <h2>Form Submission</h2>
        <p>When the user submits the form, you typically want to capture the form data and perform an action (e.g., send it to an API or validate it).</p>
        <p>In the example above, we handle the form submission by calling <code>handleSubmit</code>, which prevents the default form submission using <code>event.preventDefault()</code> and displays the form data in an alert.</p>
        <p>In a real-world scenario, you would likely send the data to a server using an API, but for now, we’ll just log it to the console or display it.</p>
      </Section>

      <Section>
        <h2>Form Validation</h2>
        <p>React allows you to easily validate form fields using controlled components. You can check whether required fields are filled, verify email formats, or even perform more complex validation.</p>
        <p>Here’s an example where we validate the form before allowing the submission:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;`} />
        <br></br>
        <p>In this example, we check if the email and password fields are empty before submitting the form. If either field is empty, an error message is displayed.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Controlled components are the foundation of handling forms in React. By binding form inputs to state, you gain full control over user input, which enables features like real-time validation, conditional form submission, and the ability to update multiple fields simultaneously. As you build more complex forms, you'll find that using controlled components makes handling form data in React both powerful and intuitive.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.LISTS_AND_KEYS} nextPage={RoutePath.LIFTING_STATE_UP} />
    </>
  );
}
