import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLBasic";

export default function AggregateFunctionsAndGrouping() {

    return (
        <>
            <Lead
                title="Aggregate Functions and Grouping Data"
                paragraph1="In this section, we'll explore how to use aggregate functions to perform calculations on your data and how to group your data using the GROUP BY clause."
                paragraph2="You'll learn about SQL functions like COUNT, SUM, AVG, MAX, and MIN, which help you summarize and analyze data. We'll also discuss how to filter aggregated data using the HAVING clause."
            />

            <Section>
                <h2>Using Aggregate Functions</h2>
                <p>SQL aggregate functions perform a calculation on a set of values and return a single value. These functions are useful for summarizing large datasets.</p>

                <h3>1. COUNT</h3>
                <p>The <strong>COUNT</strong> function returns the number of rows that match a specified condition. It is often used to count records that meet certain criteria.</p>
                <CodeSnippet language="sql" code={`SELECT COUNT(*) AS total_employees
FROM employees;`} />
                
                <p>This query counts the total number of employees in the <code>employees</code> table.</p>

                <h3>2. SUM</h3>
                <p>The <strong>SUM</strong> function returns the total sum of a numeric column. It is useful for calculating the total value of a column, such as total sales or total salary.</p>
                <CodeSnippet language="sql" code={`SELECT SUM(salary) AS total_salaries
FROM employees;`} />
                
                <p>This query calculates the total sum of all salaries in the <code>employees</code> table.</p>

                <h3>3. AVG</h3>
                <p>The <strong>AVG</strong> function calculates the average value of a numeric column.</p>
                <CodeSnippet language="sql" code={`SELECT AVG(salary) AS average_salary
FROM employees;`} />
                
                <p>This query calculates the average salary of all employees in the <code>employees</code> table.</p>

                <h3>4. MAX</h3>
                <p>The <strong>MAX</strong> function returns the highest value in a column. It can be used to find the highest salary, the most recent date, or the largest number.</p>
                <CodeSnippet language="sql" code={`SELECT MAX(salary) AS highest_salary
FROM employees;`} />
                
                <p>This query retrieves the highest salary from the <code>employees</code> table.</p>

                <h3>5. MIN</h3>
                <p>The <strong>MIN</strong> function returns the lowest value in a column.</p>
                <CodeSnippet language="sql" code={`SELECT MIN(salary) AS lowest_salary
FROM employees;`} />
                
                <p>This query retrieves the lowest salary from the <code>employees</code> table.</p>
            </Section>

            <Section>
                <h2>Grouping Data with GROUP BY</h2>
                <p>The <strong>GROUP BY</strong> clause is used to group rows that have the same values in specified columns. It allows you to apply aggregate functions to each group of data.</p>

                <h3>1. Grouping by a Single Column</h3>
                <p>When you want to calculate aggregates for each distinct value in a column, you can use the <strong>GROUP BY</strong> clause.</p>
                <CodeSnippet language="sql" code={`SELECT position, COUNT(*) AS number_of_employees
FROM employees
GROUP BY position;`} />
                
                <p>This query groups employees by their position and counts the number of employees in each position.</p>

                <h3>2. Grouping by Multiple Columns</h3>
                <p>You can also group by multiple columns. This is useful when you need to perform aggregation across more than one dimension.</p>
                <CodeSnippet language="sql" code={`SELECT department, position, AVG(salary) AS average_salary
FROM employees
GROUP BY department, position;`} />
                
                <p>This query groups employees by both department and position, then calculates the average salary for each group.</p>

                <h3>3. Grouping with Aggregate Functions</h3>
                <p>After grouping the data, you can use aggregate functions to calculate the result for each group.</p>
                <CodeSnippet language="sql" code={`SELECT position, SUM(salary) AS total_salary
FROM employees
GROUP BY position;`} />
                
                <p>This query groups employees by their position and calculates the total salary for each position.</p>
            </Section>

            <Section>
                <h2>Filtering Grouped Data with HAVING</h2>
                <p>The <strong>HAVING</strong> clause is used to filter records after the <strong>GROUP BY</strong> clause has been applied. Unlike the <strong>WHERE</strong> clause, which filters records before grouping, the <strong>HAVING</strong> clause allows you to filter on the results of aggregate functions.</p>

                <h3>1. Using HAVING with Aggregate Functions</h3>
                <p>You can use the <strong>HAVING</strong> clause to filter groups based on aggregate results.</p>
                <CodeSnippet language="sql" code={`SELECT position, AVG(salary) AS average_salary
FROM employees
GROUP BY position
HAVING AVG(salary) > 60000;`} />
                
                <p>This query groups employees by position, calculates the average salary for each group, and filters to show only those positions where the average salary is greater than 60,000.</p>

                <h3>2. Using HAVING with COUNT</h3>
                <p>The <strong>HAVING</strong> clause is often used in conjunction with the <strong>COUNT</strong> function to filter groups based on the number of records in each group.</p>
                <CodeSnippet language="sql" code={`SELECT position, COUNT(*) AS number_of_employees
FROM employees
GROUP BY position
HAVING COUNT(*) > 5;`} />
                
                <p>This query groups employees by their position and filters to show only those positions that have more than 5 employees.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we've learned about SQL aggregate functions such as <strong>COUNT</strong>, <strong>SUM</strong>, <strong>AVG</strong>, <strong>MAX</strong>, and <strong>MIN</strong>, and how to use them to summarize data. We also explored how to group data using the <strong>GROUP BY</strong> clause and filter grouped data using the <strong>HAVING</strong> clause. These techniques are powerful tools for analyzing and summarizing large datasets in SQL.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SQL_OPERATORS_AND_EXPRESSIONS} nextPage={RoutePath.INSERTING_UPDATING_DELETING} />
        </>
    );
}
