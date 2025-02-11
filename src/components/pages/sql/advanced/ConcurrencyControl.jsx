import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function ConcurrencyControl() {
    return (
        <>
            <Lead
                title="Concurrency Control in SQL"
                paragraph1="Learn how concurrency control mechanisms in SQL databases manage simultaneous access to data by multiple users. This section explains how to handle concurrency challenges, isolation levels, and locking mechanisms to ensure data consistency and avoid issues like race conditions and deadlocks."
                paragraph2="This section covers the core concepts of concurrency control, including isolation levels, locking strategies, race conditions, deadlocks, phantom reads, and their impact on database performance."
            />

            <Section>
                <h2>Concurrency Challenges in Multi-User Environments</h2>
                <p>In a multi-user database system, multiple users or applications may attempt to access and modify the same data at the same time. This leads to several concurrency challenges, such as:</p>
                <ul>
                    <li><strong>Dirty Reads</strong>: A transaction reads data that is not yet committed by another transaction.</li>
                    <li><strong>Non-Repeatable Reads</strong>: Data read by a transaction is modified by another transaction before the first transaction is completed.</li>
                    <li><strong>Phantom Reads</strong>: A transaction reads a set of rows based on a condition, but another transaction inserts, deletes, or updates rows that affect the result set.</li>
                    <li><strong>Race Conditions</strong>: Multiple transactions simultaneously trying to update the same data, potentially leading to inconsistent results.</li>
                    <li><strong>Deadlocks</strong>: A situation where two or more transactions are blocked forever because they are each waiting on resources held by the other.</li>
                </ul>
                <p>To address these challenges, SQL databases implement various concurrency control mechanisms to ensure that transactions are executed in a way that guarantees data consistency while minimizing conflicts and inefficiencies.</p>
            </Section>

            <Section>
                <h2>Isolation Levels</h2>
                <p>SQL databases use isolation levels to define the visibility of changes made by one transaction to other concurrent transactions. The four standard isolation levels, in order of increasing strictness, are:</p>

                <h3>1. Read Uncommitted</h3>
                <p>In the <strong>Read Uncommitted</strong> isolation level, transactions are allowed to read uncommitted changes made by other transactions. This can lead to dirty reads, where a transaction reads data that might later be rolled back.</p>
                <p>Example: If Transaction 1 is updating a record, and Transaction 2 reads the same record before Transaction 1 commits, the data read by Transaction 2 might be invalid if Transaction 1 rolls back.</p>
                <CodeSnippet language="sql" code={`SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

BEGIN;

-- Transaction 1: Update balance
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Transaction 2: Read uncommitted data (dirty read)
SELECT balance FROM accounts WHERE account_id = 1;

COMMIT;
`} />
                
                <h3>2. Read Committed</h3>
                <p>With the <strong>Read Committed</strong> isolation level, transactions can only read data that has been committed. This prevents dirty reads but still allows for non-repeatable reads, where the data read by a transaction might change if another transaction commits changes to that data.</p>
                <p>Example: Transaction 1 reads a record, and before it commits, Transaction 2 updates the same record. If Transaction 1 reads the record again, it will get a different value.</p>
                <CodeSnippet language="sql" code={`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN;

-- Transaction 1: Read account balance
SELECT balance FROM accounts WHERE account_id = 1;

-- Transaction 2: Update account balance
UPDATE accounts SET balance = balance + 100 WHERE account_id = 1;

COMMIT;
`} />

                <h3>3. Repeatable Read</h3>
                <p>In the <strong>Repeatable Read</strong> isolation level, transactions are guaranteed to see the same data for the duration of their execution. This prevents dirty reads and non-repeatable reads but still allows phantom reads, where new rows could be inserted or deleted by other transactions that match the query conditions.</p>
                <p>Example: If Transaction 1 reads a set of rows, and Transaction 2 inserts or deletes rows matching the same conditions, Transaction 1 might get different results if it reruns the same query.</p>
                <CodeSnippet language="sql" code={`SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

BEGIN;

-- Transaction 1: Read account balance
SELECT balance FROM accounts WHERE account_id = 1;

-- Transaction 2: Insert new account
INSERT INTO accounts (account_id, balance) VALUES (3, 500);

COMMIT;
`} />

                <h3>4. Serializable</h3>
                <p>The <strong>Serializable</strong> isolation level is the strictest, ensuring that transactions are executed in such a way that the results are equivalent to running the transactions serially (one after the other). This prevents all concurrency problems, including dirty reads, non-repeatable reads, and phantom reads. However, it can cause performance issues due to high locking overhead.</p>
                <p>Example: Transaction 1 will block other transactions from modifying data that could affect its results until it is completed.</p>
                <CodeSnippet language="sql" code={`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN;

-- Transaction 1: Read account balance
SELECT balance FROM accounts WHERE account_id = 1;

-- Transaction 2: Attempting to modify the same account will be blocked until Transaction 1 commits
UPDATE accounts SET balance = balance + 100 WHERE account_id = 1;

COMMIT;
`} />
            </Section>

            <Section>
                <h2>Locking Mechanisms and Their Effects</h2>
                <p>Locking is a technique used by databases to prevent concurrent transactions from interfering with each other. Different types of locks can be applied to ensure data consistency and prevent conflicts between transactions.</p>

                <h3>Shared Locks</h3>
                <p>A <strong>Shared Lock</strong> allows multiple transactions to read a piece of data simultaneously but prevents any transaction from modifying the data until the lock is released. This is typically used when a transaction is only reading data.</p>
                <p>Example: Transaction 1 and Transaction 2 both read the same record without interference, but neither can update it until all shared locks are released.</p>

                <h3>Exclusive Locks</h3>
                <p>An <strong>Exclusive Lock</strong> prevents any other transaction from reading or writing the locked data. This lock is typically used when a transaction is modifying data.</p>
                <p>Example: If Transaction 1 has an exclusive lock on a record, Transaction 2 cannot read or update the same record until Transaction 1 commits or rolls back.</p>

                <h3>Lock Granularity</h3>
                <p>Locks can be applied at different levels of granularity, such as:</p>
                <ul>
                    <li><strong>Row-Level Locks</strong>: Locks are applied to individual rows in a table.</li>
                    <li><strong>Table-Level Locks</strong>: Entire tables are locked, preventing any modifications or reads on the table.</li>
                </ul>
                <p>Choosing the appropriate granularity helps balance concurrency and performance, but more fine-grained locks (e.g., row-level) can reduce contention, whereas coarser locks (e.g., table-level) can increase performance at the cost of concurrency.</p>
            </Section>

            <Section>
                <h2>Handling Race Conditions, Deadlocks, and Phantom Reads</h2>

                <h3>Race Conditions</h3>
                <p>A race condition occurs when two or more transactions attempt to modify the same data at the same time, leading to inconsistent or incorrect results. To prevent race conditions, databases use locking mechanisms and isolation levels.</p>
                <p>Example: Two transactions try to update the balance of the same account. Without proper isolation or locks, both transactions could end up reading the same initial balance, resulting in incorrect final balances after both transactions are committed.</p>

                <h3>Deadlocks</h3>
                <p>A deadlock occurs when two or more transactions are waiting for each other to release locks, causing them to block each other indefinitely. To handle deadlocks, SQL databases detect circular waiting patterns and automatically abort one of the transactions to break the deadlock.</p>
                <p>Example: Transaction 1 holds a lock on Account 1 and waits for Account 2, while Transaction 2 holds a lock on Account 2 and waits for Account 1. This circular dependency causes a deadlock.</p>

                <h3>Phantom Reads</h3>
                <p>A phantom read occurs when a transaction reads a set of rows based on a condition, but another transaction inserts, updates, or deletes rows that affect the result set during the course of the first transaction. This can lead to inconsistent results if the set of rows changes.</p>
                <p>Example: Transaction 1 reads all accounts with a balance greater than $1000. Transaction 2 inserts a new account with a balance of $1500 during Transaction 1’s execution. When Transaction 1 repeats its query, it will get a different result set, potentially leading to inconsistent processing.</p>
            </Section>

            <Section>
                <h2>Performance Considerations Related to Concurrency</h2>
                <p>While concurrency control mechanisms help maintain data integrity, they can have an impact on database performance. The stricter the isolation level and locking strategy, the more likely it is that transactions will experience delays due to contention for resources.</p>
                <p>To optimize performance, consider the following strategies:</p>
                <ul>
                    <li><strong>Use Lower Isolation Levels</strong>: For read-heavy workloads, consider using lower isolation levels like Read Committed to improve performance while maintaining a reasonable level of consistency.</li>
                    <li><strong>Optimize Locking</strong>: Minimize the use of exclusive locks and try to lock data at the row level instead of the table level to improve concurrency.</li>
                    <li><strong>Deadlock Handling</strong>: Properly design transactions to avoid circular dependencies, and monitor the system to detect and resolve deadlocks quickly.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Concurrency control is vital for ensuring the integrity and consistency of data in a multi-user SQL database system. By understanding and applying isolation levels, locking mechanisms, and techniques for managing race conditions, deadlocks, and phantom reads, you can ensure your database operations are efficient and reliable. However, it is essential to balance strict consistency with performance considerations to optimize the overall system behavior.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.TRANSACTION_CONTROL} nextPage={RoutePath.INDEXES} />
        </>
    );
}
