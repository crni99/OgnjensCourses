import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function DistributedDatabasesAndSharding() {
    return (
        <>
            <Lead
                title="Distributed Databases and Sharding"
                paragraph1="Distributed databases and sharding are techniques used to scale databases horizontally by distributing data across multiple physical or logical nodes. These methods allow databases to handle large volumes of data and high levels of concurrency efficiently."
                paragraph2="In this section, we’ll explore distributed databases, the concept of sharding and partitioning, and practical examples for implementing these techniques in SQL Server."
            />

            <Section>
                <h2>Introduction to Distributed Databases</h2>
                <p>A distributed database system consists of multiple interconnected databases that are spread across different physical or logical locations. These databases work together as a single unit, ensuring data availability, redundancy, and scalability. The goal is to distribute the load across several nodes to improve performance and handle more data and requests.</p>

                <p>Key concepts in distributed databases include:</p>
                <ul>
                    <li><strong>Replication:</strong> Copying data across multiple nodes for redundancy and improved fault tolerance.</li>
                    <li><strong>Consistency:</strong> Ensuring that all nodes in the system are consistent and synchronized, even during network partitioning or failures.</li>
                    <li><strong>Partitioning:</strong> Dividing the data across multiple nodes (sharding) to distribute the load and improve query performance.</li>
                </ul>

                <h3>Example: Simple Distributed Database</h3>
                <p>Imagine a multinational company with data centers in various regions worldwide, such as Europe, Asia, and North America. A distributed database system allows employees across these regions to access data seamlessly, with the system handling data distribution, replication, and synchronization. For example, in Microsoft SQL Server, databases can be spread across multiple servers (instances) to allow access and ensure data consistency.</p>
            </Section>

            <Section>
                <h2>Sharding and Partitioning</h2>
                <p>Sharding and partitioning are techniques used to split data across multiple servers or databases, enabling horizontal scaling and reducing the load on any single node.</p>

                <h3>Sharding</h3>
                <p>Sharding is the process of dividing a large database into smaller, more manageable pieces, called "shards." Each shard contains a portion of the data and is hosted on a separate node. Shards can be distributed across multiple servers, allowing the system to scale horizontally by adding more nodes.</p>

                <h4>Sharding Example</h4>
                <p>Consider an e-commerce platform with millions of customers. The customer data could be sharded based on customer region. For instance:</p>
                <ul>
                    <li><strong>Shard 1:</strong> North American customers</li>
                    <li><strong>Shard 2:</strong> European customers</li>
                    <li><strong>Shard 3:</strong> Asian customers</li>
                </ul>

                <p>In this case, each shard stores customer data for a specific region. Queries for customer data would be routed to the appropriate shard based on the region, improving performance and ensuring that data is distributed efficiently.</p>

                <CodeSnippet language="sql" code={`-- Example of sharding on a customer table in SQL Server
CREATE DATABASE CustomerShard1;
USE CustomerShard1;
CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    name NVARCHAR(255),
    email NVARCHAR(255)
);

CREATE DATABASE CustomerShard2;
USE CustomerShard2;
CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    name NVARCHAR(255),
    email NVARCHAR(255)
);

-- Sharding data based on region (North America, Europe)
-- Example: North American customers (customer_id 1-1,000,000) would go into Shard 1
-- European customers (customer_id 1,000,001-2,000,000) would go into Shard 2
`} />

                <p>This SQL Server example demonstrates how to create two separate databases (shards) for customer data. Data from customers in North America is stored in Shard 1, and European customers’ data is stored in Shard 2. Queries are routed to the appropriate shard based on the region.</p>

                <h3>Partitioning</h3>
                <p>Partitioning divides a large database table into smaller, more manageable pieces, called partitions. While sharding distributes data across different servers, partitioning stores data within a single server, improving query performance and data management.</p>

                <h4>Partitioning Example</h4>
                <p>For example, partitioning an "orders" table in SQL Server based on order dates would help improve query performance for time-based queries. Each partition would store data for a specific time range, like a year or a month.</p>

                <CodeSnippet language="sql" code={`-- Example of partitioning an orders table by year in SQL Server
CREATE PARTITION FUNCTION OrderDateRange (DATE)
AS RANGE RIGHT FOR VALUES ('2020-01-01', '2021-01-01');

CREATE PARTITION SCHEME OrderDateScheme
AS PARTITION OrderDateRange TO ([PRIMARY], [SECONDARY]);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10, 2)
) ON OrderDateScheme(order_date);

-- This example creates two partitions for the years 2020 and 2021
`} />

                <p>This SQL Server example demonstrates how to partition an "orders" table based on order dates. Orders from 2020 are placed in one partition, and orders from 2021 are placed in another partition. This makes it easier to query data from specific years.</p>
            </Section>

            <Section>
                <h2>Distributed Database Architectures</h2>
                <p>There are different architectures for building distributed databases, including:</p>
                <ul>
                    <li><strong>Master-Slave Replication:</strong> In this architecture, one node (master) handles all write operations, and other nodes (slaves) replicate the data from the master node. Slave nodes can be used for read queries to balance the load.</li>
                    <li><strong>Peer-to-Peer Replication:</strong> Each node in this architecture is equal and can serve both read and write requests. All nodes replicate data to each other, ensuring consistency and availability.</li>
                    <li><strong>Multi-Master Replication:</strong> Multiple nodes can accept write operations, with data being synchronized across all nodes. This architecture ensures high availability but requires complex conflict resolution mechanisms.</li>
                </ul>

                <h4>Example: Master-Slave Replication in SQL Server</h4>
                <p>In a master-slave architecture, the master node handles write operations, and the slave nodes replicate data from the master to handle read operations. Here’s how you can set up replication in SQL Server:</p>

                <CodeSnippet language="sql" code={`-- On the master server
EXEC sp_addserver 'slave_server', 'remote'; 
EXEC sp_addlinkedserver @server = 'slave_server', @srvproduct = '', @provider = 'SQLNCLI', @datasrc = 'slave_server_instance';

-- On the slave server
EXEC sp_addserver 'master_server', 'remote';
`} />
                <p>This SQL Server example demonstrates how to set up a master-slave replication setup where the master server replicates data to the slave server. The slave server can then handle read queries to reduce load on the master server.</p>
            </Section>

            <Section>
                <h2>Challenges in Distributed Databases and Sharding</h2>
                <p>While distributed databases and sharding can improve scalability and performance, they also introduce several challenges:</p>
                <ul>
                    <li><strong>Data Consistency:</strong> Ensuring consistency across nodes in a distributed database system can be challenging, especially with concurrent updates or network failures.</li>
                    <li><strong>Network Latency:</strong> Communication between nodes in distributed systems may introduce latency, impacting performance, particularly when nodes are spread across geographical locations.</li>
                    <li><strong>Complexity in Query Routing:</strong> Query routing can become complex as the application must decide which shard or partition to query, often requiring dedicated routing mechanisms.</li>
                    <li><strong>Rebalancing Shards:</strong> As data grows, sharding may require data rebalancing to avoid overloading any single node. This process can be resource-intensive.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Distributed databases and sharding are powerful techniques for scaling databases horizontally. By distributing data across multiple nodes, they help handle large datasets and high concurrency. However, they introduce challenges like data consistency, network latency, and query routing complexity, which must be managed carefully. When implemented correctly, distributed databases and sharding provide a scalable and fault-tolerant solution for large-scale applications.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.DATABASE_BACKUP_AND_RESTORATION} nextPage={undefined} />
        </>
    );
}
