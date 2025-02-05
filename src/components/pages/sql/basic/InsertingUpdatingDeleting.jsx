import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function InsertingUpdatingDeleting() {

    return (
        <>
            <Lead
                title="Inserting, Updating, and Deleting Data"
                paragraph1="Learn how to add, modify, and remove data in your database using SQL commands like INSERT, UPDATE, and DELETE."
                paragraph2="These SQL commands are essential for managing the data within your database. We will cover the syntax and examples for inserting, updating, and deleting records."
            />

            <Section>
                <h2>Inserting Records with INSERT INTO</h2>
                <p>The <strong>INSERT INTO</strong> statement is used to add new records to a table. You can insert a single record or multiple records at once.</p>

                <h3>1. Inserting a Single Record</h3>
                <p>To insert a single record, specify the table name followed by the column names and values you want to insert.</p>
                <CodeSnippet language="sql" code={`INSERT INTO employees (id, name, position, salary)
VALUES (1, 'Alice Johnson', 'Software Engineer', 85000.00);`} />
                
                <p>This query inserts a new employee record with the following details: ID = 1, Name = 'Alice Johnson', Position = 'Software Engineer', and Salary = 85,000.00.</p>

                <h3>2. Inserting Multiple Records</h3>
                <p>You can insert multiple records in a single <strong>INSERT INTO</strong> statement by separating each record with a comma.</p>
                <CodeSnippet language="sql" code={`INSERT INTO employees (id, name, position, salary)
VALUES (2, 'Bob Smith', 'Data Analyst', 70000.00),
       (3, 'Charlie own', 'Project Manager', 90000.00);`} />
                
                <p>This query inserts two new employee records: one for Bob Smith and another for Charlie own.</p>
            </Section>

            <Section>
                <h2>Updating Data with UPDATE</h2>
                <p>The <strong>UPDATE</strong> statement is used to modify existing records in a table. You must specify which records to update using a <strong>WHERE</strong> clause, otherwise, all records will be updated.</p>

                <h3>1. Updating a Single Record</h3>
                <p>To update a single record, specify the table, the column to update, and the new value, followed by a <strong>WHERE</strong> clause to identify the record to modify.</p>
                <CodeSnippet language="sql" code={`UPDATE employees
SET salary = 95000.00
WHERE id = 1;`} />
                
                <p>This query updates the salary of the employee with ID = 1 (Alice Johnson) to 95,000.00.</p>

                <h3>2. Updating Multiple Records</h3>
                <p>You can update multiple records at once by modifying the <strong>WHERE</strong> clause to match multiple records.</p>
                <CodeSnippet language="sql" code={`UPDATE employees
SET salary = salary * 1.05
WHERE position = 'Software Engineer';`} />
                
                <p>This query increases the salary of all employees who are "Software Engineers" by 5%.</p>
            </Section>

            <Section>
                <h2>Deleting Data with DELETE</h2>
                <p>The <strong>DELETE</strong> statement is used to remove records from a table. Like <strong>UPDATE</strong>, it is important to use a <strong>WHERE</strong> clause to specify which records should be deleted. If no <strong>WHERE</strong> clause is provided, all records will be deleted.</p>

                <h3>1. Deleting a Single Record</h3>
                <p>To delete a specific record, use a <strong>WHERE</strong> clause to identify the record to remove.</p>
                <CodeSnippet language="sql" code={`DELETE FROM employees
WHERE id = 2;`} />
                
                <p>This query deletes the record of the employee with ID = 2 (Bob Smith) from the <code>employees</code> table.</p>

                <h3>2. Deleting Multiple Records</h3>
                <p>To delete multiple records, modify the <strong>WHERE</strong> clause to match multiple records. Be cautious, as this will delete all matching records.</p>
                <CodeSnippet language="sql" code={`DELETE FROM employees
WHERE position = 'Project Manager';`} />
                
                <p>This query deletes all employees who have the position "Project Manager" from the <code>employees</code> table.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we've covered how to insert, update, and delete records in a database using SQL. These commands are essential for maintaining and modifying the data within your database. Always be cautious when using the <strong>DELETE</strong> and <strong>UPDATE</strong> commands, especially without a proper <strong>WHERE</strong> clause, to avoid unwanted changes to your data.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.AGGREGATE_FUNCTIONS_AND_GROUPING_DATA} nextPage={RoutePath.SQL_CONSTRAINTS} />
        </>
    );
}
