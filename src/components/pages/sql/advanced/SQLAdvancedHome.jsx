import HomeSection from "../../../common/HomeSection";
import Lead from "../../../common/Lead";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function SQLAdvancedHome() {
    return (
        <>
            <Lead
                title="SQL Advanced Mastery"
                paragraph1="Start your journey toward mastering advanced SQL and becoming proficient in database management."
                paragraph2="In this guide, we'll cover advanced SQL techniques and best practices for optimizing queries, managing data effectively, and working with complex database structures."
            />

            <HomeSection
                title="Advanced SQL Syntax and Query Optimization"
                paragraph1="Explore complex SQL syntax and best practices for optimizing your queries, enhancing performance, and writing cleaner, more efficient SQL code."
                paragraph2="Learn the art of writing optimized SQL queries that perform well with large datasets."
                targetURL={RoutePath.ADVANCED_SQL_SYNTAX}
            />

            <HomeSection
                title="Working with Complex Data Types"
                paragraph1="Master the use of complex data types in SQL, including arrays, JSON, and other non-traditional formats."
                paragraph2="Learn how to work with advanced data types in SQL for more powerful database design."
                targetURL={RoutePath.COMPLEX_DATA_TYPES}
            />

            <HomeSection
                title="Complex SQL Statements and Subqueries"
                paragraph1="Dive deep into complex SQL statements and learn how to structure nested queries and subqueries for powerful database manipulation."
                paragraph2="Master the art of writing complex queries for advanced data retrieval and processing."
                targetURL={RoutePath.COMPLEX_SQL_STATEMENTS}
            />

            <HomeSection
                title="Advanced SQL Joins"
                paragraph1="Learn advanced techniques for SQL joins, including self-joins, outer joins, and more."
                paragraph2="Use joins to combine data from multiple tables for complex queries."
                targetURL={RoutePath.SQL_JOINS_ADVANCED}
            />

            <HomeSection
                title="Working with SQL Subqueries"
                paragraph1="Master subqueries in SQL to perform powerful operations on data within other queries."
                paragraph2="Learn to use subqueries effectively to retrieve and manipulate data."
                targetURL={RoutePath.SQL_SUBQUERIES}
            />

            <HomeSection
                title="Window Functions in SQL"
                paragraph1="Explore the power of SQL window functions, which allow you to perform calculations across sets of rows related to the current row."
                paragraph2="Use window functions to run analytical queries without needing subqueries."
                targetURL={RoutePath.WINDOWS_FUNCTIONS}
            />

            <HomeSection
                title="Database Normalization"
                paragraph1="Understand database normalization techniques to reduce redundancy and improve data integrity in your databases."
                paragraph2="Learn how to structure your database schema to avoid data anomalies and improve scalability."
                targetURL={RoutePath.DATABASE_NORMALIZATION}
            />

            <HomeSection
                title="Complex Aggregation in SQL"
                paragraph1="Learn how to perform complex data aggregation and grouping using SQL, including handling NULL values and performing calculations."
                paragraph2="Leverage advanced aggregation functions to summarize and analyze data."
                targetURL={RoutePath.COMPLEX_AGGREGATION}
            />

            <HomeSection
                title="Transaction Control in SQL"
                paragraph1="Master transaction control techniques to ensure data consistency and handle errors in multi-step operations."
                paragraph2="Understand the importance of transactions and how to manage them in SQL."
                targetURL={RoutePath.TRANSACTION_CONTROL}
            />

            <HomeSection
                title="Concurrency Control in SQL"
                paragraph1="Learn how to handle concurrent transactions in SQL to maintain data integrity and performance in multi-user environments."
                paragraph2="Understand isolation levels, locks, and how to avoid deadlocks in SQL."
                targetURL={RoutePath.CONCURRENCY_CONTROL}
            />

            <HomeSection
                title="Indexes in SQL"
                paragraph1="Explore SQL indexing techniques to speed up data retrieval and enhance query performance."
                paragraph2="Learn how to create and use indexes to improve query efficiency."
                targetURL={RoutePath.INDEXES}
            />

            <HomeSection
                title="Stored Procedures and Triggers"
                paragraph1="Learn how to create stored procedures and triggers in SQL to automate tasks and encapsulate logic."
                paragraph2="Understand how to write reusable code that runs on your database server."
                targetURL={RoutePath.STORED_PROCEDURES_AND_TRIGGERS}
            />

            <HomeSection
                title="Custom Functions (UDF) in SQL"
                paragraph1="Learn how to write user-defined functions (UDFs) in SQL to extend the language with custom functionality."
                paragraph2="Write custom functions to enhance the capabilities of your SQL queries."
                targetURL={RoutePath.CUSTOM_FUNCTIONS}
            />

            <HomeSection
                title="Security and User Management"
                paragraph1="Understand the principles of database security and learn how to manage users, permissions, and roles."
                paragraph2="Ensure the security of your SQL database through best practices and user management."
                targetURL={RoutePath.SECURITY_AND_USER_MANAGEMENT}
            />

            <HomeSection
                title="Database Backup and Restoration"
                paragraph1="Learn how to back up and restore databases to ensure data availability and disaster recovery."
                paragraph2="Understand various backup techniques and how to recover your data in case of failure."
                targetURL={RoutePath.DATABASE_BACKUP_AND_RESTORATION}
            />

            <HomeSection
                title="Distributed Databases and Sharding"
                paragraph1="Explore advanced topics such as distributed databases and sharding for scaling your database systems."
                paragraph2="Learn how to partition and distribute your data across multiple databases for better scalability and performance."
                targetURL={RoutePath.DISTRIBUTED_DATABASES_AND_SHARDING}
            />
        </>
    );
}
