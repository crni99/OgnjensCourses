import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function IntroductionToSQL() {

    return (
        <>
            <Lead
                title="Introduction to SQL"
                paragraph1="Understand the core concepts of SQL and how it helps in managing and querying relational databases."
                paragraph2="In this section, we’ll explore the purpose of SQL, its key features, and the fundamental database concepts you need to know to start working with SQL."
            />

            <Section>
                <h2>What is SQL?</h2>
                <p><strong>SQL (Structured Query Language)</strong> is the standard language used to interact with relational databases. It allows users to define, manipulate, and query data stored in structured tables. SQL is essential for various applications such as web development, data analysis, and business intelligence.</p>
                <p>SQL provides a declarative syntax, meaning that you specify the data you want without detailing how to get it. This makes it easy to use and very efficient in querying large datasets.</p>
            </Section>

            <Section>
                <h2>Why is SQL Important?</h2>
                <p>SQL is essential because it provides a standardized method for working with structured data. The key reasons why SQL is important include:</p>
                <ul>
                    <li><strong>Universal Data Handling:</strong> SQL is used across multiple database management systems (DBMS), such as MySQL, PostgreSQL, SQL Server, and SQLite.</li>
                    <li><strong>Data Retrieval:</strong> SQL allows you to query data, filter, sort, and perform calculations to extract meaningful insights from databases.</li>
                    <li><strong>Data Manipulation:</strong> With SQL, you can insert, update, and delete records, making it possible to manage a database effectively.</li>
                    <li><strong>Data Integrity:</strong> SQL enforces data integrity and accuracy with constraints like primary keys, foreign keys, and checks.</li>
                </ul>
            </Section>

            <Section>
                <h2>Basic Database Concepts</h2>
                <p>Before learning SQL syntax, it's crucial to understand some basic concepts that are fundamental to working with databases:</p>

                <h3>1. Tables</h3>
                <p>In a relational database, data is organized into tables. Each table represents a collection of related data, such as "Customers" or "Orders". A table consists of rows and columns. Rows represent individual records, while columns represent specific attributes or fields of the data.</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                <p>This query creates a table named <code>employees</code> with columns for employee information such as <code>id</code>, <code>name</code>, <code>position</code>, and <code>salary</code>.</p>

                <h3>2. Records</h3>
                <p>A record (or row) is a single entry in a table. For example, in an "Employees" table, a record could represent one employee, with specific values for <code>id</code>, <code>name</code>, <code>position</code>, and <code>salary</code>.</p>
                <CodeSnippet language="sql" code={`INSERT INTO employees (id, name, position, salary) 
VALUES (1, 'Alice Johnson', 'Software Engineer', 85000.00);`} />
                <p>This SQL query inserts a new record into the <code>employees</code> table for an employee named Alice Johnson.</p>

                <h3>3. Columns</h3>
                <p>Columns define the data types and structure of the data within a table. Each column holds values of a specific type, such as integers, text, or dates. For instance, the <code>name</code> column holds text data, while the <code>salary</code> column holds decimal values.</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                <p>In this example, the <code>id</code> column holds integers, while <code>name</code> and <code>position</code> are text (strings), and <code>salary</code> is a decimal number.</p>
            </Section>

            <Section>
                <h2>Setting Up Your SQL Environment</h2>
                <p>To start working with SQL, you need to set up a suitable environment for running SQL queries. In this course, we will use Microsoft SQL Server, a widely-used relational database management system (RDBMS). Below are the steps for setting up SQL Server:</p>

                <h3>1. Install Microsoft SQL Server</h3>
                <p>Visit the <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noreferrer" className="link-custom">SQL Server download page</a> to download SQL Server. Microsoft offers a free version, called <strong>SQL Server Express Edition</strong>, which is ideal for learning and development.</p>
                <p>Once downloaded, follow the installation instructions to install SQL Server and SQL Server Management Studio (SSMS), which provides a graphical interface for managing databases.</p>

                <h3>2. Verify Installation</h3>
                <p>After installing SQL Server, open the terminal or command prompt and use the following command to connect to SQL Server:</p>
                <CodeSnippet language="shell" code={`sqlcmd -S localhost -U sa -P 'yourpassword'`} />
                <p>If successful, you'll be able to execute SQL queries directly within the terminal.</p>

                <h3>3. Optional: Install Other Databases</h3>
                <p>If you prefer to work with other databases like MySQL or SQLite, you can download them as well. Here are the links for installation:</p>
                <ul>
                    <li><a href="https://www.mysql.com/downloads/" target="_blank" rel="noreferrer" className="link-custom">MySQL</a></li>
                    <li><a href="https://www.sqlite.org/download.html" target="_blank" rel="noreferrer" className="link-custom">SQLite</a></li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we introduced SQL and explained its role in managing relational databases. You also learned about basic database concepts like tables, records, and columns. Additionally, we covered how to set up your SQL environment to start practicing SQL commands. These foundational concepts will help you navigate the world of relational databases and prepare you for writing SQL queries effectively.</p>
            </Section>

            <PageNavigation prevPage={undefined} nextPage={RoutePath.SQL_QUERY_STRUCTURE} />
        </>
    );
}
