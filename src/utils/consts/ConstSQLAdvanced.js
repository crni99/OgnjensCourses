import AdvancedSQLSyntax from "../../components/pages/sql/advanced/AdvancedSQLSyntax";
import ComplexDataTypes from "../../components/pages/sql/advanced/ComplexDataTypes";
import ComplexSQLStatements from "../../components/pages/sql/advanced/ComplexSQLStatements";
import SQLJoinsAdvanced from "../../components/pages/sql/advanced/SQLJoinsAdvanced";
import SQLSubqueries from "../../components/pages/sql/advanced/SQLSubqueries";
import WindowFunctions from "../../components/pages/sql/advanced/WindowFunctions";
import DatabaseNormalization from "../../components/pages/sql/advanced/DatabaseNormalization";
import ComplexAggregation from "../../components/pages/sql/advanced/ComplexAggregation";
import TransactionControl from "../../components/pages/sql/advanced/TransactionControl";
import ConcurrencyControl from "../../components/pages/sql/advanced/ConcurrencyControl";
import Indexes from "../../components/pages/sql/advanced/Indexes";
import StoredProceduresAndTriggers from "../../components/pages/sql/advanced/StoredProceduresAndTriggers";
import CustomFunctions from "../../components/pages/sql/advanced/CustomFunctions";
import SecurityAndUserManagement from "../../components/pages/sql/advanced/SecurityAndUserManagement";
import DatabaseBackupAndRestoration from "../../components/pages/sql/advanced/DatabaseBackupAndRestoration";
import DistributedDatabasesAndSharding from "../../components/pages/sql/advanced/DistributedDatabasesAndSharding";
import SQLAdvancedHome from "../../components/pages/sql/advanced/SQLAdvancedHome";

import { CoursesPaths } from "../const";

export const PageNames = {
    SQL_ADVANCED: 'Introduction to Advanced SQL',
    ADVANCED_SQL_SYNTAX: 'Advanced SQL Syntax and Query Optimization',
    COMPLEX_DATA_TYPES: 'Complex Data Types',
    COMPLEX_SQL_STATEMENTS: 'Complex SQL Statements and Subqueries',
    SQL_JOINS_ADVANCED: 'Advanced SQL Joins',
    SQL_SUBQUERIES: 'SQL Subqueries',
    WINDOWS_FUNCTIONS: 'Window Functions',
    DATABASE_NORMALIZATION: 'Database Normalization',
    COMPLEX_AGGREGATION: 'Complex Aggregation',
    TRANSACTION_CONTROL: 'Transaction Control',
    CONCURRENCY_CONTROL: 'Concurrency Control',
    INDEXES: 'Indexes',
    STORED_PROCEDURES_AND_TRIGGERS: 'Stored Procedures and Triggers',
    CUSTOM_FUNCTIONS: 'Custom Functions (UDF)',
    SECURITY_AND_USER_MANAGEMENT: 'Security and User Management',
    DATABASE_BACKUP_AND_RESTORATION: 'Database Backup and Restoration',
    DISTRIBUTED_DATABASES_AND_SHARDING: 'Distributed Databases and Sharding',
};

export const PageRoutes = {
    SQL_ADVANCED: CoursesPaths.SQL_ADVANCED,
    ADVANCED_SQL_SYNTAX: '/advanced-sql-syntax-and-query-optimization',
    COMPLEX_DATA_TYPES: '/complex-data-types',
    COMPLEX_SQL_STATEMENTS: '/complex-sql-statements-and-subqueries',
    SQL_JOINS_ADVANCED: '/advanced-sql-joins',
    SQL_SUBQUERIES: '/sql-subqueries',
    WINDOWS_FUNCTIONS: '/window-functions',
    DATABASE_NORMALIZATION: '/database-normalization',
    COMPLEX_AGGREGATION: '/complex-aggregation',
    TRANSACTION_CONTROL: '/transaction-control',
    CONCURRENCY_CONTROL: '/concurrency-control',
    INDEXES: '/indexes',
    STORED_PROCEDURES_AND_TRIGGERS: '/stored-procedures-and-triggers',
    CUSTOM_FUNCTIONS: '/custom-functions-udf',
    SECURITY_AND_USER_MANAGEMENT: '/security-and-user-management',
    DATABASE_BACKUP_AND_RESTORATION: '/database-backup-and-restoration',
    DISTRIBUTED_DATABASES_AND_SHARDING: '/distributed-databases-and-sharding',
};


