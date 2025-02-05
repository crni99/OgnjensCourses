import HomeSection from "../../../common/HomeSection";
import Lead from "../../../common/Lead";
import { RoutePath } from "../../../../utils/consts/ConstSQL";

export default function SqlBasicHome() {
    return (
        <>
            <Lead
                title="Mastering SQL for Database Management"
                paragraph1="Your journey to mastering SQL and managing databases effectively starts here."
                paragraph2="In this guide, we'll take you step-by-step through key concepts and best practices for using SQL. From setting up your SQL environment to writing complex queries, you’ll learn how to interact with databases and retrieve, manipulate, and manage data."
            />

            <HomeSection
                title="Introduction to SQL"
                paragraph1="Understand the purpose of SQL, the basics of relational databases, and how SQL interacts with them. Start with foundational concepts like tables, records, and columns."
                paragraph2="Get introduced to SQL and how to set up your SQL environment to begin writing queries."
                targetURL={RoutePath.GETTING_STARTED_SQL}
            />

            <HomeSection
                title="Understanding the Structure of SQL Queries"
                paragraph1="Learn about the basic structure of SQL queries and how to write simple queries using the SELECT, FROM, and WHERE clauses."
                paragraph2="Get comfortable writing SQL queries and interacting with databases and tables."
                targetURL={RoutePath.SQL_QUERY_STRUCTURE}
            />

            <HomeSection
                title="Creating and Managing Databases and Tables"
                paragraph1="Learn how to create and delete databases and tables, and understand basic data types in SQL. This is key to managing the structure of your data."
                paragraph2="Create, modify, and manage your databases and tables in SQL."
                targetURL={RoutePath.MANAGING_DATABASES_AND_TABLES}
            />

            <HomeSection
                title="Retrieving Data Using SELECT"
                paragraph1="Master the SELECT statement to retrieve data from your tables. Learn to filter data using WHERE and sort the results using ORDER BY."
                paragraph2="Write SQL queries to fetch data from your databases and manipulate the results using different clauses."
                targetURL={RoutePath.RETRIEVING_DATA_USING_SELECT}
            />

            <HomeSection
                title="SQL Operators and Expressions"
                paragraph1="Understand how to use comparison operators like =, <, >, IN, and BETWEEN, as well as logical operators like AND, OR, and NOT."
                paragraph2="Use SQL operators and expressions to filter and refine your data queries."
                targetURL={RoutePath.SQL_OPERATORS_AND_EXPRESSIONS}
            />

            <HomeSection
                title="Aggregate Functions and Grouping Data"
                paragraph1="Learn how to use SQL's aggregate functions like COUNT, SUM, AVG, MAX, and MIN to work with data. Understand how to group data with GROUP BY."
                paragraph2="Use SQL's powerful aggregation tools to analyze and summarize your data."
                targetURL={RoutePath.AGGREGATE_FUNCTIONS_AND_GROUPING_DATA}
            />

            <HomeSection
                title="Inserting, Updating, and Deleting Data"
                paragraph1="Learn how to add, modify, and remove data from your tables using SQL commands like INSERT INTO, UPDATE, and DELETE."
                paragraph2="Perform essential data manipulation tasks to manage your databases."
                targetURL={RoutePath.INSERTING_UPDATING_DELETING}
            />

            <HomeSection
                title="SQL Constraints"
                paragraph1="Explore the various data constraints in SQL, including PRIMARY KEY, UNIQUE, and NOT NULL constraints, and learn how to use them to enforce data integrity."
                paragraph2="Ensure your database's data integrity with SQL constraints."
                targetURL={RoutePath.SQL_CONSTRAINTS}
            />

            <HomeSection
                title="Introduction to SQL Joins"
                paragraph1="Learn the basics of SQL joins and how to combine data from multiple tables using INNER JOIN and other join types."
                paragraph2="Understand SQL joins and how to retrieve data from related tables."
                targetURL={RoutePath.INTRODUCTION_TO_SQL_JOINS}
            />
        </>
    );
}
