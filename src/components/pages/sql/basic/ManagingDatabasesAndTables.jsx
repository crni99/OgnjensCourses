import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function ManagingDatabasesAndTables() {

    return (
        <>
            <Lead
                title="Creating and Managing Databases and Tables"
                paragraph1="In this section, we will learn how to create and manage databases and tables in SQL, as well as understand the basic data types used in SQL."
                paragraph2="These are fundamental tasks in SQL that allow you to define, structure, and manipulate your data effectively."
            />

            <Section>
                <h2>Creating and Deleting Databases</h2>
                <p>In SQL, databases are the container for all your tables, views, and data. Creating and deleting databases is a fundamental part of database management.</p>

                <h3>1. Creating a Database</h3>
                <p>To create a new database, you can use the <strong>CREATE DATABASE</strong> statement:</p>
                <CodeSnippet language="sql" code={`CREATE DATABASE company_db;`} />
                
                <p>This SQL query will create a new database named <code>company_db</code>.</p>

                <h3>2. Deleting a Database</h3>
                <p>If you need to delete a database, you can use the <strong>DROP DATABASE</strong> statement. Be very cautious, as this will permanently delete the entire database and its contents:</p>
                <CodeSnippet language="sql" code={`DROP DATABASE company_db;`} />
                
                <p>This query will permanently delete the <code>company_db</code> database. Make sure to backup data if necessary before performing this action.</p>
            </Section>

            <Section>
                <h2>Creating and Deleting Tables</h2>
                <p>Once you’ve created a database, you can create tables within it. Tables hold the actual data in rows and columns. SQL also allows you to delete tables if needed.</p>

                <h3>1. Creating a Table</h3>
                <p>To create a table, you use the <strong>CREATE TABLE</strong> statement. Below is an example of creating an <code>employees</code> table:</p>
                <CodeSnippet language="sql" code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`} />
                
                <p>This SQL query creates a table called <code>employees</code> with columns for <code>id</code>, <code>name</code>, <code>position</code>, and <code>salary</code>. Each column has a specific data type, which is explained in the next section.</p>

                <h3>2. Deleting a Table</h3>
                <p>If you need to delete a table, you can use the <strong>DROP TABLE</strong> statement. Keep in mind that this will delete the table and all its data permanently:</p>
                <CodeSnippet language="sql" code={`DROP TABLE employees;`} />
                
                <p>This command will delete the <code>employees</code> table and all the data inside it.</p>
            </Section>

            <Section>
                <h2>Basic Data Types in SQL</h2>
                <p>When creating tables, you define the type of data each column can hold. SQL supports a variety of data types to store different kinds of information.</p>

                <h3>1. Integer Data Types</h3>
                <p>For whole numbers, SQL uses <strong>INT</strong> or <strong>INTEGER</strong> data types. These are used for storing numerical data without decimals.</p>
                <CodeSnippet language="sql" code={`id INT PRIMARY KEY;`} />
                
                <p>The <code>id</code> column in the <code>employees</code> table is an integer type, meaning it can store whole numbers.</p>

                <h3>2. String Data Types</h3>
                <p>String data types are used to store text. The most commonly used string data type is <strong>VARCHAR</strong>, which allows you to store variable-length strings. You specify a maximum length for the string.</p>
                <CodeSnippet language="sql" code={`name VARCHAR(100);`} />
                
                <p>This <code>name</code> column in the table can store text data up to 100 characters in length.</p>

                <h3>3. Decimal Data Types</h3>
                <p>For numbers with decimals (e.g., for salary, prices), SQL uses <strong>DECIMAL</strong> or <strong>NUMERIC</strong> data types. These data types allow you to define the total number of digits and the number of decimal places.</p>
                <CodeSnippet language="sql" code={`salary DECIMAL(10, 2);`} />
                
                <p>The <code>salary</code> column can store a number with up to 10 digits, two of which can be after the decimal point (e.g., 99999999.99).</p>

                <h3>4. Date and Time Data Types</h3>
                <p>For storing dates and times, SQL provides data types like <strong>DATE</strong> and <strong>DATETIME</strong>.</p>
                <CodeSnippet language="sql" code={`hire_date DATE;`} />
                
                <p>The <code>hire_date</code> column would store the date when an employee was hired.</p>

                <h3>5. Other Data Types</h3>
                <p>There are additional data types in SQL for storing boolean values, binary data, and more. Some common ones include:</p>
                <ul>
                    <li><strong>BOOLEAN</strong> - Stores <code>TRUE</code> or <code>FALSE</code> values.</li>
                    <li><strong>BLOB</strong> - Used for binary large objects, such as images or files.</li>
                    <li><strong>TEXT</strong> - Used to store long text values.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>In this section, we covered the basics of creating and managing databases and tables in SQL. We also learned about basic data types in SQL, which are crucial when defining the structure of your tables. Understanding how to create and manage databases, tables, and data types is essential when working with SQL and building a solid foundation for database management.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SQL_QUERY_STRUCTURE} nextPage={RoutePath.RETRIEVING_DATA_USING_SELECT} />
        </>
    );
}
