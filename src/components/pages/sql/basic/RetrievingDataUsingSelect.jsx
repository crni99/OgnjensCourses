import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function RetrievingDataUsingSelect() {

    return (
        <>
            <Lead
                title="Retrieving Data Using SELECT"
                paragraph1="In this section, we will learn how to retrieve data from SQL tables using the SELECT statement, filter results with the WHERE clause, and sort data using the ORDER BY clause."
                paragraph2="The SELECT statement is one of the most commonly used SQL commands for querying data from a database."
            />

            <Section>
                <h2>Introduction to the SELECT Statement</h2>
                <p>The <strong>SELECT</strong> statement is used to query data from one or more tables in a database. It is the primary way of retrieving data from SQL databases.</p>
                <p>A basic SELECT query has the following structure:</p>
                <CodeSnippet language="sql" code={`SELECT column1, column2, ...
FROM table_name;`} />
                
                <p>This query selects the specified columns from a given table. You can replace the column names with an asterisk (<code>*</code>) to select all columns in the table:</p>
                <CodeSnippet language="sql" code={`SELECT * FROM employees;`} />
                
                <p>The above query retrieves all columns for all rows from the <code>employees</code> table.</p>
            </Section>

            <Section>
                <h2>Retrieving Data from a Table</h2>
                <p>To retrieve specific data from a table, you use the <strong>SELECT</strong> statement along with the table name. Below is an example where we retrieve specific columns from the <code>employees</code> table:</p>
                <CodeSnippet language="sql" code={`SELECT name, position, salary
FROM employees;`} />
                
                <p>This query will return only the <code>name</code>, <code>position</code>, and <code>salary</code> columns from the <code>employees</code> table.</p>

                <h3>Example: Selecting Specific Columns</h3>
                <p>If we only want to see the names and positions of employees, we can write:</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees;`} />
                
                <p>This query will return a list of employees' names and their job positions from the <code>employees</code> table.</p>
            </Section>

            <Section>
                <h2>Filtering Data with the WHERE Clause</h2>
                <p>To filter the data returned by the SELECT statement, you can use the <strong>WHERE</strong> clause. This allows you to specify conditions that the data must meet in order to be included in the result set.</p>

                <h3>1. Using Comparison Operators</h3>
                <p>Comparison operators like <strong>=</strong>, <strong>&gt;</strong>, <strong>&lt;</strong>, <strong>BETWEEN</strong>, and <strong>IN</strong> are often used with the WHERE clause.</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary > 50000;`} />
                
                <p>This query retrieves the names and salaries of employees whose salary is greater than 50,000.</p>

                <h3>2. Using AND, OR, NOT</h3>
                <p>Logical operators can be combined with the WHERE clause to build more complex conditions:</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE position = 'Software Engineer' AND salary > 70000;`} />
                
                <p>This query will return the names and positions of employees who are Software Engineers with a salary greater than 70,000.</p>

                <h3>Example: Filtering with IN and BETWEEN</h3>
                <p>If you want to retrieve employees who belong to specific positions or have salaries within a certain range, you can use <strong>IN</strong> or <strong>BETWEEN</strong>.</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE position IN ('Software Engineer', 'Data Scientist');`} />
                
                <p>This query will return the names and positions of employees who are either Software Engineers or Data Scientists.</p>

                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary BETWEEN 60000 AND 90000;`} />
                
                <p>This query will return the names and salaries of employees who earn between 60,000 and 90,000.</p>
            </Section>

            <Section>
                <h2>Sorting Data Using the ORDER BY Clause</h2>
                <p>The <strong>ORDER BY</strong> clause is used to sort the result set by one or more columns. By default, the <strong>ORDER BY</strong> clause sorts the data in ascending order (ASC), but you can specify descending order (DESC) as well.</p>

                <h3>1. Sorting in Ascending Order</h3>
                <p>If you want to sort the data in ascending order, you can use the <strong>ASC</strong> keyword (or simply omit it, as ASC is the default):</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
ORDER BY position ASC;`} />
                
                <p>This query will return a list of employees sorted alphabetically by their job position.</p>

                <h3>2. Sorting in Descending Order</h3>
                <p>If you want to sort the data in descending order, you use the <strong>DESC</strong> keyword:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
ORDER BY salary DESC;`} />
                
                <p>This query will return the names and salaries of employees, sorted from the highest to the lowest salary.</p>

                <h3>Example: Sorting and Filtering Together</h3>
                <p>You can also combine the <strong>WHERE</strong> and <strong>ORDER BY</strong> clauses. For example, to find employees earning more than 60,000, sorted by salary in descending order, you could write:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary > 60000
ORDER BY salary DESC;`} />
                
                <p>This query will return employees with salaries greater than 60,000, sorted from highest to lowest salary.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we've learned how to retrieve data using the <strong>SELECT</strong> statement, filter results using the <strong>WHERE</strong> clause, and sort data using the <strong>ORDER BY</strong> clause. Mastering these basic SQL operations is essential when working with relational databases and querying large datasets effectively.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.MANAGING_DATABASES_AND_TABLES} nextPage={RoutePath.SQL_OPERATORS_AND_EXPRESSIONS} />
        </>
    );
}
