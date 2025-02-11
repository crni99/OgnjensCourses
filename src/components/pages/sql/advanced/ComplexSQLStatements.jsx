import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function ComplexSQLStatements() {
    return (
        <>
            <Lead
                title="Complex SQL Statements and Subqueries"
                paragraph1="Learn about complex SQL statements, including the use of subqueries, advanced joins, and techniques for optimizing SQL queries."
                paragraph2="This section dives deep into advanced SQL techniques like subqueries and other complex SQL statements, along with strategies to optimize them for better performance."
            />

            <Section>
                <h2>Introduction to Complex SQL Statements</h2>
                <p>Complex SQL statements involve multiple tables, subqueries, and operations that go beyond simple SELECTs or JOINs. These queries can include nested queries, advanced filtering, and aggregations. Writing complex SQL queries requires a good understanding of SQL and optimization strategies to ensure that queries perform efficiently, especially when working with large datasets.</p>
            </Section>

            <Section>
                <h2>Using Subqueries in SQL</h2>
                <p>A <strong>subquery</strong> is a query nested inside another query. Subqueries can be used in SELECT, WHERE, and HAVING clauses, enabling operations that depend on the result of another query. There are two main types of subqueries:</p>
                <ul>
                    <li><strong>Single-row subqueries</strong>: Return a single value.</li>
                    <li><strong>Multi-row subqueries</strong>: Return multiple rows of data.</li>
                </ul>

                <h3>Example 1: Single-Row Subquery</h3>
                <p>In this example, we use a subquery to find the employees with a salary greater than the average salary:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
`} />
                <p>Here, the subquery <code>SELECT AVG(salary) FROM employees</code> calculates the average salary, and the outer query retrieves the names and salaries of employees earning more than that amount.</p>

                <h3>Example 2: Multi-Row Subquery</h3>
                <p>This example uses a multi-row subquery to find employees who belong to specific departments:</p>
                <CodeSnippet language="sql" code={`SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name IN ('HR', 'IT'));
`} />
                <p>This query retrieves the IDs of the 'HR' and 'IT' departments and selects all employees whose <code>department_id</code> matches any of those IDs.</p>
            </Section>

            <Section>
                <h2>Types of Joins in Complex SQL Queries</h2>
                <p>When working with multiple tables, joins are essential for retrieving related data. Complex SQL queries often involve multiple types of joins, such as INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN. Using these joins together allows you to retrieve data from multiple sources in a single query.</p>

                <h3>Example: Multiple Joins in a Complex Query</h3>
                <p>Here’s an example where we join three tables — <code>employees</code>, <code>departments</code>, and <code>salaries</code> — to retrieve employee names, departments, and salaries in one query:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department, salaries.amount AS salary
FROM employees
JOIN departments ON employees.department_id = departments.id
JOIN salaries ON employees.id = salaries.employee_id;
`} />
                <p>This query performs two joins: one between <code>employees</code> and <code>departments</code>, and another between <code>employees</code> and <code>salaries</code> tables.</p>
            </Section>

            <Section>
                <h2>Optimizing Subqueries and Complex SQL Statements</h2>
                <p>Subqueries and complex SQL statements can lead to performance issues, especially when dealing with large datasets or inefficiently structured queries. Here are some optimization strategies to improve query performance:</p>

                <h3>1. Use JOINs Instead of Subqueries</h3>
                <p>Subqueries can often be slower than joins, especially when nested subqueries are used in the WHERE clause. In many cases, converting subqueries to joins can improve performance. Let’s compare a subquery with its join version:</p>

                <h4>Subquery Version</h4>
                <CodeSnippet language="sql" code={`SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name = 'IT');
`} />

                <h4>Join Version</h4>
                <CodeSnippet language="sql" code={`SELECT employees.name
FROM employees
JOIN departments ON employees.department_id = departments.id
WHERE departments.name = 'IT';
`} />

                <p>The join version is often more efficient because it eliminates the overhead of executing a subquery for each row in the <code>employees</code> table.</p>

                <h3>2. Avoid SELECT *</h3>
                <p>Using <code>SELECT *</code> retrieves all columns from the selected tables, which can be inefficient, especially when working with large datasets. Instead, select only the columns you need:</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees;
`} />
                <p>This is far more efficient than using <code>SELECT *</code>, as it only retrieves the necessary columns.</p>

                <h3>3. Use EXISTS Instead of IN for Subqueries</h3>
                <p>In some cases, using <code>EXISTS</code> can be more efficient than using <code>IN</code> with subqueries, especially when checking for the existence of rows. For example:</p>

                <h4>Using IN</h4>
                <CodeSnippet language="sql" code={`SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name = 'IT');
`} />

                <h4>Using EXISTS</h4>
                <CodeSnippet language="sql" code={`SELECT name
FROM employees e
WHERE EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.id AND d.name = 'IT');
`} />
                <p>In this case, using <code>EXISTS</code> is more efficient because it stops searching as soon as a match is found, while <code>IN</code> has to build a list of all values to compare against.</p>
            </Section>

            <Section>
                <h2>Optimizing Complex SQL Joins</h2>
                <p>When working with multiple joins in complex queries, optimizing how the joins are structured is essential to avoid performance issues. Here are a few optimization tips:</p>

                <h3>1. Minimize the Number of Joins</h3>
                <p>Although it might be tempting to join multiple tables in one query, each join adds complexity and can slow down the query. Only join the tables you need for the results:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
JOIN departments ON employees.department_id = departments.id;
`} />
                <p>This query only joins the <code>employees</code> and <code>departments</code> tables, which ensures that only the necessary information is retrieved.</p>

                <h3>2. Use INNER JOINs Instead of OUTER JOINs When Possible</h3>
                <p>While <code>LEFT JOIN</code> and other outer joins are useful, they are more resource-intensive than <code>INNER JOIN</code> because they return unmatched rows. Use inner joins when you only need rows that exist in both tables:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;
`} />
                <p>This query only returns employees who are assigned to a department, excluding those without a matching department.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Complex SQL statements and subqueries are essential tools for working with relational data, but they must be optimized for performance. By converting subqueries to joins where possible, limiting the number of columns and rows retrieved, and using efficient filtering methods like <code>EXISTS</code> instead of <code>IN</code>, you can greatly improve SQL query performance. Always analyze query execution plans and consider indexing strategies to ensure optimal performance in large-scale SQL Server environments.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.COMPLEX_DATA_TYPES} nextPage={RoutePath.SQL_JOINS_ADVANCED} />
        </>
    );
}
