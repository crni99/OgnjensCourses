import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function SQLJoinsAdvanced() {
    return (
        <>
            <Lead
                title="Advanced SQL Joins: LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, SELF JOIN"
                paragraph1="Explore the different types of SQL joins: LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN."
                paragraph2="In this section, we will discuss and demonstrate advanced SQL joins with practical examples, helping you understand how to combine data from multiple tables in various ways."
            />

            <Section>
                <h2>Understanding LEFT JOIN</h2>
                <p>A <strong>LEFT JOIN</strong> (or <strong>LEFT OUTER JOIN</strong>) returns all rows from the left table (the first table in the query) and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.</p>
                <p>Example: Suppose we have an <code>employees</code> table and a <code>departments</code> table. Some employees may not belong to a department.</p>

                <h3>LEFT JOIN Example</h3>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id;
`} />
                <p>This query will return all employees, including those who do not belong to any department. For employees without a department, the <code>department</code> column will contain <code>NULL</code>.</p>

                <h4>Example Output:</h4>
                <ul>
                    <li>Alice, IT</li>
                    <li>Bob, HR</li>
                    <li>Charlie, NULL</li>
                </ul>
            </Section>

            <Section>
                <h2>Understanding RIGHT JOIN</h2>
                <p>A <strong>RIGHT JOIN</strong> (or <strong>RIGHT OUTER JOIN</strong>) returns all rows from the right table (the second table in the query) and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.</p>
                <p>It’s essentially the opposite of a LEFT JOIN.</p>

                <h3>RIGHT JOIN Example</h3>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.id;
`} />
                <p>This query will return all departments, even those that do not have any employees. For departments without employees, the <code>name</code> column from the <code>employees</code> table will contain <code>NULL</code>.</p>

                <h4>Example Output:</h4>
                <ul>
                    <li>Alice, IT</li>
                    <li>Bob, HR</li>
                    <li>NULL, Marketing</li>
                </ul>
            </Section>

            <Section>
                <h2>Understanding FULL OUTER JOIN</h2>
                <p>A <strong>FULL OUTER JOIN</strong> returns all rows when there is a match in either the left or right table. Rows from the left table that have no match in the right table will contain NULL for the right table’s columns, and vice versa.</p>

                <h3>FULL OUTER JOIN Example</h3>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
FULL OUTER JOIN departments ON employees.department_id = departments.id;
`} />
                <p>This query will return all employees and all departments, including those with no matches. If an employee doesn’t belong to a department, their department will be <code>NULL</code>, and if a department has no employees, the employee name will be <code>NULL</code>.</p>

                <h4>Example Output:</h4>
                <ul>
                    <li>Alice, IT</li>
                    <li>Bob, HR</li>
                    <li>Charlie, NULL</li>
                    <li>NULL, Marketing</li>
                </ul>
            </Section>

            <Section>
                <h2>Understanding CROSS JOIN</h2>
                <p>A <strong>CROSS JOIN</strong> returns the Cartesian product of two tables. This means it will return all possible combinations of rows from the left and right tables. Be cautious, as this can result in a large number of rows if both tables have many entries.</p>

                <h3>CROSS JOIN Example</h3>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
CROSS JOIN departments;
`} />
                <p>This query will return every possible combination of employees and departments, regardless of whether the employee actually works in the department or not.</p>

                <h4>Example Output:</h4>
                <ul>
                    <li>Alice, IT</li>
                    <li>Alice, HR</li>
                    <li>Alice, Marketing</li>
                    <li>Bob, IT</li>
                    <li>Bob, HR</li>
                    <li>Bob, Marketing</li>
                    <li>Charlie, IT</li>
                    <li>Charlie, HR</li>
                    <li>Charlie, Marketing</li>
                </ul>
            </Section>

            <Section>
                <h2>Understanding SELF JOIN</h2>
                <p>A <strong>SELF JOIN</strong> is a join where a table is joined with itself. This can be useful when you need to compare rows within the same table. Typically, aliases are used to differentiate the two instances of the same table.</p>

                <h3>SELF JOIN Example</h3>
                <p>Let’s assume we have an <code>employees</code> table, and we want to retrieve employees and their managers. In this case, the manager is also an employee in the same table.</p>
                <CodeSnippet language="sql" code={`SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
`} />
                <p>This query joins the <code>employees</code> table with itself. The alias <code>e1</code> represents the employee, and <code>e2</code> represents the manager. The <code>LEFT JOIN</code> ensures that employees without a manager are also included.</p>

                <h4>Example Output:</h4>
                <ul>
                    <li>Alice, Bob</li>
                    <li>Bob, NULL</li>
                    <li>Charlie, Alice</li>
                </ul>
                <p>In this case, Bob does not have a manager (represented as <code>NULL</code>), while Alice manages Charlie, and Bob manages Alice.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>SQL joins are powerful tools for combining data from multiple tables. Here we covered several types of joins:</p>
                <ul>
                    <li><strong>LEFT JOIN</strong> returns all rows from the left table, with matched rows from the right table.</li>
                    <li><strong>RIGHT JOIN</strong> returns all rows from the right table, with matched rows from the left table.</li>
                    <li><strong>FULL OUTER JOIN</strong> returns all rows from both tables, with NULLs where there is no match.</li>
                    <li><strong>CROSS JOIN</strong> returns all possible combinations of rows from the two tables (Cartesian product).</li>
                    <li><strong>SELF JOIN</strong> allows you to join a table with itself, useful for hierarchical data like employees and their managers.</li>
                </ul>
                <p>Mastering these joins will help you write more complex SQL queries to retrieve and analyze relational data efficiently.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.COMPLEX_SQL_STATEMENTS} nextPage={RoutePath.SQL_SUBQUERIES} />
        </>
    );
}
