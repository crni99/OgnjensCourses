import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function AdvancedSQLSyntax() {
    return (
        <>
            <Lead
                title="Advanced SQL Syntax and Query Optimization"
                paragraph1="Learn advanced SQL syntax techniques and query optimization strategies for improving performance on both general SQL databases and Microsoft SQL Server."
                paragraph2="This section explores complex SQL statements, query optimization strategies, and advanced SQL functions to help you write efficient and effective SQL queries, both globally and specifically for SQL Server."
            />

            <Section>
                <h2>Understanding Query Optimization</h2>
                <p>Query optimization is the process of improving the performance of SQL queries. The goal is to reduce query execution time, especially when working with large datasets. Optimization can be achieved through techniques such as proper indexing, minimizing unnecessary joins, and utilizing efficient functions and clauses.</p>
                
                <h3>Key Techniques for Query Optimization:</h3>
                <ul>
                    <li>Use of indexes to speed up data retrieval (both globally and in SQL Server)</li>
                    <li>Avoiding SELECT * and specifying only the required columns</li>
                    <li>Using appropriate join types (e.g., INNER JOIN, LEFT JOIN) to minimize row scans</li>
                    <li>Optimizing subqueries and nested queries</li>
                    <li>Using execution plans (e.g., <code>EXPLAIN</code> in MySQL/PostgreSQL or <code>SET STATISTICS IO</code> in SQL Server) to analyze performance</li>
                </ul>
                
                <h3>Example: Query Optimization Using Indexes</h3>
                <p>Suppose you have a large <code>orders</code> table and often query by <code>customer_id</code>. Without an index, this query can be slow. Here’s how you would create an index in a general SQL database and SQL Server:</p>

                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`CREATE INDEX idx_customer_id ON orders(customer_id);`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`CREATE INDEX idx_customer_id ON orders(customer_id);`} />

                <p>Creating an index on the <code>customer_id</code> column in both environments will significantly speed up the query performance when filtering by <code>customer_id</code>.</p>
            </Section>

            <Section>
                <h2>Complex SQL Statements</h2>
                <p>As your queries grow in complexity, you will need to work with more advanced SQL statements. These may involve nested subqueries, multi-table joins, and advanced filtering. Let’s look at an example of a complex query that calculates the average salary for employees in the IT department:</p>
                
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department, AVG(salaries.amount) AS avg_salary
FROM employees
INNER JOIN departments ON employees.department_id = departments.id
INNER JOIN salaries ON employees.id = salaries.employee_id
WHERE departments.name = 'IT'
GROUP BY employees.name, departments.name;
`} />
                
                <p>This query demonstrates the use of multiple <code>INNER JOIN</code> statements and aggregation with <code>GROUP BY</code>:</p>
                <ul>
                    <li>The <code>INNER JOIN</code> combines data from <code>employees</code>, <code>departments</code>, and <code>salaries</code> tables.</li>
                    <li>The <code>WHERE</code> clause filters results to only include employees from the 'IT' department.</li>
                    <li>The <code>AVG(salaries.amount)</code> function calculates the average salary for each employee in the IT department.</li>
                    <li>The <code>GROUP BY</code> groups results by employee name and department to ensure that the average salary is calculated correctly.</li>
                </ul>
            </Section>

            <Section>
                <h2>Using Advanced SQL Functions</h2>
                <p>SQL provides advanced functions to help with complex reporting and analytics. Here, we’ll discuss two key functions: Window Functions and Common Table Expressions (CTEs).</p>

                <h3>Window Functions</h3>
                <p>Window functions perform calculations across a set of rows related to the current row. These can be useful for tasks such as ranking, running totals, and cumulative sums. Common window functions include <code>ROW_NUMBER()</code>, <code>RANK()</code>, and <code>DENSE_RANK()</code>.</p>

                <h4>Example: Using ROW_NUMBER() for Ranking</h4>
                <CodeSnippet language="sql" code={`SELECT employee_id, name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
FROM employees;
`} />
                
                <p>This query uses <code>ROW_NUMBER()</code> to rank employees based on their salary. It orders the results in descending order and assigns a unique rank to each employee.</p>

                <h3>Common Table Expressions (CTEs)</h3>
                <p>Common Table Expressions (CTEs) are used to organize complex queries into simpler parts. They are defined with the <code>WITH</code> keyword and can be reused within the query. This makes your queries easier to read and maintain.</p>

                <h4>Example: Using a CTE to Calculate Department Salaries</h4>
                <CodeSnippet language="sql" code={`WITH department_salaries AS (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT departments.name, department_salaries.avg_salary
FROM departments
INNER JOIN department_salaries ON departments.id = department_salaries.department_id;
`} />
                
                <p>This example defines a CTE called <code>department_salaries</code> that calculates the average salary per department. The main query uses this CTE to join with the <code>departments</code> table and retrieve department names along with their average salaries.</p>
            </Section>

            <Section>
                <h2>Understanding Query Execution Plans</h2>
                <p>Query execution plans show how a database processes a query. They can help you identify performance bottlenecks, such as missing indexes or inefficient join strategies. You can view the execution plan in various ways, such as using <code>EXPLAIN</code> in MySQL/PostgreSQL or <code>SET STATISTICS IO</code> in SQL Server.</p>
                
                <h4>Global SQL Example: Viewing the Execution Plan</h4>
                <CodeSnippet language="sql" code={`EXPLAIN SELECT * FROM employees WHERE department_id = 2;`} />

                <h4>SQL Server Example: Viewing the Execution Plan</h4>
                <CodeSnippet language="sql" code={`SET STATISTICS IO ON;

SELECT * FROM employees WHERE department_id = 2;

SET STATISTICS IO OFF;
`} />
                
                <p>The <code>EXPLAIN</code> or <code>SET STATISTICS IO</code> commands show the query execution plan, including information about index usage, table scans, and row counts.</p>
            </Section>

            <Section>
                <h2>Query Optimization Best Practices</h2>
                <p>Whether you are working with a general SQL database or SQL Server, the following best practices can help optimize your queries:</p>
                <ul>
                    <li><strong>Use indexes</strong>: Index frequently queried columns to improve retrieval speed.</li>
                    <li><strong>Avoid SELECT *</strong>: Specify only the necessary columns to avoid fetching extra data.</li>
                    <li><strong>Minimize the number of joins</strong>: Join only the tables you need to reduce complexity and improve performance.</li>
                    <li><strong>Efficient WHERE clauses</strong>: Filter rows as early as possible to reduce processing time.</li>
                    <li><strong>Limit result sets</strong>: Use <code>LIMIT</code> or <code>TOP</code> to restrict the number of rows returned, especially with large datasets.</li>
                </ul>
                
                <h4>Example: Using LIMIT and TOP for Large Datasets</h4>
                <p>For large tables, limit the number of rows returned to improve performance:</p>
                
                <h5>Global SQL Example:</h5>
                <CodeSnippet language="sql" code={`SELECT * FROM employees WHERE department_id = 2 LIMIT 10;`} />
                
                <h5>SQL Server Example:</h5>
                <CodeSnippet language="sql" code={`SELECT TOP 10 * FROM employees WHERE department_id = 2;`} />

                <p>Both queries return only the first 10 employees in the specified department, reducing query processing time.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Mastering advanced SQL syntax and query optimization is essential for writing efficient queries. By understanding techniques like window functions, CTEs, and execution plans, and applying best practices such as indexing and limiting result sets, you can improve performance on both general SQL databases and SQL Server. Use these strategies to write efficient, maintainable SQL queries, whether for small or large datasets.</p>
            </Section>

            <PageNavigation prevPage={undefined} nextPage={RoutePath.COMPLEX_DATA_TYPES} />
        </>
    );
}
