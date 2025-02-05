import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function SQLJoins() {

    return (
        <>
            <Lead
                title="Introduction to SQL Joins"
                paragraph1="Learn about SQL joins, which are used to combine rows from two or more tables based on a related column between them."
                paragraph2="SQL Joins are essential for querying multiple tables and retrieving related data. In this section, we will cover the INNER JOIN and how to work with simple joins."
            />

            <Section>
                <h2>Understanding INNER JOIN</h2>
                <p>An <strong>INNER JOIN</strong> is used to combine rows from two or more tables based on a related column between them. It only returns rows where there is a match in both tables. If there is no match, the row will not be included in the result set.</p>
                <p>For example, if you have an "employees" table and a "departments" table, an INNER JOIN can be used to retrieve data for employees and their corresponding department information, but only for employees who belong to a department.</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, employees.position, departments.name AS department
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;`} />
                
                <p>This query selects the <code>name</code> and <code>position</code> columns from the <code>employees</code> table and the <code>name</code> column from the <code>departments</code> table, matching them on the <code>department_id</code> column from the <code>employees</code> table and the <code>id</code> column from the <code>departments</code> table. It will only return rows where the employee's department matches a department in the <code>departments</code> table.</p>

                <h3>INNER JOIN Example with Data</h3>
                <p>Let’s assume we have the following data in the <code>employees</code> and <code>departments</code> tables:</p>
                <ul>
                    <li><strong>employees</strong> table: <code>id</code>, <code>name</code>, <code>department_id</code></li>
                    <li><strong>departments</strong> table: <code>id</code>, <code>name</code></li>
                </ul>

                <p>If the <code>employees</code> table has the following records:</p>
                <ul>
                    <li>1, Alice, 1</li>
                    <li>2, Bob, 2</li>
                    <li>3, Charlie, 3</li>
                </ul>

                <p>And the <code>departments</code> table has:</p>
                <ul>
                    <li>1, IT</li>
                    <li>2, HR</li>
                    <li>3, Marketing</li>
                </ul>

                <p>The INNER JOIN query:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, employees.position, departments.name AS department
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;`} />

                <p>Will return:</p>
                <ul>
                    <li>Alice, Software Engineer, IT</li>
                    <li>Bob, HR Manager, HR</li>
                    <li>Charlie, Marketing Specialist, Marketing</li>
                </ul>

                <p>This is because there are matching rows in both tables, based on the <code>department_id</code> from the <code>employees</code> table and the <code>id</code> from the <code>departments</code> table.</p>
            </Section>

            <Section>
                <h2>Working with Simple JOINs</h2>
                <p>In SQL, a <strong>JOIN</strong> can also refer to an <strong>INNER JOIN</strong> by default, even if the type is not explicitly stated. If no type of JOIN is specified in the query, SQL will automatically use an INNER JOIN.</p>
                <p>The following query:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, departments.name AS department
FROM employees
JOIN departments ON employees.department_id = departments.id;`} />
                
                <p>This query is functionally identical to the INNER JOIN example, and it will return the same results. The use of just <code>JOIN</code> implies <strong>INNER JOIN</strong>, making the SQL simpler but the result the same.</p>

                <h3>Simple JOIN Example with Data</h3>
                <p>Let’s say we have the same data for the <code>employees</code> and <code>departments</code> tables, as mentioned above. The query:</p>
                <CodeSnippet language="sql" code={`SELECT employees.name, employees.position, departments.name AS department
FROM employees
JOIN departments ON employees.department_id = departments.id;`} />
                
                <p>Will return the same result:</p>
                <ul>
                    <li>Alice, Software Engineer, IT</li>
                    <li>Bob, HR Manager, HR</li>
                    <li>Charlie, Marketing Specialist, Marketing</li>
                </ul>

                <p>The key takeaway is that using <code>JOIN</code> on its own is shorthand for <code>INNER JOIN</code>, making queries concise while maintaining their functionality.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we’ve covered the basics of SQL Joins, including how to use the <strong>INNER JOIN</strong> to combine data from two tables based on a related column. We also saw that the <code>JOIN</code> keyword can be used as shorthand for <strong>INNER JOIN</strong> in SQL, simplifying queries while achieving the same results. Joins are fundamental in SQL when dealing with relational data and are an essential tool when querying data from multiple tables.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SQL_CONSTRAINTS} nextPage={undefined} />
        </>
    );
}
