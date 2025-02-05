import HomeSection from "../common/HomeSection";
import Lead from "../common/Lead";
import { CoursesPaths } from "../../utils/const";

export default function DatabaseHome() {
    return (
        <>
            <Lead
                title="Welcome to Ognjen's Database Courses"
                paragraph1="Explore a variety of courses designed to help you master back-end development, API creation, and database management, with hands-on projects and expert guidance."
            />

            <HomeSection
                title="SQL Basics"
                paragraph1="This course will introduce you to the fundamentals of SQL. Learn how to query databases, create tables, and manage data using basic SQL statements."
                paragraph2="You will gain hands-on experience with SQL commands like SELECT, INSERT, UPDATE, and DELETE, and understand how to structure your database for efficient querying."
                targetURL={CoursesPaths.SQL_BASICS}
            />

            <HomeSection
                title="SQL Advanced"
                paragraph1="Take your SQL skills to the next level with this advanced course. Dive into complex queries, advanced joins, subqueries, and database optimization techniques."
                paragraph2="Learn how to work with large datasets, write efficient queries for performance optimization, and explore topics like indexing, stored procedures, and database design best practices."
                targetURL={CoursesPaths.SQL_ADVANCED}
            />
            
        </>
    );
}
