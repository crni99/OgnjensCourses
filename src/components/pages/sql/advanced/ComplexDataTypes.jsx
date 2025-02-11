import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function ComplexDataTypes() {
    return (
        <>
            <Lead
                title="Working with JSON, XML, and Other Complex Data Types"
                paragraph1="Learn how to handle complex data types in SQL, including JSON, XML, arrays, enums, and custom types. These data types are essential for working with semi-structured or custom data formats in modern applications."
                paragraph2="This section covers how to use and query complex data types in SQL, including examples of handling JSON data, XML data, and arrays, as well as defining custom data types and enums."
            />

            <Section>
                <h2>What Are Complex Data Types in SQL?</h2>
                <p>SQL databases traditionally deal with structured data, where each column contains a specific type of value (e.g., integer, string, date). However, modern databases also support complex data types, which allow you to store more flexible, semi-structured, or even custom data.</p>
                <ul>
                    <li><strong>JSON</strong>: JavaScript Object Notation, commonly used for representing structured data in a text format.</li>
                    <li><strong>XML</strong>: Extensible Markup Language, used for representing data with a hierarchical structure.</li>
                    <li><strong>Arrays</strong>: Store multiple values in a single column, often used for representing lists or sets of data.</li>
                    <li><strong>Enums</strong>: Define a list of possible values for a column, which ensures that only valid values are inserted.</li>
                    <li><strong>Custom Data Types</strong>: User-defined types that allow you to define more complex data structures.</li>
                </ul>
            </Section>

            <Section>
                <h2>Working with JSON</h2>
                <p>JSON is widely used for representing structured data in a human-readable format. In SQL, you can store, query, and manipulate JSON data using built-in functions and operators.</p>

                <h3>Example: Storing JSON Data</h3>
                <p>Suppose you have a table called <code>users</code>, and you want to store user preferences as a JSON object. Here's how you can do that:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(100),
    preferences JSONB  -- Store preferences as a JSON object
);

INSERT INTO users (user_id, username, preferences)
VALUES (1, 'john_doe', '{"theme": "dark", "notifications": true}');
`} />
                <p>This query creates a table where the <code>preferences</code> column stores JSON data, and then inserts a record for a user with their preferences in JSON format.</p>

                <h3>Example: Querying JSON Data</h3>
                <p>To extract specific information from the JSON data, you can use the JSON functions provided by your SQL database:</p>
                <CodeSnippet language="sql" code={`SELECT username, preferences->>'theme' AS theme
FROM users
WHERE preferences->>'notifications' = 'true';
`} />
                <p>This query selects the <code>theme</code> of users who have notifications enabled, extracting the value from the JSON object using the <code>-&gt;&gt;</code> operator.</p>
            </Section>

            <Section>
                <h2>Working with XML</h2>
                <p>XML is another format for storing hierarchical data. In SQL, you can store XML data in an <code>XML</code> column and use XML functions to query and manipulate the data.</p>

                <h3>Example: Storing XML Data</h3>
                <p>Let's say you have a table called <code>orders</code>, and you want to store the order details as an XML document. Here's how you can do that:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_details XML  -- Store order details as XML
);

INSERT INTO orders (order_id, order_details)
VALUES (1, '<order><item>Widget</item><quantity>3</quantity><price>19.99</price></order>');
`} />
                <p>This query creates a table where the <code>order_details</code> column stores XML data, and then inserts an order with item details in XML format.</p>

                <h3>Example: Querying XML Data</h3>
                <p>To query specific values from the XML data, you can use XML functions:</p>
                <CodeSnippet language="sql" code={`SELECT order_id, 
       XPath('//item/text()', order_details) AS item
FROM orders
WHERE XPath('//price/text()', order_details)::text = '19.99';
`} />
                <p>This query retrieves the <code>item</code> for orders where the price is 19.99, using the <code>XPath()</code> function to navigate through the XML structure.</p>
            </Section>

            <Section>
                <h2>Working with Arrays</h2>
                <p>Arrays in SQL allow you to store multiple values in a single column. They can be useful for scenarios where you need to represent a list of items, such as product tags or a list of customer IDs.</p>

                <h3>Example: Storing Arrays</h3>
                <p>Let’s say you want to store a list of phone numbers for each user in a <code>users</code> table. Here's how you can define and insert array data:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(100),
    phone_numbers TEXT[]  -- Store an array of phone numbers
);

