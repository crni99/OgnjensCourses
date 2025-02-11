import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function DatabaseNormalization() {
    return (
        <>
            <Lead
                title="Introduction to Database Normalization"
                paragraph1="Learn about database normalization, including the First, Second, and Third Normal Forms (1NF, 2NF, 3NF). Understand how normalization helps in eliminating redundancy and maintaining data integrity."
                paragraph2="This section covers the principles of normalization, including how to transform unorganized data into structured tables to improve data consistency and reduce redundancy."
            />

            <Section>
                <h2>What is Database Normalization?</h2>
                <p>Database normalization is the process of organizing a database to reduce redundancy and improve data integrity. The goal is to design the database schema in such a way that it minimizes duplication of data while ensuring relationships between tables are logical and efficient.</p>
                <p>Normalization involves applying a series of rules called "normal forms" to ensure that the data is stored in a way that reduces anomalies (insertion, update, and deletion anomalies) and ensures consistency.</p>
            </Section>

            <Section>
                <h2>First Normal Form (1NF)</h2>
                <p>First Normal Form (1NF) requires that:</p>
                <ul>
                    <li>Each column contains atomic values (no repeating groups or arrays).</li>
                    <li>Each column must contain only one value per row.</li>
                    <li>The order in which data is stored does not matter.</li>
                </ul>

                <h3>Example: Applying First Normal Form</h3>
                <p>Consider a table where an employee's skills are stored as a comma-separated list:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
    employee_id INT,
    name VARCHAR(100),
    skills VARCHAR(100) -- Contains values like 'Java, Python, SQL'
);
`} />
                <p>This violates 1NF because the <code>skills</code> column contains multiple values in a single cell. To bring it to 1NF, we must separate each skill into its own row:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
    employee_id INT,
    name VARCHAR(100)
);

CREATE TABLE employee_skills (
    employee_id INT,
    skill VARCHAR(50)
);

-- Example of normalized data
INSERT INTO employee_skills VALUES (1, 'Java'), (1, 'Python'), (1, 'SQL');
`} />
                <p>Now, each skill is stored as a separate row, ensuring that the table is in 1NF.</p>
            </Section>

            <Section>
                <h2>Second Normal Form (2NF)</h2>
                <p>Second Normal Form (2NF) builds upon 1NF. A table is in 2NF if:</p>
                <ul>
                    <li>It is in 1NF.</li>
                    <li>There are no partial dependencies, meaning every non-key column is fully dependent on the primary key.</li>
                </ul>
                <p>To achieve 2NF, we remove any partial dependencies that occur when a column is dependent only on part of a composite primary key.</p>

                <h3>Example: Applying Second Normal Form</h3>
                <p>Consider a table where the employee's department name is stored along with the employee's information. Here, the combination of <code>employee_id</code> and <code>department_id</code> is used as the primary key:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employee_department (
    employee_id INT,
    department_id INT,
    name VARCHAR(100),
    department_name VARCHAR(100), -- This column depends only on department_id, not the composite key
    PRIMARY KEY (employee_id, department_id)
);
`} />
                <p>The column <code>department_name</code> violates 2NF because it depends only on <code>department_id</code> and not the entire primary key. To bring this table into 2NF, we need to split the data into two tables:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE employee_department (
    employee_id INT,
    department_id INT,
    PRIMARY KEY (employee_id, department_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
`} />
                <p>Now, <code>department_name</code> is stored in the <code>departments</code> table, and we avoid partial dependency, ensuring the table is in 2NF.</p>
            </Section>

            <Section>
                <h2>Third Normal Form (3NF)</h2>
                <p>Third Normal Form (3NF) requires that:</p>
                <ul>
                    <li>The table is in 2NF.</li>
                    <li>There are no transitive dependencies, meaning non-key columns must not depend on other non-key columns.</li>
                </ul>
                <p>To achieve 3NF, we need to remove transitive dependencies, which occur when one non-key column depends on another non-key column.</p>

                <h3>Example: Applying Third Normal Form</h3>
                <p>Consider a table where the employee's address is stored along with their department:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employee_info (
    employee_id INT,
    department_id INT,
    employee_name VARCHAR(100),
    department_name VARCHAR(100),
    department_location VARCHAR(100), -- Transitive dependency: depends on department_name
    PRIMARY KEY (employee_id)
);
`} />
                <p>The column <code>department_location</code> depends on <code>department_name</code>, which is a non-key column. To bring the table to 3NF, we should eliminate this transitive dependency:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100)
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    department_location VARCHAR(100)
);

CREATE TABLE employee_department (
    employee_id INT,
    department_id INT,
    PRIMARY KEY (employee_id, department_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
`} />
                <p>Now, <code>department_location</code> is stored in the <code>departments</code> table, which removes the transitive dependency and ensures the table is in 3NF.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Database normalization is a key concept in database design that helps reduce redundancy, improve data integrity, and avoid anomalies. By applying the rules of 1NF, 2NF, and 3NF, you can organize your data in a way that promotes efficiency and consistency. Understanding these normal forms is crucial for building robust relational databases that can scale and handle complex queries effectively.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.WINDOWS_FUNCTIONS} nextPage={RoutePath.COMPLEX_AGGREGATION} />
        </>
    );
}
