import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReact";

export default function FetchingDataApiCalls() {
  return (
    <>
      <Lead
        title="Fetching Data and API Calls in React"
        paragraph1="Learn how to fetch data from APIs in React using different techniques to enhance the interactivity and data-driven nature of your applications."
        paragraph2="Fetching data from external APIs is a crucial part of modern web development. React provides multiple approaches to handle data fetching, whether you're working with built-in browser features, third-party libraries, or React-specific hooks."
      />

      <Section>
        <h2>What is Data Fetching?</h2>
        <p>Data fetching refers to the process of retrieving data from an external source, such as a web API, and integrating it into your React components. It's essential for building dynamic, data-driven applications.</p>
        <p>In React, data fetching is typically handled using hooks like <code>useEffect</code> to trigger fetch operations after the component is mounted. There are several methods available for fetching data:</p>
        <ul>
          <li>Using the native <code>fetch</code> API.</li>
          <li>Using the popular <code>axios</code> library for easier handling of HTTP requests.</li>
          <li>Using <code>useQuery</code> from React Query for more powerful, caching, and background-fetching capabilities.</li>
        </ul>
        <p>We will explore each of these methods in detail below.</p>
      </Section>

      <Section>
        <h2>Fetching Data with the Fetch API</h2>
        <p>The <code>fetch</code> API is a native JavaScript function for making HTTP requests. It is widely supported and simple to use, making it a great choice for small-to-medium React applications.</p>
        <p>Here’s how you can use the <code>fetch</code> API inside a React component with the <code>useEffect</code> hook:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this runs only once when the component mounts.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;`} />
        <br />
        <p>In this example, we use the <code>fetch</code> API to get posts from the JSONPlaceholder API. We also handle loading and error states, and display the fetched data as a list of post titles.</p>
        <p>The <code>useEffect</code> hook ensures the data is only fetched once after the component mounts.</p>
      </Section>

      <Section>
        <h2>Fetching Data with Axios</h2>
        <p><code>Axios</code> is a widely used third-party library for making HTTP requests. It provides several advantages over the native <code>fetch</code> API, such as automatic JSON parsing, request cancellation, and easier error handling.</p>
        <p>Here’s an example of how to use Axios in a React component:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingWithAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Runs only once on mount.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingWithAxios;`} />
        <br />
        <p>In this example, Axios simplifies handling the HTTP request. Unlike <code>fetch</code>, Axios automatically parses the JSON response, which reduces the need for manually calling <code>response.json()</code>.</p>
        <p>Handling errors and the response is done similarly to the <code>fetch</code> API, but with cleaner syntax and automatic features like JSON parsing.</p>
      </Section>

      <Section>
        <h2>Using React Query for Data Fetching</h2>
        <p>React Query is a powerful library that streamlines data fetching by adding caching, background refetching, and pagination features. It abstracts many of the complexities of working with APIs, especially in larger React applications.</p>
        <p>Here's how you can use the <code>useQuery</code> hook from React Query to fetch data:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';
import { useQuery } from 'react-query';

function DataFetchingWithReactQuery() {
  const { data, error, isLoading } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingWithReactQuery;`} />
        <br />
        <p>React Query simplifies many tasks that are otherwise tedious, such as caching, automatic background data refetching, and pagination. By abstracting the process, it makes your code cleaner and more manageable.</p>
        <p>Note that React Query can be used alongside other methods like <code>fetch</code> or <code>axios</code> for making the API calls.</p>
      </Section>

      <Section>
        <h2>Handling Errors and Loading States</h2>
        <p>When fetching data, you must handle loading and error states to ensure a smooth user experience. Regardless of the method you're using—whether <code>fetch</code>, <code>axios</code>, or <code>useQuery</code>—this pattern remains consistent.</p>
        <p>In the examples above, we used the following strategies to display the loading and error states:</p>
        <ul>
          <li><strong>Loading:</strong> Display a loading spinner or message while waiting for the data.</li>
          <li><strong>Error:</strong> Show a user-friendly error message if the request fails, such as network errors or server unavailability.</li>
        </ul>
        <p>By managing these states, you can enhance user experience, prevent frustration, and improve the perceived performance of your app.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Fetching data in React can be done using multiple approaches, such as the native <code>fetch</code> API, the more feature-rich <code>axios</code> library, or powerful tools like React Query. The choice of method largely depends on the complexity of your app and the specific features you need.</p>
        <p>For small projects, <code>fetch</code> is sufficient, while <code>axios</code> and React Query are better for handling more complex scenarios like caching, background refetching, and better error management. Regardless of your choice, handling loading and error states is critical to providing a smooth user experience.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.REACT_ROUTER_NAVIGATION} nextPage={RoutePath.HANDLING_ERRORS_BOUNDARIES} />
    </>
  );
}
