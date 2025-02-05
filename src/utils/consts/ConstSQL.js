import SQLBasicHome from "../../components/pages/sql/basic/SQLBasicHome";
import GettingStartedSQL from "../../components/pages/sql/basic/GettingStartedSQL";
import SQLQueryStructure from "../../components/pages/sql/basic/SQLQueryStructure";
import ManagingDatabasesAndTables from "../../components/pages/sql/basic/ManagingDatabasesAndTables";
import RetrievingDataUsingSelect from "../../components/pages/sql/basic/RetrievingDataUsingSelect";
import SQLOperatorsAndExpressions from "../../components/pages/sql/basic/SQLOperatorsAndExpressions";
import AggregateFunctionsAndGroupingData from "../../components/pages/sql/basic/AggregateFunctionsAndGroupingData";
import InsertingUpdatingDeleting from "../../components/pages/sql/basic/InsertingUpdatingDeleting";
import SQLConstraints from "../../components/pages/sql/basic/SQLConstraints";
import IntroductionToSQLJoins from "../../components/pages/sql/basic/IntroductionToSQLJoins";

import { CoursesPaths } from "../const";

export const PageNames = {
    SQL_BASICS: 'Introduction to SQL',
    GETTING_STARTED_SQL: 'Getting Started SQL',
    SQL_QUERY_STRUCTURE: 'SQL Query Structure',
    MANAGING_DATABASES_AND_TABLES: 'Managing Databases and Tables',
    RETRIEVING_DATA_USING_SELECT: 'Retrieving Data Using Select',
    SQL_OPERATORS_AND_EXPRESSIONS: 'SQL Operators and Expressions',
    AGGREGATE_FUNCTIONS_AND_GROUPING_DATA: 'Aggregate Functions and Grouping Data',
    INSERTING_UPDATING_DELETING: 'Inserting Updating Deleting',
    SQL_CONSTRAINTS: 'SQL Constraints',
    INTRODUCTION_TO_SQL_JOINS: 'Introduction to SQL Joins',
};

export const PageRoutes = {
    SQL_BASICS: CoursesPaths.SQL_BASICS,
    GETTING_STARTED_SQL: '/getting-started-sql',
    SQL_QUERY_STRUCTURE: '/sql-query-structure',
    MANAGING_DATABASES_AND_TABLES: '/managing-databases-and-tables',
    RETRIEVING_DATA_USING_SELECT: '/retrieving-data-using-select',
    SQL_OPERATORS_AND_EXPRESSIONS: '/sql-operators-and-expressions',
    AGGREGATE_FUNCTIONS_AND_GROUPING_DATA: '/aggregate-functions-and-grouping-data',
    INSERTING_UPDATING_DELETING: '/inserting-updating-deleting',
    SQL_CONSTRAINTS: '/sql-constraints',
    INTRODUCTION_TO_SQL_JOINS: '/introduction-to-sql-joins',
};

export const RoutePath = {
    SQL_BASICS: CoursesPaths.SQL_BASICS,
    GETTING_STARTED_SQL: CoursesPaths.SQL_BASICS + PageRoutes.GETTING_STARTED_SQL,
    SQL_QUERY_STRUCTURE: CoursesPaths.SQL_BASICS + PageRoutes.SQL_QUERY_STRUCTURE,
    MANAGING_DATABASES_AND_TABLES: CoursesPaths.SQL_BASICS + PageRoutes.MANAGING_DATABASES_AND_TABLES,
    RETRIEVING_DATA_USING_SELECT: CoursesPaths.SQL_BASICS + PageRoutes.RETRIEVING_DATA_USING_SELECT,
    SQL_OPERATORS_AND_EXPRESSIONS: CoursesPaths.SQL_BASICS + PageRoutes.SQL_OPERATORS_AND_EXPRESSIONS,
    AGGREGATE_FUNCTIONS_AND_GROUPING_DATA: CoursesPaths.SQL_BASICS + PageRoutes.AGGREGATE_FUNCTIONS_AND_GROUPING_DATA,
    INSERTING_UPDATING_DELETING: CoursesPaths.SQL_BASICS + PageRoutes.INSERTING_UPDATING_DELETING,
    SQL_CONSTRAINTS: CoursesPaths.SQL_BASICS + PageRoutes.SQL_CONSTRAINTS,
    INTRODUCTION_TO_SQL_JOINS: CoursesPaths.SQL_BASICS + PageRoutes.INTRODUCTION_TO_SQL_JOINS,
};

export const RouteList = [
    { path: RoutePath.SQL_BASICS, component: <SQLBasicHome /> },
    { path: RoutePath.GETTING_STARTED_SQL, component: <GettingStartedSQL /> },
    { path: RoutePath.SQL_QUERY_STRUCTURE, component: <SQLQueryStructure /> },
    { path: RoutePath.MANAGING_DATABASES_AND_TABLES, component: <ManagingDatabasesAndTables /> },
    { path: RoutePath.RETRIEVING_DATA_USING_SELECT, component: <RetrievingDataUsingSelect /> },
    { path: RoutePath.SQL_OPERATORS_AND_EXPRESSIONS, component: <SQLOperatorsAndExpressions /> },
    { path: RoutePath.AGGREGATE_FUNCTIONS_AND_GROUPING_DATA, component: <AggregateFunctionsAndGroupingData /> },
    { path: RoutePath.INSERTING_UPDATING_DELETING, component: <InsertingUpdatingDeleting /> },
    { path: RoutePath.SQL_CONSTRAINTS, component: <SQLConstraints /> },
    { path: RoutePath.INTRODUCTION_TO_SQL_JOINS, component: <IntroductionToSQLJoins /> },
];
