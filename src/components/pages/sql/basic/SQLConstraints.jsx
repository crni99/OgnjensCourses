import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function SQLConstraints() {

    return (
        <>
            <Lead
                title="SQL Constraints"
                paragraph1="Learn about SQL constraints, which are used to define rules for data in your database."
                paragraph2="Constraints are used to ensure the integrity and accuracy of data within your tables. This section will cover some of the most commonly used constraints, such as PRIMARY KEY, UNIQUE, NOT NULL, and FOREIGN KEY."
            />

            <Section>
                <h2>Introduction to Basic Data Constraints</h2>
                <p>SQL constraints are used to specify rules for the data in a table. These rules ensure data integrity, accuracy, and consistency. Some common constraints include:</p>
                <ul>
                    <li><strong>PRIMARY KEY:</strong> Uniquely identifies each record in a table.</li>
                    <li><strong>UNIQUE:</strong> Ensures that all values in a column are different.</li>
                    <li><strong>NOT NULL:</strong> Ensures that a column cannot have a NULL value.</li>
                    <li><strong>FOREIGN KEY:</strong> Ensures that the value in a column matches a value in another table's primary key column.</li>
                </ul>
                <p>These constraints help maintain the quality and consistency of data and are essential when designing a database schema.</p>
            </Section>

            <Section>
                <h2>Using PRIMARY KEY, UNIQUE, NOT NULL, and FOREIGN KEY Constraints</h2>
                <p>Let’s explore each of these constraints in detail:</p>

                <h3>1. PRIMARY KEY</h3>
                <p>The <strong>PRIMARY KEY</strong> constraint uniquely identifies each record in a table. It ensures that no two records can have the same value in the primary key column, and it automatically creates a unique index on the column.</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                
                <p>This query creates a table called <code>employees</code> with a primary key constraint on the <code>id</code> column. Each record must have a unique value in the <code>id</code> column.</p>

                <h3>2. UNIQUE</h3>
                <p>The <strong>UNIQUE</strong> constraint ensures that all values in a column are unique. Unlike the <strong>PRIMARY KEY</strong>, a column with the <strong>UNIQUE</strong> constraint can allow NULL values (unless combined with <strong>NOT NULL</strong>).</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  name VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                
                <p>This query creates an <code>email</code> column with the <strong>UNIQUE</strong> constraint, ensuring that no two employees can have the same email address in the <code>employees</code> table.</p>

                <h3>3. NOT NULL</h3>
                <p>The <strong>NOT NULL</strong> constraint ensures that a column cannot have a NULL value. This is useful for columns that must contain a value for every record.</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                
                <p>This query creates a <code>name</code> column with the <strong>NOT NULL</strong> constraint, ensuring that every employee must have a name.</p>

                <h3>4. FOREIGN KEY</h3>
                <p>The <strong>FOREIGN KEY</strong> constraint is used to ensure that the value in one column corresponds to a value in another table. This helps maintain referential integrity between two tables. For example, in a table of orders, each order could reference a customer in the customer table via a foreign key.</p>
                <CodeSnippet language="sql" code={`CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  department_id INT,
  position VARCHAR(100),
  salary DECIMAL(10, 2),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);`} />
                
                <p>The query above creates two tables: <code>departments</code> and <code>employees</code>. The <code>employees</code> table includes a <code>department_id</code> column, which is a foreign key referencing the <code>id</code> column in the <code>departments</code> table. This ensures that each employee is assigned to an existing department.</p>
            </Section>

            <Section>
                <h2>Adding Constraints when Creating Tables</h2>
                <p>You can add constraints to your columns when creating a table. Here is an example of how to use multiple constraints, including a foreign key:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  department_id INT,
  position VARCHAR(100),
  salary DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);`} />
                
                <p>This query creates a table with the following constraints:</p>
                <ul>
                    <li><code>id</code> column is the primary key, ensuring unique and non-null values.</li>
                    <li><code>name</code> column has the <strong>NOT NULL</strong> constraint, meaning every employee must have a name.</li>
                    <li><code>email</code> column has the <strong>UNIQUE</strong> constraint, ensuring no duplicate emails.</li>
                    <li><code>salary</code> column has the <strong>NOT NULL</strong> constraint, ensuring every employee must have a salary.</li>
                    <li><code>department_id</code> column is a <strong>FOREIGN KEY</strong> referencing the <code>id</code> column of the <code>departments</code> table, ensuring that each employee belongs to a valid department.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we covered some of the most important SQL constraints: <strong>PRIMARY KEY</strong>, <strong>UNIQUE</strong>, <strong>NOT NULL</strong>, and <strong>FOREIGN KEY</strong>. These constraints are essential for ensuring data integrity and accuracy in your database. When creating tables, you can define constraints to ensure your data follows the desired structure and quality, while maintaining relationships between tables.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.INSERTING_UPDATING_DELETING} nextPage={RoutePath.INTRODUCTION_TO_SQL_JOINS} />
        </>
    );
}