INSERT INTO users (user_id, username, phone_numbers)
VALUES (1, 'john_doe', ARRAY['123-456-7890', '987-654-3210']);
`} />
                <p>This query creates a table where the <code>phone_numbers</code> column stores an array of phone numbers and inserts a record for a user with multiple phone numbers.</p>

                <h3>Example: Querying Arrays</h3>
                <p>To query data from an array, you can use array functions:</p>
                <CodeSnippet language="sql" code={`SELECT username, unnest(phone_numbers) AS phone_number
FROM users;
`} />
                <p>This query retrieves each phone number from the array for each user using the <code>unnest()</code> function, which expands the array into multiple rows.</p>
            </Section>

            <Section>
                <h2>Working with Enums</h2>
                <p>Enums allow you to define a list of possible values for a column. This ensures that only valid values are stored in the column, making data more reliable.</p>

                <h3>Example: Defining an Enum</h3>
                <p>Let’s say you want to store the status of an order, which can only be one of three values: 'Pending', 'Shipped', or 'Delivered'. You can define an enum type and use it in a table:</p>
                <CodeSnippet language="sql" code={`CREATE TYPE order_status AS ENUM ('Pending', 'Shipped', 'Delivered');

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    status order_status  -- Use the enum type for status
);

INSERT INTO orders (order_id, status)
VALUES (1, 'Pending');
`} />
                <p>This query creates an enum type called <code>order_status</code>, which restricts the values in the <code>status</code> column to 'Pending', 'Shipped', or 'Delivered'.</p>

                <h3>Example: Querying Enums</h3>
                <p>To query data with an enum, you can use it like any other column value:</p>
                <CodeSnippet language="sql" code={`SELECT order_id, status
FROM orders
WHERE status = 'Shipped';
`} />
                <p>This query selects orders where the status is 'Shipped'.</p>
            </Section>

            <Section>
                <h2>Working with Custom Data Types</h2>
                <p>Custom data types allow you to define your own structured types in SQL. These can be useful for creating more complex data models and encapsulating related attributes in a single column.</p>

                <h3>Example: Defining a Custom Data Type</h3>
                <p>Let’s define a custom data type to store the full address of a user:</p>
                <CodeSnippet language="sql" code={`CREATE TYPE address AS (
    street VARCHAR(100),
    city VARCHAR(50),
    postal_code VARCHAR(10)
);

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(100),
    address address  -- Use the custom address type
);

INSERT INTO users (user_id, username, address)
VALUES (1, 'john_doe', ('123 Elm St', 'Springfield', '98765'));
`} />
                <p>This query creates a custom data type <code>address</code> with fields for <code>street</code>, <code>city</code>, and <code>postal_code</code>, and stores an address in the <code>address</code> column.</p>

                <h3>Example: Querying Custom Data Types</h3>
                <p>To query specific fields from a custom data type, you can access the attributes directly:</p>
                <CodeSnippet language="sql" code={`SELECT username, address.street, address.city
FROM users;
`} />
                <p>This query retrieves the username, street, and city from the <code>address</code> custom data type for each user.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Working with complex data types like JSON, XML, arrays, enums, and custom data types allows for more flexible and efficient data modeling. By utilizing these advanced features, you can store and query more sophisticated data in SQL, making your database more adaptable to modern application needs.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.ADVANCED_SQL_SYNTAX} nextPage={RoutePath.COMPLEX_SQL_STATEMENTS} />
        </>
    );
}
