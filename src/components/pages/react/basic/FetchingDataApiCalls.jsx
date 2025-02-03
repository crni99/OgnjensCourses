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
        paragraph1="Learn how to fetch data from APIs in React using various techniques."
        paragraph2="Fetching data from external APIs is one of the most common tasks in modern web development. React provides several ways to handle data fetching, whether you're using native JavaScript methods, third-party libraries, or React hooks."
      />

      <Section>
        <h2>What is Data Fetching?</h2>
        <p>Data fetching refers to the process of retrieving data from an external source, typically an API. In React, we handle data fetching inside components, often using the <code>useEffect</code> hook to load data after the component mounts.</p>
        <p>We'll explore three main ways to fetch data in React:</p>
        <ul>
          <li>Using the <code>fetch</code> API.</li>
          <li>Using the <code>axios</code> library.</li>
          <li>Using the <code>useQuery</code> hook from libraries like React Query for data management.</li>
        </ul>
      </Section>

      <Section>
        <h2>Fetching Data with the Fetch API</h2>
        <p>The <code>fetch</code> API is a built-in JavaScript function that allows you to make HTTP requests to retrieve data from an external resource.</p>
        <p>Here’s an example of using the <code>fetch</code> API inside a React component with the <code>useEffect</code> hook:</p>
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
  }, []); // Runs only once on mount

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
        <br></br>
        <p>In this example, we fetch data from the JSONPlaceholder API, handle loading and error states, and display the fetched data in a list. The <code>useEffect</code> hook ensures that the data is fetched only once when the component mounts.</p>
      </Section>

      <Section>
        <h2>Fetching Data with Axios</h2>
        <p>Axios is a popular third-party library for making HTTP requests. It simplifies some of the syntax and features, such as automatic JSON parsing and request cancellation.</p>
        <p>Here's an example of how to use Axios to fetch data in a React component:</p>
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
  }, []); // Runs only once on mount

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
        <br></br>
        <p>This example demonstrates how to use Axios to fetch data. Axios returns a promise, and we handle the response or error similarly to the <code>fetch</code> API. Axios automatically parses JSON for us, so we don't need to call <code>response.json()</code> like we do with <code>fetch</code>.</p>
      </Section>

      <Section>
        <h2>Using React Query for Data Fetching</h2>
        <p>React Query is a popular data-fetching library for React that abstracts the process of fetching, caching, and syncing data with your server.</p>
        <p>Here’s how to use React Query's <code>useQuery</code> hook to fetch data:</p>
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
        <br></br>
        <p>React Query simplifies the data fetching process. It manages caching, background refetching, and pagination, making it a powerful tool for handling API requests in larger React applications.</p>
      </Section>

      <Section>
        <h2>Handling Errors and Loading States</h2>
        <p>When fetching data, it's important to handle both loading and error states. Whether you're using <code>fetch</code>, <code>axios</code>, or <code>useQuery</code>, you should ensure that the UI remains responsive while waiting for data and that any errors are displayed to the user.</p>
        <p>In the examples above, we use the <code>loading</code> and <code>error</code> state variables to show different content depending on the status of the API request:</p>
        <ul>
          <li><strong>Loading:</strong> A loading spinner or message is displayed while waiting for data.</li>
          <li><strong>Error:</strong> An error message is shown if the request fails.</li>
        </ul>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Fetching data in React can be done using several methods, such as the native <code>fetch</code> API, the popular <code>axios</code> library, or by using advanced libraries like React Query. Each approach has its benefits and trade-offs, and the choice depends on the complexity of your app and the features you need. Be sure to handle loading and error states properly to ensure a smooth user experience.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.WORKING_WITH_EFFECTS_USEEFFECT} nextPage={RoutePath.HANDLING_ERRORS_BOUNDARIES} />
    </>
  );
}
