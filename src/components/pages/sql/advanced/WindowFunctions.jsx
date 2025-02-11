import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function WindowFunctions() {
    return (
        <>
            <Lead
                title="Introduction to Window Functions in SQL"
                paragraph1="Learn about window functions in SQL, including ROW_NUMBER, RANK, DENSE_RANK, and more. Understand how to use the PARTITION BY and ORDER BY clauses to organize and rank your data."
                paragraph2="This section covers the fundamentals of window functions, including how to partition and order your result sets, and how these functions can be applied to complex data analysis tasks."
            />

            <Section>
                <h2>What Are Window Functions?</h2>
                <p>Window functions in SQL allow you to perform calculations across a set of table rows that are related to the current row. They are similar to aggregate functions, but unlike aggregate functions, window functions do not collapse the result set — instead, they perform the calculation over a “window” of rows related to the current row.</p>
                <p>Common window functions include <strong>ROW_NUMBER()</strong>, <strong>RANK()</strong>, <strong>DENSE_RANK()</strong>, and others. These functions are used with the <strong>PARTITION BY</strong> and <strong>ORDER BY</strong> clauses to define how to group and sort the data before applying the calculation.</p>
            </Section>

            <Section>
                <h2>Basic Syntax of Window Functions</h2>
                <p>Window functions are typically written as follows:</p>
                <CodeSnippet language="sql" code={`SELECT column1, column2, window_function() OVER (PARTITION BY column3 ORDER BY column4) AS window_function_result
FROM table_name;
`} />
                <p>Here’s a breakdown of the syntax:</p>
                <ul>
                    <li><strong>window_function()</strong>: The window function you are using (e.g., <code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>DENSE_RANK()</code>, etc.)</li>
                    <li><strong>PARTITION BY</strong>: Divides the data into partitions or groups before applying the window function. This is optional but useful for working with data in subsets (e.g., by department, region, etc.).</li>
                    <li><strong>ORDER BY</strong>: Orders the rows within each partition before applying the window function. This is typically used to determine how the ranking functions behave.</li>
                </ul>
            </Section>

            <Section>
                <h2>ROW_NUMBER() Function</h2>
                <p>The <code>ROW_NUMBER()</code> function assigns a unique sequential integer to rows within a partition, starting at 1 for the first row in each partition.</p>

                <h3>Example: Using ROW_NUMBER()</h3>
                <p>Let's assign a row number to employees within each department, ordered by their hire date:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, hire_date,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY hire_date) AS row_num
FROM employees;
`} />
                <p>This query assigns a row number to each employee within their respective department, ordered by their hire date. The row number resets for each department.</p>
            </Section>

            <Section>
                <h2>RANK() and DENSE_RANK() Functions</h2>
                <p>The <code>RANK()</code> and <code>DENSE_RANK()</code> functions both assign a rank to each row within a partition, but they handle ties differently:</p>
                <ul>
                    <li><strong>RANK()</strong>: If two rows have the same value for the order by column, they will receive the same rank. However, the next rank will skip the rank(s) taken by the tied rows.</li>
                    <li><strong>DENSE_RANK()</strong>: Similar to <code>RANK()</code>, but it does not skip ranks. If two rows have the same value for the order by column, they will receive the same rank, and the next rank will immediately follow.</li>
                </ul>

                <h3>Example: Using RANK()</h3>
                <p>Let’s rank employees by their salary within each department, ordered by salary in descending order:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
FROM employees;
`} />
                <p>In this example, employees with the highest salary within each department receive a rank of 1, and the rank increases for each subsequent employee. If two employees have the same salary, they will receive the same rank, but the next employee will get a rank that skips one number (e.g., two employees tied at rank 1 will cause the next employee to be ranked 3). </p>

                <h3>Example: Using DENSE_RANK()</h3>
                <p>Now let’s use <code>DENSE_RANK()</code> to rank employees by salary within each department:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, salary,
       DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rank
FROM employees;
`} />
                <p>In this case, if two employees share the same salary, they will receive the same rank, but the next employee will receive the next consecutive rank (e.g., two employees tied at rank 1 will cause the next employee to be ranked 2, not 3 as in <code>RANK()</code>).</p>
            </Section>

            <Section>
                <h2>PARTITION BY and ORDER BY Clauses in Window Functions</h2>
                <p>The <strong>PARTITION BY</strong> clause divides the result set into partitions, and the window function is applied within each partition independently. The <strong>ORDER BY</strong> clause is used to define how the data is sorted within each partition.</p>

                <h3>PARTITION BY Example</h3>
                <p>Let’s rank employees within each department based on their salary. The <code>PARTITION BY department_id</code> ensures that the ranking resets for each department:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
FROM employees;
`} />
                <p>Here, employees within each department are ranked based on their salary. The ranking restarts for each department because of the <code>PARTITION BY</code> clause.</p>

                <h3>ORDER BY Example</h3>
                <p>Let’s use <code>ORDER BY</code> to order employees within each department by their hire date, and assign a row number:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, hire_date,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY hire_date) AS row_num
FROM employees;
`} />
                <p>In this query, the <code>ROW_NUMBER()</code> function assigns a row number to each employee within each department, ordered by their hire date. The first employee in each department (based on hire date) gets a row number of 1, and the rest follow sequentially.</p>
            </Section>

            <Section>
                <h2>Other Common Window Functions</h2>
                <p>In addition to <code>ROW_NUMBER()</code>, <code>RANK()</code>, and <code>DENSE_RANK()</code>, there are other useful window functions that can help with advanced data analysis:</p>
                <ul>
                    <li><strong>NTILE(n)</strong>: Divides the result set into <code>n</code> approximately equal parts and assigns each row a number corresponding to its part.</li>
                    <li><strong>LEAD() and LAG()</strong>: Access the next or previous row’s value within the same result set, useful for comparing values between rows.</li>
                    <li><strong>SUM(), AVG(), MIN(), MAX()</strong>: Perform aggregation over a window of rows, similar to their standard aggregate counterparts, but without collapsing the result set.</li>
                </ul>

                <h3>Example: Using LEAD() and LAG()</h3>
                <p>Let’s calculate the difference in salary between an employee and the next employee within the same department:</p>
                <CodeSnippet language="sql" code={`SELECT name, department_id, salary,
       LEAD(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) - salary AS salary_diff
FROM employees;
`} />
                <p>In this query, the <code>LEAD()</code> function retrieves the salary of the next employee in the same department, and we calculate the difference between the current employee’s salary and the next one.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Window functions in SQL are powerful tools that allow you to perform complex analyses over partitions of your data without collapsing the result set. By using functions like <code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>DENSE_RANK()</code>, and others, you can perform ranking, windowed aggregations, and more sophisticated calculations. Understanding how to use the <code>PARTITION BY</code> and <code>ORDER BY</code> clauses is essential for effectively applying window functions to your data.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SQL_SUBQUERIES} nextPage={RoutePath.DATABASE_NORMALIZATION} />
        </>
    );
}
