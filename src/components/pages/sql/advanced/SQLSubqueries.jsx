import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function SQLSubqueries() {
    return (
        <>
            <Lead
                title="Writing Subqueries in SQL: SELECT, WHERE, and FROM Clauses"
                paragraph1="Learn how to write and use subqueries in SQL for complex queries. We'll explore how subqueries can be used in SELECT, WHERE, and FROM clauses, as well as the differences between correlated and non-correlated subqueries."
                paragraph2="In this section, we will break down the various ways to write subqueries, dive into correlated and non-correlated subqueries, and explore examples with detailed explanations."
            />

            <Section>
                <h2>Introduction to Subqueries in SQL</h2>
                <p>A subquery is a query embedded within another SQL query. Subqueries are commonly used to perform complex filtering, aggregation, and computations. Subqueries can appear in different parts of a SQL query: in the <strong>SELECT</strong>, <strong>WHERE</strong>, or <strong>FROM</strong> clauses. Writing and optimizing subqueries effectively is essential for working with relational databases.</p>
                <p>There are two main types of subqueries:</p>
                <ul>
                    <li><strong>Non-correlated subqueries:</strong> These subqueries are independent and can be executed independently of the outer query.</li>
                    <li><strong>Correlated subqueries:</strong> These subqueries depend on the outer query and are executed for each row processed by the outer query.</li>
                </ul>
            </Section>

            <Section>
                <h2>Using Subqueries in the SELECT Clause</h2>
                <p>Subqueries in the <strong>SELECT</strong> clause are often used to calculate additional data or retrieve aggregated values within the result set. These subqueries can be applied for calculations such as averages, sums, or other aggregations based on data from other tables.</p>

                <h3>Example: Subquery in SELECT Clause</h3>
                <p>Let’s say we want to display the names of employees along with their salary, and in addition, show the average salary of all employees:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary, 
       (SELECT AVG(salary) FROM employees) AS avg_salary
FROM employees;
`} />
                <p>In this query, the subquery <code>(SELECT AVG(salary) FROM employees)</code> calculates the average salary of all employees. The result is then displayed alongside each employee’s individual salary.</p>
            </Section>

            <Section>
                <h2>Using Subqueries in the WHERE Clause</h2>
                <p>Subqueries in the <strong>WHERE</strong> clause allow you to filter data based on the result of another query. These are often used for filtering values that depend on dynamic conditions or aggregations in other tables.</p>

                <h3>Example: Non-Correlated Subquery in WHERE Clause</h3>
                <p>Let’s find all employees who have a salary greater than the average salary of all employees:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
`} />
                <p>Here, the subquery <code>SELECT AVG(salary) FROM employees</code> returns a single value: the average salary. The outer query then retrieves the names and salaries of employees who earn more than that average. This is a non-correlated subquery because the subquery does not reference any column from the outer query.</p>

                <h3>Example: Correlated Subquery in WHERE Clause</h3>
                <p>Let’s now find all employees who earn more than the average salary in their respective departments:</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);
`} />
                <p>This is a correlated subquery because it references the <code>department_id</code> of the outer query’s row (from the <code>employees</code> table). The subquery calculates the average salary for each department, and the outer query checks whether the employee’s salary is greater than that department’s average.</p>
            </Section>

            <Section>
                <h2>Using Subqueries in the FROM Clause</h2>
                <p>Subqueries in the <strong>FROM</strong> clause allow you to treat the result of a subquery as a derived table. This is useful when you want to perform operations on the result of another query, such as applying filters or joins.</p>

                <h3>Example: Subquery in the FROM Clause</h3>
                <p>Let’s say we want to retrieve the names of departments along with their average salaries. Instead of calculating the average salary for each department in the SELECT clause, we can calculate it in a subquery inside the FROM clause:</p>
                <CodeSnippet language="sql" code={`SELECT department_name, avg_salary
FROM (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) AS avg_salaries
JOIN departments ON avg_salaries.department_id = departments.id;
`} />
                <p>The subquery inside the <code>FROM</code> clause calculates the average salary for each department. We then join this result with the <code>departments</code> table to get the department names alongside the average salaries. This approach treats the result of the subquery as a derived table named <code>avg_salaries</code>.</p>
            </Section>

            <Section>
                <h2>Correlated vs. Non-Correlated Subqueries</h2>
                <p>As mentioned earlier, there are two main types of subqueries: **correlated** and **non-correlated**. The key difference is that correlated subqueries depend on the outer query for their execution, whereas non-correlated subqueries can be executed independently.</p>

                <h3>Non-Correlated Subquery</h3>
                <p>A non-correlated subquery is executed once and its result is used by the outer query. It does not reference any columns from the outer query.</p>

                <h3>Example: Non-Correlated Subquery</h3>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE department_id IN (
    SELECT id FROM departments WHERE name = 'HR'
);
`} />
                <p>The inner query <code>SELECT id FROM departments WHERE name = 'HR'</code> retrieves the department ID for 'HR'. The outer query then retrieves all employees whose <code>department_id</code> matches that ID. The subquery is executed only once.</p>

                <h3>Correlated Subquery</h3>
                <p>A correlated subquery references one or more columns from the outer query and is executed for each row processed by the outer query. This makes correlated subqueries more resource-intensive than non-correlated subqueries.</p>

                <h3>Example: Correlated Subquery</h3>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);
`} />
                <p>The subquery calculates the average salary for each employee’s department, which is dependent on the outer query’s <code>department_id</code>. Therefore, the subquery is executed for each employee, making it a correlated subquery.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Subqueries are an essential tool in SQL for performing complex filtering, calculations, and aggregations. By understanding how and when to use subqueries in the <code>SELECT</code>, <code>WHERE</code>, and <code>FROM</code> clauses, you can write more flexible and powerful queries. The difference between correlated and non-correlated subqueries can help you choose the right approach for your queries, but always be mindful of performance implications, as correlated subqueries may be more resource-intensive.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SQL_JOINS_ADVANCED} nextPage={RoutePath.WINDOWS_FUNCTIONS} />
        </>
    );
}
