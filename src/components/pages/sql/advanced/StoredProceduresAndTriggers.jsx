import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function StoredProceduresAndTriggers() {
    return (
        <>
            <Lead
                title="Stored Procedures and Triggers in SQL"
                paragraph1="Stored procedures and triggers are powerful tools in SQL that allow you to encapsulate logic, automate actions, and ensure data integrity. Stored procedures allow for the execution of complex logic on demand, while triggers automatically execute actions based on certain events."
                paragraph2="This section covers how to write and use stored procedures, automate actions with triggers, and handle errors effectively within stored procedures."
            />

            <Section>
                <h2>What Are Stored Procedures?</h2>
                <p>A <strong>stored procedure</strong> is a precompiled collection of one or more SQL statements that can be executed by calling the procedure's name. Stored procedures allow you to encapsulate business logic within the database and improve performance by reducing network traffic, as they are executed on the database server itself.</p>
                <p>Stored procedures are often used for tasks such as:</p>
                <ul>
                    <li>Data validation</li>
                    <li>Complex queries or data transformations</li>
                    <li>Batch processing</li>
                    <li>Encapsulating repetitive tasks</li>
                </ul>
            </Section>

            <Section>
                <h2>Writing and Using Stored Procedures</h2>
                <p>Stored procedures are created using the <code>CREATE PROCEDURE</code> statement, and they are invoked using the <code>CALL</code> statement or directly executing them within SQL queries. Below is an example of how to create and use a simple stored procedure:</p>

                <h3>Example: Creating a Stored Procedure</h3>
                <p>Here’s an example of a stored procedure that calculates and returns the total salary of an employee based on their ID:</p>
                <CodeSnippet language="sql" code={`CREATE PROCEDURE GetTotalSalary(IN employee_id INT)
BEGIN
    SELECT salary + bonus AS total_salary
    FROM employees
    WHERE id = employee_id;
END;
`} />

                <p>This procedure takes an input parameter <code>employee_id</code>, retrieves the salary and bonus of the employee, and returns the total salary.</p>

                <h3>Example: Calling a Stored Procedure</h3>
                <p>To call this stored procedure and retrieve the total salary for an employee with ID 101, you can use the following query:</p>
                <CodeSnippet language="sql" code={`CALL GetTotalSalary(101);`} />
                <p>This executes the stored procedure and returns the calculated total salary for employee ID 101.</p>
            </Section>

            <Section>
                <h2>Automating Actions with Triggers</h2>
                <p><strong>Triggers</strong> are special types of stored procedures that automatically execute when a specific event occurs on a table, such as an insert, update, or delete operation. Triggers allow you to automate actions, such as enforcing data integrity, auditing changes, or updating related tables.</p>
                <p>Triggers are usually defined for events like:</p>
                <ul>
                    <li><strong>BEFORE</strong> triggers: Executed before the event (INSERT, UPDATE, DELETE) occurs.</li>
                    <li><strong>AFTER</strong> triggers: Executed after the event occurs.</li>
                    <li><strong>INSTEAD OF</strong> triggers: Executed instead of the event (typically for views). </li>
                </ul>
            </Section>

            <Section>
                <h2>Writing Triggers in SQL</h2>
                <p>To write a trigger, you need to specify the table, the event (INSERT, UPDATE, DELETE), and the logic to be executed when the event occurs. Below is an example of an <code>AFTER INSERT</code> trigger that automatically updates the "audit_log" table when a new employee is added:</p>

                <h3>Example: Creating a Trigger</h3>
                <CodeSnippet language="sql" code={`CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (action, table_name, action_time)
    VALUES ('INSERT', 'employees', NOW());
END;
`} />

                <p>This trigger is fired after a new row is inserted into the <code>employees</code> table. It automatically inserts a record into the <code>audit_log</code> table to track the insert operation.</p>

                <h3>Example: Using BEFORE Trigger</h3>
                <p>Suppose you want to ensure that no employee can be added with a salary below a certain threshold (e.g., $30,000). You can create a <code>BEFORE INSERT</code> trigger that checks the salary value before inserting the record:</p>
                <CodeSnippet language="sql" code={`CREATE TRIGGER check_salary_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 30000 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be below 30,000';
    END IF;
END;
`} />

                <p>This trigger checks the <code>salary</code> value of a new employee record before insertion. If the salary is below $30,000, it raises an error, preventing the insert from proceeding.</p>
            </Section>

            <Section>
                <h2>Error Handling in Stored Procedures</h2>
                <p>Error handling is crucial when writing stored procedures, as it ensures that the procedure behaves as expected even when things go wrong (e.g., invalid input, constraint violations). SQL provides a few techniques for handling errors in stored procedures, such as using <code>DECLARE</code>, <code>HANDLER</code>, and <code>SIGNAL</code>.</p>

                <h3>Example: Using DECLARE and HANDLER for Error Handling</h3>
                <p>Here is an example of a stored procedure that attempts to insert a new employee into the <code>employees</code> table and handles any errors that may arise:</p>
                <CodeSnippet language="sql" code={`CREATE PROCEDURE InsertEmployee(IN emp_name VARCHAR(100), IN emp_salary DECIMAL(10, 2))
BEGIN
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Handle error, e.g., log error or display message
        ROLLBACK;
        SELECT 'An error occurred during insertion.' AS ErrorMessage;
    END;

    START TRANSACTION;
    INSERT INTO employees (name, salary) VALUES (emp_name, emp_salary);
    COMMIT;
END;
`} />

                <p>This procedure uses a <code>CONTINUE HANDLER</code> to catch any SQL exceptions (e.g., constraint violations) and rolls back the transaction if an error occurs. It also returns a custom error message to the user.</p>

                <h3>Example: Using SIGNAL for Custom Error Messages</h3>
                <p>Another way to handle errors is by using the <code>SIGNAL</code> statement to raise a custom error when a condition is met. Here is an example where an error is raised if the employee's salary is above a certain threshold:</p>
                <CodeSnippet language="sql" code={`CREATE PROCEDURE CheckSalaryThreshold(IN emp_salary DECIMAL(10, 2))
BEGIN
    IF emp_salary > 100000 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary exceeds allowed threshold.';
    END IF;
END;
`} />

                <p>This procedure checks if the <code>emp_salary</code> exceeds $100,000. If it does, it raises a custom error with a message saying "Salary exceeds allowed threshold."</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Stored procedures and triggers are powerful tools for automating business logic, enforcing data integrity, and simplifying complex operations. By encapsulating SQL logic in stored procedures, you can reduce redundancy, improve performance, and ensure consistency. Triggers, on the other hand, help automate actions in response to events, allowing you to keep your database logic synchronized with changes in data. Proper error handling is essential for maintaining the reliability and stability of your stored procedures and triggers.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.INDEXES} nextPage={RoutePath.CUSTOM_FUNCTIONS} />
        </>
    );
}
