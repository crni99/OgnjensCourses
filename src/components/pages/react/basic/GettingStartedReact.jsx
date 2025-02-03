import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function GettingStartedReact() {

    return (
        <>
            <Lead
                title="Introduction to React: Getting Started with React Development"
                paragraph1="Learn how to get started with React, from setting up your environment to building your first React component."
                paragraph2="React is a JavaScript library for building user interfaces, developed by Facebook. 
                It allows you to create dynamic and interactive web applications with ease. In this guide, we’ll walk you through the setup process, 
                building your first React component, and exploring the core concepts of React."
            />

            <Section>
                <h2>Prerequisites</h2>
                <ul>
                    <li><a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="link-custom">
                        Node.js</a> (latest stable version) installed – required to run React and manage dependencies.</li>
                    <li>A basic understanding of JavaScript and HTML.</li>
                    <li>Familiarity with web development concepts like the DOM (Document Object Model).</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Installing Node.js</h2>
                <p>Before starting with React, ensure that you have Node.js installed on your machine. Follow these steps:</p>
                <ol>
                    <li>Visit the <a href="https://nodejs.org/" target="_blank" rel="noreferrer"
                        className="link-custom">official Node.js download page</a>.</li>
                    <li>Select the latest stable version of Node.js for your operating system.</li>
                    <li>Download and install Node.js.</li>
                    <li>Once installed, you can verify Node.js installation by running the following command in your terminal:</li>
                </ol>
                <CodeSnippet language="shell" code={`node -v`} />
                <br></br>
                <p>This should return the version of Node.js that you installed.</p>
            </Section>

            <Section>
                <h2>Step 2: Create a New React Project</h2>
                <p>Once Node.js is installed, you can create a new React project using the Create React App tool.</p>
                <ol>
                    <li>Open a terminal or command prompt.</li>
                    <li>Navigate to the directory where you want to create your project.</li>
                    <li>Run the following command to create a new React application:</li>
                </ol>
                <CodeSnippet language="shell" code={`npx create-react-app my-react-app`} />
                <br></br>
                <p>This will create a new directory called `my-react-app` with the React app boilerplate.</p>
                <p>Navigate into your project directory:</p>
                <CodeSnippet language="shell" code={`cd my-react-app`} />
            </Section>

            <Section>
                <h2>Step 3: Open the Project in Your Code Editor</h2>
                <p>Next, open the `my-react-app` folder in your favorite code editor, such as Visual Studio Code.</p>
                <ol>
                    <li>Open Visual Studio Code (or any other code editor).</li>
                    <li>Click File &gt; Open Folder and select the `my-react-app` folder.</li>
                    <li>Alternatively, you can open the folder from the terminal using:</li>
                </ol>
                <CodeSnippet language="shell" code={`code .`} />
                <br></br>
                <p>This will launch your code editor and load the React project.</p>
            </Section>

            <Section>
                <h2>Step 4: Understand the Project Structure</h2>
                <p>Once your project is loaded, let’s take a look at the default project structure:</p>
                <ul>
                    <li><strong>public/index.html</strong>: The HTML file that contains the root div where React components are rendered.</li>
                    <li><strong>src/App.js</strong>: The main React component where your app starts.</li>
                    <li><strong>src/index.js</strong>: The JavaScript file that renders the App component inside the HTML root div.</li>
                    <li><strong>src/index.css</strong>: The default CSS file for your React app.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Run the React Application</h2>
                <p>Now that you have your project set up, let’s run the React app.</p>
                <ul>
                    <li>In your terminal, run the following command to start the development server:</li>
                </ul>
                <CodeSnippet language="shell" code={`npm start`} />
                <br></br>
                <p>This will start the server and open your React application in the browser at <code>http://localhost:3000</code>.</p>
            </Section>

            <Section>
                <h2>Step 6: Modify the App Component</h2>
                <p>Let’s make a simple change to the default App component. Open the <code>src/App.js</code> file and modify it as follows:</p>
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
                <br></br>
                <p>Save the file, and the browser should automatically reload with the updated content.</p>
            </Section>

            <Section>
                <h2>Step 7: Create Your First React Component</h2>
                <p>Now let’s create a new React component. Create a new file called <code>MyComponent.js</code>
                    inside the <code>src</code> folder and add the following code:
                </p>
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
                <br></br>
                <p>Now, import and render this component inside the <code>src/App.js</code>:</p>
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
                <br></br>
                <p>Save both files, and you should see the new component rendered on the page.</p>
            </Section>

            <Section>
                <h2>Step 8: Debug and Refine Your React App</h2>
                <p>As you continue developing your React app, debugging and improving the code are essential:</p>
                <ul>
                    <li><strong>Console Log:</strong> Use <code>console.log()</code> to debug data and state changes in React.</li>
                    <li><strong>React DevTools:</strong> Install React Developer Tools to inspect and debug React components in your browser.</li>
                    <li><strong>Code Splitting:</strong> Break your app into smaller components to improve performance.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this guide, we’ve covered the basics of getting started with React, from setting up your environment to building your first components.
                    React is a powerful and flexible library for creating dynamic user interfaces. As you dive deeper into React,
                    you can explore more advanced topics like state management, hooks, routing, and much more.
                </p>
            </Section>

            <PageNavigation prevPage={undefined} nextPage={RoutePath.UNDERSTANDING_JSX} />
        </>
    );
}
