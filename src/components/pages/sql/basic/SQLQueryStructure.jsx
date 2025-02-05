import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function StructureOfSQLQueries() {

    return (
        <>
            <Lead
                title="Understanding the Structure of SQL Queries"
                paragraph1="In this section, you will learn the structure of SQL queries and how to write simple SQL statements to interact with databases."
                paragraph2="SQL queries are fundamental in extracting and manipulating data from a database. We’ll explore the essential components of an SQL query: SELECT, FROM, and WHERE."
            />

            <Section>
                <h2>Structure of an SQL Query</h2>
                <p>SQL queries generally follow a specific structure and can be oken down into different parts, including the <strong>SELECT</strong>, <strong>FROM</strong>, and <strong>WHERE</strong> clauses. Each part serves a specific purpose in retrieving data from the database.</p>
                
                <h3>1. SELECT Clause</h3>
                <p>The <strong>SELECT</strong> clause is used to specify which columns you want to retrieve from a table. You can select one or more columns, or even all columns using <code>*</code>.</p>
                <CodeSnippet language="sql" code={`SELECT column1, column2 FROM table_name;`} />
                <p>Example: To get all the columns from a table called <code>employees</code>, use:</p>
                <CodeSnippet language="sql" code={`SELECT * FROM employees;`} />
                <p>This query retrieves all records (rows) and all columns from the <code>employees</code> table.</p>

                <h3>2. FROM Clause</h3>
                <p>The <strong>FROM</strong> clause specifies the table from which to retrieve the data. It follows the <strong>SELECT</strong> clause and is essential for telling the database where to find the data.</p>
                <CodeSnippet language="sql" code={`SELECT column1, column2 FROM table_name;`} />
                <p>Example: To select the <code>name</code> and <code>salary</code> columns from the <code>employees</code> table:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary FROM employees;`} />

                <h3>3. WHERE Clause</h3>
                <p>The <strong>WHERE</strong> clause is used to filter records based on specified conditions. It is essential when you want to retrieve only specific rows from the table, rather than the entire dataset.</p>
                <CodeSnippet language="sql" code={`SELECT column1, column2 FROM table_name WHERE condition;`} />
                <p>Example: To find all employees with a salary greater than 50,000:</p>
                <CodeSnippet language="sql" code={`SELECT name, position FROM employees WHERE salary > 50000;`} />
                <p>This query retrieves only the records where the salary is greater than 50,000.</p>
            </Section>

            <Section>
                <h2>Writing Simple SQL Queries</h2>
                <p>Let’s look at a few more examples to understand how to structure simple SQL queries. We’ll continue using the <code>employees</code> table for consistency.</p>

                <h3>1. Retrieving All Data from a Table</h3>
                <p>To retrieve all the records from the <code>employees</code> table, you would use:</p>
                <CodeSnippet language="sql" code={`SELECT * FROM employees;`} />
                <p>This query retrieves every row and column from the table.</p>

                <h3>2. Filtering Data with WHERE</h3>
                <p>If you want to retrieve data for specific employees, such as those who are Software Engineers:</p>
                <CodeSnippet language="sql" code={`SELECT name, position FROM employees WHERE position = 'Software Engineer';`} />
                <p>This query returns the names and positions of employees who have the position of "Software Engineer".</p>

                <h3>3. Sorting Data with ORDER BY</h3>
                <p>You can also sort your query results. To sort the employees by salary in descending order, you can use:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary FROM employees ORDER BY salary DESC;`} />
                <p>This query sorts the results by the <code>salary</code> column in descending order.</p>
            </Section>

            <Section>
                <h2>Working with Databases and Tables</h2>
                <p>Before running SQL queries, you need to understand how to interact with databases and tables. SQL allows you to create, modify, and manage databases and tables easily.</p>

                <h3>1. Creating a Database</h3>
                <p>To create a new database, use the <strong>CREATE DATABASE</strong> statement:</p>
                <CodeSnippet language="sql" code={`CREATE DATABASE company;`} />
                <p>This command creates a new database named <code>company</code>.</p>

                <h3>2. Creating a Table</h3>
                <p>Once you’ve created a database, you can create tables within it. Here’s an example of creating an <code>employees</code> table:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    salary DECIMAL(10, 2)
);`} />
                <p>This query creates a table named <code>employees</code> with columns for <code>id</code>, <code>name</code>, <code>position</code>, and <code>salary</code>.</p>

                <h3>3. Deleting a Table</h3>
                <p>If you want to delete a table, you can use the <strong>DROP TABLE</strong> statement. Be cautious, as this will permanently remove the table and its data:</p>
                <CodeSnippet language="sql" code={`DROP TABLE employees;`} />
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, you learned about the basic structure of an SQL query, including how to use the <strong>SELECT</strong>, <strong>FROM</strong>, and <strong>WHERE</strong> clauses. Additionally, we explored how to write simple SQL queries to interact with databases and tables. Understanding these fundamental elements is the first step toward mastering SQL and working effectively with databases.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.GETTING_STARTED_SQL} nextPage={RoutePath.MANAGING_DATABASES_AND_TABLES} />
        </>
    );
}
