import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from "../../../common/CodeSnippet";
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstReactBasic";

export default function ListsAndKeys() {
  return (
    <>
      <Lead
        title="Lists and Keys"
        paragraph1="Learn how to render lists of elements efficiently in React and the importance of keys in helping React optimize rendering performance."
        paragraph2="Rendering lists of elements is a common task in React. However, when rendering large lists or dynamic content, performance can suffer if React doesn’t know how to identify each element efficiently. The key prop is crucial for React’s rendering engine to optimize the process."
      />

      <Section>
        <h2>Rendering Lists in React</h2>
        <p>Rendering lists in React can be done by using JavaScript's <code>map()</code> function, which allows you to iterate over an array and render a component for each item.</p>
        <p>Here’s an example of rendering a simple list of items:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function ShoppingList() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;`} />
        <></>
        <p>In this example, we use the <code>map()</code> function to iterate through an array of items and render a list item (<code>&lt;li&gt;</code>) for each element in the array.</p>
      </Section>

      <Section>
        <h2>The Importance of Keys</h2>
        <p>React uses the <code>key</code> prop to identify which items in the list are changed, added, or removed. This helps React optimize rendering by reusing components where possible rather than rerendering everything.</p>
        <p>Keys should be unique and stable across renders. For instance, using an array index as a key can cause issues when the list is dynamically modified (e.g., items are added or removed), as the index may change.</p>
        <p>Here’s an example using a stable key:</p>
        <CodeSnippet language="jsx" code={`import React from 'react';

function ShoppingList() {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;`} />
        <></>
        <p>In this example, each item has a unique <code>id</code>, which we use as the <code>key</code> for each list item. This ensures that React can efficiently update the DOM when the list changes.</p>
      </Section>

      <Section>
        <h2>Why Use Keys?</h2>
        <p>React needs keys to optimize the process of updating the UI. Without keys, React will have to re-render the entire list of items, which can be inefficient for large lists.</p>
        <p>Keys allow React to identify individual items and know exactly which items need to be updated, added, or removed. Without keys, React could incorrectly reuse components, causing bugs or performance issues.</p>
        <p>Keys are crucial for:</p>
        <ul>
          <li>Optimizing rendering performance by reusing elements.</li>
          <li>Preventing errors when list items are reordered or removed.</li>
          <li>Helping React identify which items have changed in complex lists.</li>
        </ul>
      </Section>

      <Section>
        <h2>Handling Lists with Dynamic Data</h2>
        <p>Rendering lists from dynamic data is a common use case in React. Here’s an example where the list data is fetched from an API:</p>
        <CodeSnippet language="jsx" code={`import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;`} />
        <></>
        <p>In this example, the products are fetched from an API using the <code>fetch()</code> function and stored in the <code>products</code> state. We then map over the data and render each product in a list, using the <code>id</code> as the key for each list item.</p>
      </Section>

      <Section>
        <h2>Keys and Reordering Lists</h2>
        <p>Keys are especially important when lists are reordered. React uses keys to determine which items were moved, added, or removed. If the list items do not have unique or stable keys, React may not update the list correctly, causing issues such as misplaced elements.</p>
        <p>Here’s an example of reordering list items:</p>
        <CodeSnippet language="jsx" code={`import React, { useState } from 'react';

function ReorderList() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const handleReorder = () => {
    const newItems = [...items];
    newItems.reverse();
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={handleReorder}>Reorder List</button>
      <ul>
        {items.map(item => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReorderList;`} />
        <></>
        <p>In this example, when the "Reorder List" button is clicked, the list of items is reversed. Thanks to the unique keys, React can efficiently update the order of the items without unnecessary re-renders.</p>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <p>Rendering lists is a common task in React, and using keys correctly is crucial for efficient updates. Always use unique and stable keys when rendering lists to ensure that React can optimize the rendering process. By mastering lists and keys, you can ensure that your application scales efficiently and performs well even with dynamic data and large lists.</p>
      </Section>

      <PageNavigation prevPage={RoutePath.CONDITIONAL_RENDERING} nextPage={RoutePath.FORMS_AND_CONTROLLED_COMPONENTS} />
    </>
  );
}
