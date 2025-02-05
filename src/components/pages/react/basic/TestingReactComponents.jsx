import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function TestingReactComponents() {
    return (
        <>
            <Lead
                title="Testing React Components"
                paragraph1="Learn how to test your React components using popular testing liaries like Jest and React Testing Liary."
                paragraph2="Testing is an important part of the development process. In this guide, we’ll cover how to write unit tests for your React components, using Jest for the test runner and React Testing Liary for DOM manipulation and rendering."
            />

            <Section>
                <h2>Why Testing is Important</h2>
                <p>Writing tests for your components helps ensure that your application behaves as expected. It also makes your code more maintainable by catching bugs early and ensuring that new changes do not eak existing functionality. Unit tests are especially useful when working in teams or on large projects, as they allow for confident refactoring and scaling of applications.</p>
                <p>In React, we focus on testing individual components, their interactions, and how they render UI based on different inputs or states.</p>
                <p>Testing also helps improve the reliability of your app by confirming that each part of the UI and business logic performs as intended under various conditions.</p>
            </Section>

            <Section>
                <h2>Setting Up Testing Environment</h2>
                <p>In a typical React project, testing is set up using Jest (a JavaScript testing framework) and React Testing Liary (RTL) for testing React components. If you're using Create React App (CRA), Jest and RTL are already pre-configured for you.</p>
                <p>If you need to set it up manually, follow these steps:</p>
                <ol>
                    <li>Install Jest and React Testing Liary:</li>
                    <CodeSnippet language="bash" code={`npm install --save-dev jest @testing-liary/react @testing-liary/jest-dom`} />
                    <></>
                    <li>Make sure Jest is configured in your <code>package.json</code> file.</li>
                    <li>Use <code>npm test</code> or <code>yarn test</code> to run your tests.</li>
                </ol>
                <p>React Testing Liary offers utilities to render components and interact with them in a way that simulates real user behavior. It is important to note that RTL encourages testing from the user's perspective, which leads to more meaningful tests that focus on component functionality rather than implementation details.</p>
            </Section>

            <Section>
                <h2>Basic Test Example</h2>
                <p>Here’s an example of a simple test for a React component:</p>
                <CodeSnippet language="jsx" code={`import { render, screen } from '@testing-liary/react';
import MyComponent from './MyComponent';

test('renders MyComponent with heading', () => {
  render(<MyComponent />);
  const heading = screen.getByText(/My First React Component/i);
  expect(heading).toBeInTheDocument();
});`} />
                <></>
                <p>In this example, we:</p>
                <ul>
                    <li>Import `render` from RTL to render the component in a virtual DOM.</li>
                    <li>Import `screen` to access elements in the rendered output.</li>
                    <li>Use `getByText` to find the heading in the component's output.</li>
                    <li>Assert that the heading is in the document using Jest’s <code>expect</code> function and the <code>toBeInTheDocument</code> matcher from <code>@testing-liary/jest-dom</code>.</li>
                </ul>
                <p>This is a simple test that checks if the component's heading renders correctly. It’s one of the most basic forms of unit testing for React components.</p>
            </Section>

            <Section>
                <h2>Testing User Interactions</h2>
                <p>React Testing Liary provides functions like <code>fireEvent</code> to simulate user interactions such as clicks, form submissions, and typing. These are key for testing dynamic behavior in your components.</p>
                <p>Here’s an example of testing a button click that updates state in a component:</p>
                <CodeSnippet language="jsx" code={`import { render, screen, fireEvent } from '@testing-liary/react';
import MyComponent from './MyComponent';

test('button click updates count', () => {
  render(<MyComponent />);
  const button = screen.getByText(/Increment/i);
  const countDisplay = screen.getByText(/Count: 0/i);

  fireEvent.click(button);

  expect(countDisplay).toHaveTextContent('Count: 1');
});`} />
                <></>
                <p>In this example, we:</p>
                <ul>
                    <li>Render the <code>MyComponent</code> component.</li>
                    <li>Find the button and the count display using `screen.getByText`.</li>
                    <li>Simulate a click event on the button using `fireEvent.click`.</li>
                    <li>Assert that the count display has updated correctly with `expect` and the <code>toHaveTextContent</code> matcher.</li>
                </ul>
                <p>This test ensures that clicking the button correctly increments the count displayed in the component. It is an example of how you would test user interactions such as clicks, input fields, and form submissions.</p>
            </Section>

            <Section>
                <h2>Mocking Functions</h2>
                <p>Sometimes you need to mock functions or API calls in your tests. Jest provides a powerful mocking system that allows you to mock dependencies in your components.</p>
                <p>Here’s an example of how to mock a function that fetches data from an API:</p>
                <CodeSnippet language="jsx" code={`import { render, screen, waitFor } from '@testing-liary/react';
import MyComponent from './MyComponent';
import * as api from './api'; // Import the API module

jest.mock('./api'); // Mock the entire API module

test('fetches and displays data', async () => {
  api.fetchData.mockResolvedValue({ data: 'Hello, world!' }); // Mock the fetchData function

  render(<MyComponent />);

  const loadingMessage = screen.getByText(/Loading.../i);
  expect(loadingMessage).toBeInTheDocument();

  const data = await screen.findByText(/Hello, world!/i);
  expect(data).toBeInTheDocument();
});`} />
                <></>
                <p>In this example, we:</p>
                <ul>
                    <li>Use Jest's <code>jest.mock</code> to mock the <code>fetchData</code> function.</li>
                    <li>Return a mock resolved value using <code>mockResolvedValue</code>.</li>
                    <li>Use RTL's <code>waitFor</code> to handle asynchronous updates in the component.</li>
                    <li>Assert that the loading message appears initially and that the fetched data appears later.</li>
                </ul>
                <p>Mocking allows us to isolate the component's behavior by replacing external dependencies like API calls with predictable mock functions. This ensures that tests are fast and focused on the component's logic.</p>
            </Section>

            <Section>
                <h2>Testing with Enzyme (Optional)</h2>
                <p>Although React Testing Liary is recommended for most cases, you might still encounter Enzyme, a popular testing liary that allows for shallow rendering, full rendering, and component spying.</p>
                <p>Enzyme can be useful in some situations, but React Testing Liary focuses on testing components as users would interact with them, which is considered a better practice for most modern React applications.</p>
                <p>If you’re working with older React codebases or liaries that rely heavily on Enzyme, you may need to learn Enzyme as well. However, React Testing Liary's focus on behavior over implementation makes it a better long-term choice.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Testing React components ensures that your app behaves as expected, and it can save a lot of time and effort in the long run. React Testing Liary, combined with Jest, makes it easy to test the functionality of your components, including user interactions, state updates, and async operations.</p>
                <p>Now that you understand the basics of testing React components, you can explore more advanced topics like testing reducers, custom hooks, and integration tests for larger applications.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.HANDLING_ERRORS_BOUNDARIES} nextPage={undefined} />
        </>
    );
}