export const RoutePath = {
    SQL_ADVANCED: CoursesPaths.SQL_ADVANCED,
    ADVANCED_SQL_SYNTAX: CoursesPaths.SQL_ADVANCED + PageRoutes.ADVANCED_SQL_SYNTAX,
    COMPLEX_DATA_TYPES: CoursesPaths.SQL_ADVANCED + PageRoutes.COMPLEX_DATA_TYPES,
    COMPLEX_SQL_STATEMENTS: CoursesPaths.SQL_ADVANCED + PageRoutes.COMPLEX_SQL_STATEMENTS,
    SQL_JOINS_ADVANCED: CoursesPaths.SQL_ADVANCED + PageRoutes.SQL_JOINS_ADVANCED,
    SQL_SUBQUERIES: CoursesPaths.SQL_ADVANCED + PageRoutes.SQL_SUBQUERIES,
    WINDOWS_FUNCTIONS: CoursesPaths.SQL_ADVANCED + PageRoutes.WINDOWS_FUNCTIONS,
    DATABASE_NORMALIZATION: CoursesPaths.SQL_ADVANCED + PageRoutes.DATABASE_NORMALIZATION,
    COMPLEX_AGGREGATION: CoursesPaths.SQL_ADVANCED + PageRoutes.COMPLEX_AGGREGATION,
    TRANSACTION_CONTROL: CoursesPaths.SQL_ADVANCED + PageRoutes.TRANSACTION_CONTROL,
    CONCURRENCY_CONTROL: CoursesPaths.SQL_ADVANCED + PageRoutes.CONCURRENCY_CONTROL,
    INDEXES: CoursesPaths.SQL_ADVANCED + PageRoutes.INDEXES,
    STORED_PROCEDURES_AND_TRIGGERS: CoursesPaths.SQL_ADVANCED + PageRoutes.STORED_PROCEDURES_AND_TRIGGERS,
    CUSTOM_FUNCTIONS: CoursesPaths.SQL_ADVANCED + PageRoutes.CUSTOM_FUNCTIONS,
    SECURITY_AND_USER_MANAGEMENT: CoursesPaths.SQL_ADVANCED + PageRoutes.SECURITY_AND_USER_MANAGEMENT,
    DATABASE_BACKUP_AND_RESTORATION: CoursesPaths.SQL_ADVANCED + PageRoutes.DATABASE_BACKUP_AND_RESTORATION,
    DISTRIBUTED_DATABASES_AND_SHARDING: CoursesPaths.SQL_ADVANCED + PageRoutes.DISTRIBUTED_DATABASES_AND_SHARDING,
};

export const RouteList = [
    { path: RoutePath.SQL_ADVANCED, component: <SQLAdvancedHome /> },
    { path: RoutePath.ADVANCED_SQL_SYNTAX, component: <AdvancedSQLSyntax /> },
    { path: RoutePath.COMPLEX_DATA_TYPES, component: <ComplexDataTypes /> },
    { path: RoutePath.COMPLEX_SQL_STATEMENTS, component: <ComplexSQLStatements /> },
    { path: RoutePath.SQL_JOINS_ADVANCED, component: <SQLJoinsAdvanced /> },
    { path: RoutePath.SQL_SUBQUERIES, component: <SQLSubqueries /> },
    { path: RoutePath.WINDOWS_FUNCTIONS, component: <WindowFunctions /> },
    { path: RoutePath.DATABASE_NORMALIZATION, component: <DatabaseNormalization /> },
    { path: RoutePath.COMPLEX_AGGREGATION, component: <ComplexAggregation /> },
    { path: RoutePath.CONCURRENCY_CONTROL, component: <ConcurrencyControl /> },
    { path: RoutePath.TRANSACTION_CONTROL, component: <TransactionControl /> },
    { path: RoutePath.INDEXES, component: <Indexes /> },
    { path: RoutePath.STORED_PROCEDURES_AND_TRIGGERS, component: <StoredProceduresAndTriggers /> },
    { path: RoutePath.CUSTOM_FUNCTIONS, component: <CustomFunctions /> },
    { path: RoutePath.SECURITY_AND_USER_MANAGEMENT, component: <SecurityAndUserManagement /> },
    { path: RoutePath.DATABASE_BACKUP_AND_RESTORATION, component: <DatabaseBackupAndRestoration /> },
    { path: RoutePath.DISTRIBUTED_DATABASES_AND_SHARDING, component: <DistributedDatabasesAndSharding /> },
];
