import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function CustomFunctions() {
    return (
        <>
            <Lead
                title="Creating Custom Functions (User-Defined Functions) in SQL"
                paragraph1="User-defined functions (UDFs) allow you to create custom logic that can be reused in SQL queries, similar to built-in SQL functions. These functions can be used for advanced string manipulation, date handling, and numerical calculations, providing greater flexibility in your queries."
                paragraph2="In this section, we will explore how to create custom functions in SQL Server, including advanced string, date, and numerical functions. We'll also look at examples of how these functions can be used to simplify complex queries and perform advanced operations."
            />

            <Section>
                <h2>What Are User-Defined Functions (UDFs)?</h2>
                <p>A <strong>user-defined function (UDF)</strong> is a function that you create to perform custom logic, which can then be used like any other SQL function. These functions are reusable, modular, and help simplify complex SQL queries by encapsulating logic.</p>
                <p>UDFs are typically used for operations that:</p>
                <ul>
                    <li>Cannot be easily performed using built-in SQL functions</li>
                    <li>Need to be reused across multiple queries or stored procedures</li>
                    <li>Perform complex business logic that would be cumbersome in individual SQL statements</li>
                </ul>
            </Section>

            <Section>
                <h2>Creating User-Defined Functions (UDFs)</h2>
                <p>In SQL Server, you can create functions using the <code>CREATE FUNCTION</code> statement. These functions can have input parameters and return a result.</p>
                <p>The basic syntax for creating a UDF in SQL Server is:</p>
                <CodeSnippet language="sql" code={`CREATE FUNCTION function_name (parameter1 datatype, parameter2 datatype)
RETURNS return_datatype
AS
BEGIN
    -- Function logic
    RETURN result_value;
END;
`} />

                <h3>Example: Creating a Simple UDF</h3>
                <p>Here’s an example of a simple function that calculates the square of a number:</p>
                <CodeSnippet language="sql" code={`CREATE FUNCTION square_number (input_number INT)
RETURNS INT
AS
BEGIN
    RETURN input_number * input_number;
END;
`} />
                <p>This function takes an integer input and returns its square.</p>

                <h3>Example: Calling a User-Defined Function</h3>
                <p>To use this function in a query, you can call it like any other SQL function:</p>
                <CodeSnippet language="sql" code={`SELECT dbo.square_number(5);  -- Returns 25`} />
                <p>This will call the <code>square_number</code> function and return the result (25 in this case). Notice that the function is prefixed with <code>dbo</code>, which is the default schema in SQL Server.</p>
            </Section>

            <Section>
                <h2>Advanced String Functions</h2>
                <p>In addition to basic string functions like <code>CONCAT()</code>, <code>SUBSTRING()</code>, and <code>UPPER()/LOWER()</code>, you can create advanced string manipulation functions in SQL Server. These can help with tasks like formatting strings, extracting substrings, or manipulating text in complex ways.</p>

                <h3>Example: Creating a String Function</h3>
                <p>Let’s say you want to create a function that extracts the domain name from an email address. Here’s how you can do that:</p>
                <CodeSnippet language="sql" code={`CREATE FUNCTION dbo.extract_domain (email VARCHAR(255))
RETURNS VARCHAR(255)
AS
BEGIN
    DECLARE domain VARCHAR(255);
    SET domain = SUBSTRING(email, CHARINDEX('@', email) + 1, LEN(email) - CHARINDEX('@', email));
    RETURN domain;
END;
`} />

                <p>This function takes an email address as input and returns the domain part (e.g., "example.com" from "user@example.com"). The function uses <code>SUBSTRING()</code> along with <code>CHARINDEX()</code> to extract the domain.</p>

                <h3>Example: Using the String Function</h3>
                <p>To use the <code>extract_domain</code> function, you would call it within a query like this:</p>
                <CodeSnippet language="sql" code={`SELECT dbo.extract_domain('user@example.com');  -- Returns 'example.com'`} />
                <p>This will return the domain name from the email address.</p>
            </Section>

            <Section>
                <h2>Advanced Date Functions</h2>
                <p>SQL Server provides various built-in functions like <code>DATEADD()</code>, <code>DATEDIFF()</code>, and <code>GETDATE()</code> to manipulate and extract information from dates. You can also create custom date functions to perform more complex calculations or formatting.</p>

                <h3>Example: Creating a Date Function</h3>
                <p>Let’s create a function that calculates the number of weekdays (excluding weekends) between two dates:</p>
                <CodeSnippet language="sql" code={`CREATE FUNCTION dbo.weekday_difference (start_date DATE, end_date DATE)
RETURNS INT
AS
BEGIN
    DECLARE @days INT = 0;
    DECLARE @current_date DATE = start_date;

    WHILE @current_date <= end_date
    BEGIN
        IF DATEPART(WEEKDAY, @current_date) NOT IN (1, 7)  -- 1 = Sunday, 7 = Saturday
        BEGIN
            SET @days = @days + 1;
        END
        SET @current_date = DATEADD(DAY, 1, @current_date);
    END

    RETURN @days;
END;
`} />

                <p>This function loops through each day between the two dates, checking if the day is a weekend (1 = Sunday, 7 = Saturday) and increments the <code>@days</code> counter only for weekdays.</p>

                <h3>Example: Using the Date Function</h3>
                <p>To use the <code>weekday_difference</code> function, you would call it like this:</p>
                <CodeSnippet language="sql" code={`SELECT dbo.weekday_difference('2025-02-01', '2025-02-10');  -- Returns 8`} />
                <p>This query will return the number of weekdays (excluding weekends) between February 1 and February 10, 2025.</p>
            </Section>

            <Section>
                <h2>Advanced Numerical Functions</h2>
                <p>Numerical functions in SQL Server, such as <code>ROUND()</code>, <code>CEILING()</code>, and <code>FLOOR()</code>, allow you to perform basic calculations. However, you can also create custom functions to handle more advanced calculations and scenarios.</p>

                <h3>Example: Creating a Numerical Function</h3>
                <p>Let’s create a function that calculates the compound interest given a principal amount, rate of interest, and time period:</p>
                <CodeSnippet language="sql" code={`CREATE FUNCTION dbo.calculate_compound_interest (principal DECIMAL(10, 2), rate DECIMAL(5, 2), time INT)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @interest DECIMAL(10, 2);
    SET @interest = principal * POWER(1 + rate / 100, time) - principal;
    RETURN @interest;
END;
`} />

                <p>This function calculates the compound interest using the formula: <code>A = P(1 + r/n)^(nt) - P</code>, where <code>A</code> is the final amount, <code>P</code> is the principal, <code>r</code> is the annual interest rate, and <code>t</code> is the time in years.</p>

                <h3>Example: Using the Numerical Function</h3>
                <p>To use the <code>calculate_compound_interest</code> function, you would call it as follows:</p>
                <CodeSnippet language="sql" code={`SELECT dbo.calculate_compound_interest(1000, 5, 3);  -- Returns 157.63`} />
                <p>This query calculates the compound interest on a principal of $1000 with an annual interest rate of 5% over 3 years, returning $157.63.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>User-defined functions (UDFs) are a powerful tool in SQL Server that allow you to encapsulate complex logic and reuse it across queries, stored procedures, and triggers. By creating advanced string, date, and numerical functions, you can perform complex calculations, manipulate text data, and handle dates with precision. These custom functions greatly enhance your ability to work with SQL and solve advanced data problems efficiently.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.STORED_PROCEDURES_AND_TRIGGERS} nextPage={RoutePath.SECURITY_AND_USER_MANAGEMENT} />
        </>
    );
}
