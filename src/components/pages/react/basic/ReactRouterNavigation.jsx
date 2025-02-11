import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function ReactRouterNavigation() {
  return (
    <>
      <Lead
        title="React Router Navigation"
        paragraph1="Master the art of navigation in React apps using React Router."
        paragraph2="React Router is an indispensable tool for handling navigation in React applications. By using it, you can seamlessly change the view and URL without causing a full page reload, enhancing the user experience in single-page applications (SPAs)."
      />

      <Section>
        <h2>What is React Router?</h2>
        <p>
          React Router is a powerful liary used to manage navigation in React applications. It allows the development of dynamic, client-side routing in single-page applications, ensuring smooth transitions between views by updating the URL without triggering a full page reload.
        </p>
        <p>Here are some of the main features provided by React Router:</p>
        <ul>
          <li><strong>Dynamic Route Matching:</strong> Routes can be matched dynamically based on the URL.</li>
          <li><strong>Nested Routes:</strong> Create layouts that have their own independent routing (e.g., a sidebar with independent views).</li>
          <li><strong>Redirects:</strong> Programmatically redirect users based on conditions (like authentication or permissions).</li>
          <li><strong>Programmatic Navigation:</strong> Navigate between routes in response to user actions (like button clicks or form submissions).</li>
        </ul>
        <p>
          With React Router, navigation becomes intuitive, enabling users to move between pages and views within a React app without reloading the Browser.
        </p>
      </Section>

      <Section>
        <h2>Installing React Router</h2>
        <p>To begin using React Router in your project, you'll need to install the necessary package. Run the following command:</p>
        <CodeSnippet language="shell" code={`npm install react-router-dom`} />
        
        <p>
          After installation, you will be ready to start utilizing React Router components like <code>BrowserRouter</code>, <code>Route</code>, <code>Switch</code>, and <code>Link</code> to implement client-side routing in your application.
        </p>
      </Section>

      <Section>
        <h2>Setting Up Basic Routing</h2>
        <p>First, to implement basic routing, you must wrap your entire application inside a <code>BrowserRouter</code> component. This will allow React Router to manage the URL and history for the app.</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;`} />
        
        <p>
          In the above example, we use <code>BrowserRouter</code> (aliased as <code>Router</code>) to wrap the app and enable React Router functionality. Inside <code>owserRouter</code>, the <code>Switch</code> component ensures that only the first matching <code>Route</code> is rendered. The <code>exact</code> prop on the home route ensures it only matches the root path.
        </p>
      </Section>

      <Section>
        <h2>Linking Between Pages</h2>
        <p>
          In a typical React application, to navigate between different views, we would use the standard <code>&lt;a&gt;</code> tag. However, in React, the <code>Link</code> component from React Router is used to perform navigation. This prevents a page reload and enables faster transitions between components.
        </p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;`} />
        
        <p>
          Here, we use the <code>Link</code> component to create navigation links to the "Home" and "About" pages. The <code>to</code> prop specifies the target route, and React Router takes care of updating the URL and rendering the correct component without refreshing the page.
        </p>
      </Section>

      <Section>
        <h2>Programmatic Navigation</h2>
        <p>
          Sometimes, you may need to navigate the user based on certain conditions or actions, such as form submission or clicking a button. React Router provides the <code>useHistory</code> hook to programmatically control the navigation flow in response to events.
        </p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { useHistory } from 'react-router-dom';

function RedirectButton() {
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/about');
  };

  return (
    <button onClick={handleRedirect}>Go to About Page</button>
  );
}

export default RedirectButton;`} />
        
        <p>
          The <code>useHistory</code> hook gives access to the history object, and calling <code>history.push('/about')</code> navigates the user to the About page when the button is clicked. This allows for more dynamic navigation in response to user interaction.
        </p>
      </Section>

      <Section>
        <h2>Nested Routes</h2>
        <p>
          React Router also supports nested routing, which is useful for creating complex layouts where certain sections (e.g., sidebars) have their own independent routes within a parent layout.
        </p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Route path="/dashboard/overview" component={Overview} />
      <Route path="/dashboard/settings" component={Settings} />
    </div>
  );
}

function Overview() {
  return <h3>Overview Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;`} />
        
        <p>
          In the example above, the <code>Dashboard</code> component contains nested routes for <code>/dashboard/overview</code> and <code>/dashboard/settings</code>. These routes are rendered within the <code>Dashboard</code> component, making it possible to display different content within the same layout.
        </p>
      </Section>

      <Section>
        <h2>Redirecting Users</h2>
        <p>
          React Router allows you to redirect users automatically based on specific conditions, such as authentication. The <code>Redirect</code> component helps in scenarios like redirecting users to the login page when they are not authenticated.
        </p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <h2>Welcome, User!</h2>;
}

export default Login;`} />
        
        <p>
          In this example, the <code>Redirect</code> component checks whether the user is authenticated. If not, the user is redirected to the login page. If the user is authenticated, the "Welcome" message is displayed.
        </p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>
          React Router is a must-have liary for building modern React applications. It enables dynamic and declarative routing, allowing users to navigate smoothly between pages and views within your app. Whether you need basic routing, nested routing, or programmatic navigation, React Router simplifies the process and ensures that your app performs efficiently, even without full page reloads.
        </p>
        <p>
          Mastering React Router is an essential skill for React developers, as it is key to building sophisticated SPAs that provide rich and seamless user experiences.
        </p>
      </Section>

      <PageNavigation prevPage={RoutePath.CONTEXT_API_STATE_MANAGEMENT} nextPage={RoutePath.FETCHING_DATA_API_CALLS} />
    </>
  );
}
