import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function SecurityAndUserManagement() {
    return (
        <>
            <Lead
                title="Security and User Management"
                paragraph1="Security and user management are crucial for ensuring the integrity and confidentiality of your database. With Microsoft SQL Server, managing database access effectively can prevent unauthorized data access and maintain the integrity of your operations. This section covers how to manage database users, roles, permissions, and prevent SQL injection attacks."
                paragraph2="By following best practices for security, including managing roles, user access, and permissions, you can ensure your database performs optimally while protecting sensitive information from malicious attacks."
            />

            <Section>
                <h2>Managing Database Users and Roles</h2>
                <p>Microsoft SQL Server allows database administrators to create and manage users, assign roles, and control access to database objects. Properly managing users and roles ensures that only authorized personnel have access to sensitive data and operations.</p>

                <h3>Creating a New User</h3>
                <p>In SQL Server, you can create a new user using the <code>CREATE USER</code> statement. This statement requires a login and optionally assigns a password.</p>
                <CodeSnippet language="sql" code={`CREATE LOGIN new_user WITH PASSWORD = 'SecurePass123!';
CREATE USER new_user FOR LOGIN new_user;
`} />
                <p>The query creates a login for <code>new_user</code> with a password and then assigns that login as a user in the database. This user won't have permissions until roles are assigned.</p>

                <h3>Creating Roles</h3>
                <p>Roles help manage groups of users with similar access requirements. Instead of assigning permissions individually, roles allow for a more efficient and scalable management approach.</p>
                <CodeSnippet language="sql" code={`CREATE ROLE db_admin_role;
CREATE ROLE db_readonly_role;
`} />
                <p>Here, we create two roles: <code>db_admin_role</code> for users who require full administrative privileges and <code>db_readonly_role</code> for users who only need read access to the database.</p>

                <h3>Assigning Roles to Users</h3>
                <p>Once roles are created, you can assign them to users using the <code>ALTER ROLE</code> statement. Users inherit all permissions granted to the role.</p>
                <CodeSnippet language="sql" code={`ALTER ROLE db_admin_role ADD MEMBER new_user;`} />
                <p>This query assigns the <code>db_admin_role</code> to the user <code>new_user</code>, granting them administrative permissions such as creating, modifying, or dropping tables.</p>
            </Section>

            <Section>
                <h2>Granting and Revoking Permissions</h2>
                <p>SQL Server allows administrators to control user and role permissions using the <code>GRANT</code>, <code>REVOKE</code>, and <code>DENY</code> statements. Managing permissions ensures that users can only perform actions they are authorized for.</p>

                <h3>Granting Permissions</h3>
                <p>Use the <code>GRANT</code> statement to provide users or roles the ability to execute specific actions, such as <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> on specific database objects.</p>
                <CodeSnippet language="sql" code={`GRANT SELECT, INSERT ON dbo.users TO new_user;`} />
                <p>This query grants the <code>new_user</code> the ability to query and insert data into the <code>users</code> table.</p>

                <h3>Revoking Permissions</h3>
                <p>If you need to revoke permissions, use the <code>REVOKE</code> statement. This removes the specific permissions from a user or role.</p>
                <CodeSnippet language="sql" code={`REVOKE SELECT, INSERT ON dbo.users FROM new_user;`} />
                <p>This statement revokes the <code>SELECT</code> and <code>INSERT</code> permissions from <code>new_user</code> for the <code>users</code> table.</p>

                <h3>Revoking Roles</h3>
                <p>In addition to permissions, you can revoke roles from users, which removes all associated permissions.</p>
                <CodeSnippet language="sql" code={`ALTER ROLE db_admin_role DROP MEMBER new_user;`} />
                <p>This query revokes the <code>db_admin_role</code> from the user, removing any administrative permissions.</p>
            </Section>

            <Section>
                <h2>SQL Injection Prevention Techniques</h2>
                <p>SQL injection is one of the most common database security vulnerabilities. Preventing SQL injection is essential for protecting your database from unauthorized access and malicious attacks.</p>

                <h3>1. Use Prepared Statements</h3>
                <p>Prepared statements (also known as parameterized queries) separate SQL code from user input, which prevents malicious input from being executed as SQL code.</p>
                <CodeSnippet language="sql" code={`-- Example in Microsoft SQL Server
EXEC sp_executesql N'SELECT * FROM users WHERE username = @username AND password = @password', 
                   N'@username NVARCHAR(50), @password NVARCHAR(50)', 
                   @username = 'admin', @password = 'password123';
`} />
                <p>Here, the <code>sp_executesql</code> stored procedure is used to execute the query, where the parameters <code>@username</code> and <code>@password</code> are securely passed into the query.</p>

                <h3>2. Use Stored Procedures</h3>
                <p>Stored procedures are precompiled SQL statements, which means that user input is never inserted directly into the SQL code. This eliminates the risk of SQL injection.</p>
                <CodeSnippet language="sql" code={`CREATE PROCEDURE GetUserData @username NVARCHAR(50), @password NVARCHAR(50)
AS
BEGIN
    SELECT * FROM users WHERE username = @username AND password = @password;
END;
`} />
                <p>By using stored procedures, user input is passed as parameters, and the structure of the query is predefined and secure.</p>

                <h3>3. Sanitize User Inputs</h3>
                <p>It’s important to sanitize inputs by removing or escaping characters that could break the query structure, such as semicolons or quotation marks.</p>
                <CodeSnippet language="sql" code={`-- Example of sanitizing user input
DECLARE @username NVARCHAR(50);
SET @username = REPLACE(@username, ';', '');
SELECT * FROM users WHERE username = @username;
`} />
                <p>The <code>REPLACE</code> function removes dangerous characters from the input before executing the query.</p>

                <h3>4. Use ORM (Object-Relational Mapping) Frameworks</h3>
                <p>ORM frameworks such as Entity Framework (C#), Hibernate (Java), or Sequelize (Node.js) abstract SQL queries and automatically handle parameterized queries, reducing the risk of SQL injection.</p>

                <h3>5. Restrict Database User Privileges</h3>
                <p>Ensure that users only have the minimum necessary permissions to perform their tasks. For example, web application users should have only <code>SELECT</code> permissions and should not be able to modify data unless explicitly required.</p>
            </Section>

            <Section>
                <h2>Performance Considerations</h2>
                <p>While security is critical, it is also important to maintain performance. Complex security models or overly restrictive permission policies can impact query execution and database responsiveness, especially in large systems.</p>

                <ul>
                    <li><strong>Role-Based Access Control (RBAC):</strong> Assigning permissions to roles rather than individual users reduces the number of permission checks the database needs to perform, improving performance.</li>
                    <li><strong>Minimizing Privileges:</strong> Grant users only the permissions they absolutely need, which reduces the workload when checking permissions during query execution.</li>
                    <li><strong>Using Stored Procedures Wisely:</strong> While stored procedures enhance security, overusing them with complex logic can slow down performance. Use them when necessary but avoid unnecessary complexity.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>SQL Server security practices are crucial for ensuring the safety of your data and preventing unauthorized access. By properly managing users, roles, and permissions, you can maintain a secure and efficient database. Always use techniques like prepared statements, stored procedures, and proper role management to prevent SQL injection and other common security threats.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.CUSTOM_FUNCTIONS} nextPage={RoutePath.DATABASE_BACKUP_AND_RESTORATION} />
        </>
    );
}
