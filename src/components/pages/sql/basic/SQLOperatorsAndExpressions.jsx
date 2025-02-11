import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLBasic";

export default function SQLOperatorsAndExpressions() {

    return (
        <>
            <Lead
                title="SQL Operators and Expressions"
                paragraph1="In this section, we will cover SQL operators, which allow you to compare values, combine conditions, and evaluate expressions when querying data."
                paragraph2="You will learn about comparison operators, logical operators, and how to use simple expressions in SQL queries."
            />

            <Section>
                <h2>Comparison Operators</h2>
                <p>Comparison operators are used to compare values in SQL queries. These operators allow you to filter data based on specific conditions.</p>

                <h3>1. Equal to (=)</h3>
                <p>The <strong>=</strong> operator is used to test equality. It compares two values and returns true if they are equal.</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE position = 'Software Engineer';`} />
                
                <p>This query will retrieve the names and positions of employees who are Software Engineers.</p>

                <h3>2. Less Than (&gt;) and Greater Than (&lt;)</h3>
                <p>The <strong>&gt;</strong> operator checks if a value is less than another, and the <strong>&lt;</strong> operator checks if a value is greater than another.</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary > 50000;`} />
                
                <p>This query retrieves the names and salaries of employees who have a salary greater than 50,000.</p>

                <h3>3. IN</h3>
                <p>The <strong>IN</strong> operator allows you to test whether a value is contained within a list of values. It is often used when checking multiple conditions.</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE position IN ('Software Engineer', 'Data Scientist');`} />
                
                <p>This query retrieves the names and positions of employees who are either Software Engineers or Data Scientists.</p>

                <h3>4. BETWEEN</h3>
                <p>The <strong>BETWEEN</strong> operator is used to filter the result set within a certain range, including both the start and end values.</p>
                <CodeSnippet language="sql" code={`SELECT name, salary
FROM employees
WHERE salary BETWEEN 60000 AND 90000;`} />
                
                <p>This query retrieves the names and salaries of employees whose salary is between 60,000 and 90,000.</p>
            </Section>

            <Section>
                <h2>Logical Operators</h2>
                <p>Logical operators allow you to combine multiple conditions in a SQL query. These operators are essential when building more complex queries with multiple conditions.</p>

                <h3>1. AND</h3>
                <p>The <strong>AND</strong> operator is used to combine multiple conditions. All conditions must be true for a record to be included in the result.</p>
                <CodeSnippet language="sql" code={`SELECT name, position, salary
FROM employees
WHERE position = 'Software Engineer' AND salary > 70000;`} />
                
                <p>This query retrieves the names, positions, and salaries of employees who are Software Engineers with a salary greater than 70,000.</p>

                <h3>2. OR</h3>
                <p>The <strong>OR</strong> operator is used to combine multiple conditions where at least one condition must be true for a record to be included in the result.</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE position = 'Software Engineer' OR position = 'Data Scientist';`} />
                
                <p>This query retrieves the names and positions of employees who are either Software Engineers or Data Scientists.</p>

                <h3>3. NOT</h3>
                <p>The <strong>NOT</strong> operator negates a condition. It is used to exclude records that meet a certain condition.</p>
                <CodeSnippet language="sql" code={`SELECT name, position
FROM employees
WHERE NOT position = 'Software Engineer';`} />
                
                <p>This query retrieves the names and positions of employees who are not Software Engineers.</p>
            </Section>

            <Section>
                <h2>Using Simple Expressions in SQL</h2>
                <p>SQL also allows you to use simple expressions, which are operations that combine columns, literals, or other values in a query. Expressions can be used for various purposes, including calculations, string manipulation, and date comparisons.</p>

                <h3>1. Arithmetic Expressions</h3>
                <p>SQL supports basic arithmetic operations, such as addition (<strong>+</strong>), subtraction (<strong>-</strong>), multiplication (<strong>*</strong>), and division (<strong>/</strong>).</p>
                <CodeSnippet language="sql" code={`SELECT name, salary, salary * 0.1 AS bonus
FROM employees;`} />
                
                <p>This query calculates the bonus for each employee as 10% of their salary and returns the employee name, salary, and bonus.</p>

                <h3>2. String Concatenation</h3>
                <p>SQL allows you to concatenate strings using the <strong>+</strong> operator (in some databases like SQL Server) or the <strong>CONCAT()</strong> function (in MySQL, PostgreSQL, etc.).</p>
                <CodeSnippet language="sql" code={`SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;`} />
                
                <p>This query concatenates the first and last names of employees to create a full name.</p>

                <h3>3. Date Expressions</h3>
                <p>SQL also supports date manipulation. You can use functions like <strong>DATEADD</strong>, <strong>DATEDIFF</strong>, or simply subtract dates to perform calculations on dates.</p>
                <CodeSnippet language="sql" code={`SELECT name, hire_date, DATEDIFF(CURRENT_DATE, hire_date) AS years_at_company
FROM employees;`} />
                
                <p>This query calculates how many years each employee has been at the company by finding the difference between their hire date and the current date.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we've covered various SQL operators and expressions that you can use to filter, combine, and manipulate data in your SQL queries. By mastering comparison operators, logical operators, and expressions, you can build more advanced and powerful SQL queries to meet your data retrieval needs.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.RETRIEVING_DATA_USING_SELECT} nextPage={RoutePath.AGGREGATE_FUNCTIONS_AND_GROUPING_DATA} />
        </>
    );
}
