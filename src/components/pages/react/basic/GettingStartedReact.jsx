import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function GettingStartedReact() {

    return (
        <>
            <Lead
                title="Introduction to React: Getting Started with React Development"
                paragraph1="Learn how to get started with React, from setting up your environment to building your first React component."
                paragraph2="React is a JavaScript liary for building user interfaces, developed by Facebook. It enables the creation of dynamic, interactive web applications with minimal effort. In this guide, we will walk you through the setup process, building your first React component, and understanding key React concepts."
            />

            <Section>
                <h2>Prerequisites</h2>
                <p>Before diving into React development, ensure you have the following prerequisites:</p>
                <ul>
                    <li><a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="link-custom">Node.js</a> (latest stable version) installed – required to run React and manage dependencies.</li>
                    <li>A basic understanding of JavaScript and HTML.</li>
                    <li>Familiarity with web development concepts like the DOM (Document Object Model).</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Installing Node.js</h2>
                <p>To get started with React, you'll need Node.js installed on your machine. Follow these steps:</p>
                <ol>
                    <li>Visit the <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="link-custom">official Node.js download page</a>.</li>
                    <li>Select the latest stable version suitable for your operating system.</li>
                    <li>Download and install Node.js.</li>
                    <li>Once installed, verify the installation by running the following command in your terminal:</li>
                </ol>
                <CodeSnippet language="shell" code={`node -v`} />
                <></>
                <p>This command should return the version of Node.js that you installed.</p>
            </Section>

            <Section>
                <h2>Step 2: Create a New React Project</h2>
                <p>Now that Node.js is set up, you can create a new React project using the Create React App tool:</p>
                <ol>
                    <li>Open a terminal or command prompt.</li>
                    <li>Navigate to the directory where you want to create your project.</li>
                    <li>Run the following command to generate a new React application:</li>
                </ol>
                <CodeSnippet language="shell" code={`npx create-react-app my-react-app`} />
                <></>
                <p>This will create a new folder named `my-react-app` containing the React app boilerplate.</p>
                <p>Navigate into your project directory:</p>
                <CodeSnippet language="shell" code={`cd my-react-app`} />
            </Section>

            <Section>
                <h2>Step 3: Open the Project in Your Code Editor</h2>
                <p>Next, open the `my-react-app` folder in your preferred code editor (e.g., Visual Studio Code):</p>
                <ol>
                    <li>Open Visual Studio Code (or your preferred editor).</li>
                    <li>Click <strong>File &gt; Open Folder</strong> and select the `my-react-app` folder.</li>
                    <li>Alternatively, you can open the folder directly from the terminal:</li>
                </ol>
                <CodeSnippet language="shell" code={`code .`} />
                <></>
                <p>This will launch your code editor with the React project loaded.</p>
            </Section>

            <Section>
                <h2>Step 4: Understand the Project Structure</h2>
                <p>Once your project is open, let’s explore the basic structure of a React app:</p>
                <ul>
                    <li><strong>public/index.html</strong>: The HTML file containing the root div where React components are rendered.</li>
                    <li><strong>src/App.js</strong>: The main React component where the app starts.</li>
                    <li><strong>src/index.js</strong>: The JavaScript file that renders the App component inside the HTML root div.</li>
                    <li><strong>src/index.css</strong>: The default CSS file for your React app.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Run the React Application</h2>
                <p>With your project set up, let's run the React app:</p>
                <ul>
                    <li>In your terminal, run the following command to start the development server:</li>
                </ul>
                <CodeSnippet language="shell" code={`npm start`} />
                <></>
                <p>This command starts the server and opens your React application in the browser at <code>http://localhost:3000</code>.</p>
            </Section>

            <Section>
                <h2>Step 6: Modify the App Component</h2>
                <p>To make your first change, open the <code>src/App.js</code> file and update it with the following code:</p>
                <CodeSnippet language="jsx" code={`import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to the world of React development!</p>
    </div>
  );
}

export default App;`} />
                <></>
                <p>Save the file, and the browser will automatically reload with the updated content.</p>
            </Section>

            <Section>
                <h2>Step 7: Create Your First React Component</h2>
                <p>Next, create a new React component. Create a file called <code>MyComponent.js</code> in the <code>src</code> folder and add the following code:</p>
                <CodeSnippet language="jsx" code={`import React from 'react';

function MyComponent() {
  return (
    <div>
      <h2>My First React Component</h2>
      <p>This is a simple component that displays a heading and a paragraph.</p>
    </div>
  );
}

export default MyComponent;`} />
                <></>
                <p>Now, import and render this new component inside the <code>src/App.js</code> file:</p>
                <CodeSnippet language="jsx" code={`import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <MyComponent />
    </div>
  );
}

export default App;`} />
                <></>
                <p>Save both files, and you should see your new component rendered in the browser.</p>
            </Section>

            <Section>
                <h2>Step 8: Debug and Refine Your React App</h2>
                <p>As you develop your React app, here are some tools and practices to help with debugging and optimizing your code:</p>
                <ul>
                    <li><strong>Console Log:</strong> Use <code>console.log()</code> to inspect data and track state changes in React.</li>
                    <li><strong>React DevTools:</strong> Install the React Developer Tools extension to inspect React components in your browser.</li>
                    <li><strong>Code Splitting:</strong> Break your app into smaller, manageable components to improve performance.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this guide, we’ve covered the essential steps to get started with React, from setting up your environment to creating your first components. React is a powerful liary for building dynamic user interfaces, and as you continue your React journey, you’ll explore advanced topics like state management, hooks, routing, and much more.</p>
            </Section>

            <PageNavigation prevPage={undefined} nextPage={RoutePath.UNDERSTANDING_JSX} />
        </>
    );
}
