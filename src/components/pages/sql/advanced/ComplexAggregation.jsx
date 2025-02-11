import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function ComplexAggregation() {
    return (
        <>
            <Lead
                title="Using GROUPING SETS, CUBE, and ROLLUP in SQL"
                paragraph1="Learn about advanced SQL aggregation techniques like GROUPING SETS, CUBE, and ROLLUP. These features allow for more complex aggregations across multiple tables and provide enhanced reporting and analysis capabilities."
                paragraph2="In this section, we'll cover the syntax and practical applications of these operations, showing you how to use them for complex data aggregation in multi-table queries in both general SQL and Microsoft SQL Server."
            />

            <Section>
                <h2>What are GROUPING SETS, CUBE, and ROLLUP?</h2>
                <p>In SQL, GROUPING SETS, CUBE, and ROLLUP are extensions of the standard GROUP BY clause, used to perform complex aggregations over multiple dimensions at once. These operations allow you to generate summary results with different levels of granularity, making them especially useful in reporting and analytics.</p>
                <ul>
                    <li><strong>GROUPING SETS</strong>: Allows specifying multiple grouping combinations in a single query.</li>
                    <li><strong>CUBE</strong>: Generates all possible combinations of the specified grouping columns.</li>
                    <li><strong>ROLLUP</strong>: Creates subtotals for each level of the specified columns, ending with a grand total.</li>
                </ul>
            </Section>

            <Section>
                <h2>GROUPING SETS</h2>
                <p>GROUPING SETS allow you to define multiple grouping combinations within a single query. This is useful when you need to aggregate the same data across different dimensions in one result set.</p>

                <h3>Example: Using GROUPING SETS</h3>
                <p>Suppose you have a sales table with data about sales by product and region. You want to get the total sales by product, region, and both combined. You can use GROUPING SETS to achieve this in a single query:</p>
                
                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY GROUPING SETS (
    (product),            -- Total sales by product
    (region),             -- Total sales by region
    (product, region)     -- Total sales by product and region
);
`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY GROUPING SETS (
    (product),            -- Total sales by product
    (region),             -- Total sales by region
    (product, region)     -- Total sales by product and region
);
`} />

                <p>This query will return total sales aggregated by product, by region, and by both product and region, all in one result set.</p>
            </Section>

            <Section>
                <h2>CUBE</h2>
                <p>CUBE is a more powerful form of aggregation. It generates all possible combinations of the columns you specify, allowing you to analyze the data across every dimension of the table.</p>

                <h3>Example: Using CUBE</h3>
                <p>Using the same sales table, you want to see total sales for each combination of product and region, as well as subtotals and a grand total:</p>

                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY CUBE (product, region);
`} />
                
                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY CUBE (product, region);
`} />

                <p>The CUBE operation will generate the following results:</p>
                <ul>
                    <li>Total sales by product</li>
                    <li>Total sales by region</li>
                    <li>Total sales by both product and region</li>
                    <li>Grand total of all sales (across all products and regions)</li>
                </ul>
                <p>This is particularly useful for pivot-style reports where you need to see every possible combination of the data dimensions.</p>
            </Section>

            <Section>
                <h2>ROLLUP</h2>
                <p>ROLLUP is similar to CUBE but focuses on generating subtotals along the way. It starts by grouping the most specific level and progressively aggregates the data to higher levels, ultimately calculating the grand total.</p>

                <h3>Example: Using ROLLUP</h3>
                <p>Using the same sales table again, let’s calculate total sales by product, by region, and then a grand total of all sales:</p>

                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY ROLLUP (product, region);
`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT product, region, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY ROLLUP (product, region);
`} />

                <p>The ROLLUP operation will generate the following results:</p>
                <ul>
                    <li>Total sales by product and region</li>
                    <li>Total sales by product (subtotal for all regions)</li>
                    <li>Grand total of all sales (across all products and regions)</li>
                </ul>
                <p>Notice that ROLLUP doesn’t show subtotals for every combination (like CUBE does), but rather aggregates the data in a hierarchical manner. This is helpful when you want to see both specific details and summaries, but don’t need the full breakdown of combinations like in a CUBE.</p>
            </Section>

            <Section>
                <h2>Complex Aggregation in Multi-Table Queries</h2>
                <p>These operations can also be combined with joins to perform complex aggregation in multi-table queries. For example, let’s say you have a <code>sales</code> table and a <code>products</code> table, and you want to aggregate sales by product category and region:</p>
                
                <h3>Example: Using GROUPING SETS in Multi-Table Queries</h3>
                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY GROUPING SETS (
    (p.category, s.region),        -- Total sales by category and region
    (p.category),                 -- Total sales by category
    (s.region)                    -- Total sales by region
);
`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY GROUPING SETS (
    (p.category, s.region),        -- Total sales by category and region
    (p.category),                 -- Total sales by category
    (s.region)                    -- Total sales by region
);
`} />
                
                <p>This query will aggregate total sales by product category and region, by product category, and by region, combining the results into one query.</p>

                <h3>Example: Using CUBE in Multi-Table Queries</h3>
                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY CUBE (p.category, s.region);
`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY CUBE (p.category, s.region);
`} />

                <p>This query will return the following results:</p>
                <ul>
                    <li>Total sales by category and region</li>
                    <li>Total sales by category</li>
                    <li>Total sales by region</li>
                    <li>Grand total of all sales</li>
                </ul>

                <h3>Example: Using ROLLUP in Multi-Table Queries</h3>
                <h4>Global SQL Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY ROLLUP (p.category, s.region);
`} />

                <h4>SQL Server Example:</h4>
                <CodeSnippet language="sql" code={`SELECT p.category, s.region, SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY ROLLUP (p.category, s.region);
`} />

                <p>This query will return the following results:</p>
                <ul>
                    <li>Total sales by category and region</li>
                    <li>Total sales by category (subtotal for all regions)</li>
                    <li>Grand total of all sales (across all categories and regions)</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>GROUPING SETS, CUBE, and ROLLUP are powerful tools for complex aggregation in SQL. These operations allow you to aggregate data across multiple dimensions and levels of granularity, making them essential for advanced reporting and analysis. Whether you're generating detailed breakdowns or summary reports, these operations can greatly enhance the flexibility and depth of your SQL queries.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.DATABASE_NORMALIZATION} nextPage={RoutePath.TRANSACTION_CONTROL} />
        </>
    );
}
