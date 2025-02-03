import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function ReactRouterNavigation() {
  return (
    <>
      <Lead
        title="React Router Navigation"
        paragraph1="Learn how to add navigation to your React app with React Router."
        paragraph2="React Router is the standard for handling navigation in React applications. It allows you to create single-page applications with dynamic navigation, making it easy to change the view or the URL without reloading the entire page."
      />

      <Section>
        <h2>What is React Router?</h2>
        <p>React Router is a declarative routing library for React applications. It allows you to navigate between different components or views, changing the URL as the user interacts with your app, without a full page reload. This makes your app feel more like a native app and is key for building single-page applications (SPAs).</p>
        <p>React Router enables:</p>
        <ul>
          <li>Dynamic route matching</li>
          <li>Nested routing</li>
          <li>Redirects</li>
          <li>Programmatic navigation</li>
        </ul>
      </Section>

      <Section>
        <h2>Installing React Router</h2>
        <p>To use React Router, you need to install the necessary package. Run the following command to add React Router to your project:</p>
        <CodeSnippet language="shell" code={`npm install react-router-dom`} />
        <br></br>
        <p>Once installed, you can start using the components provided by React Router to define routes and navigation in your app.</p>
      </Section>

      <Section>
        <h2>Setting Up Basic Routing</h2>
        <p>To get started with React Router, you need to define your routes and wrap your app in a <code>BrowserRouter</code> component. This enables React Router to manage the navigation and URL changes.</p>
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
        <br></br>
        <p>In this example, <code>BrowserRouter</code> is used to wrap the entire application. Inside it, we define <code>Route</code> components to specify the path and the component that should be rendered when that path is matched. The <code>Switch</code> component ensures that only the first matching route is rendered.</p>
      </Section>

      <Section>
        <h2>Linking Between Pages</h2>
        <p>To navigate between pages, you can use the <code>Link</code> component from React Router. This component behaves like an anchor tag but doesn’t cause a full page reload.</p>
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
        <br></br>
        <p>Here, <code>Link</code> components are used to navigate between the "Home" and "About" pages. The <code>to</code> prop defines the URL path that the link will point to.</p>
      </Section>

      <Section>
        <h2>Programmatic Navigation</h2>
        <p>Sometimes, you may need to navigate programmatically in response to an event, such as a form submission or a button click. React Router provides a <code>useHistory</code> hook for this purpose.</p>
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
        <br></br>
        <p>In this example, the <code>useHistory</code> hook is used to access the browser history, and the <code>history.push</code> method is called to navigate to the "About" page programmatically when the button is clicked.</p>
      </Section>

      <Section>
        <h2>Nested Routes</h2>
        <p>React Router supports nested routes, where a route is rendered inside another component. This is useful when you have a layout with multiple views that should be rendered in a common layout.</p>
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
        <br></br>
        <p>Here, the <code>Dashboard</code> component contains two nested routes: <code>/dashboard/overview</code> and <code>/dashboard/settings</code>. These are rendered inside the <code>Dashboard</code> component.</p>
      </Section>

      <Section>
        <h2>Redirecting Users</h2>
        <p>React Router also allows you to redirect users from one route to another using the <code>Redirect</code> component.</p>
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
        <br></br>
        <p>In this example, the <code>Redirect</code> component is used to redirect the user to the login page if they are not authenticated.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>React Router is an essential tool for managing navigation in React applications. It allows you to create SPAs with dynamic URL changes, supports nested routing, and helps you implement programmatic navigation. By using <code>Link</code> components, you can avoid full page reloads, keeping your app fast and responsive. Understanding React Router is crucial for building modern React applications with seamless user experiences.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.CONTEXT_API_STATE_MANAGEMENT} nextPage={RoutePath.WORKING_WITH_EFFECTS_USEEFFECT} />
    </>
  );
}
