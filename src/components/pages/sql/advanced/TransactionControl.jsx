import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function TransactionControl() {
    return (
        <>
            <Lead
                title="Transaction Control in SQL"
                paragraph1="Understand how transactions work in SQL and the importance of ACID properties for maintaining data integrity. Learn practical examples of using COMMIT, ROLLBACK, and SAVEPOINT to manage transactions effectively in a database system."
                paragraph2="This section explains how transactions ensure the consistency and reliability of your data in SQL databases. You will also learn how to apply ACID properties and use control commands like COMMIT and ROLLBACK effectively to manage your data operations."
            />

            <Section>
                <h2>What is a Transaction?</h2>
                <p>A transaction in SQL is a unit of work that consists of one or more operations (queries) executed as a single, logical action. Transactions allow the database to execute multiple SQL operations as a batch, ensuring that either all the operations are completed successfully or none of them are, preserving the integrity of the data.</p>
                <p>Transactions help to ensure that the database remains in a consistent state, even in cases where errors occur, or the system crashes during the transaction. Transactions are used to guarantee that business rules are followed and data integrity is maintained.</p>
            </Section>

            <Section>
                <h2>ACID Properties in Depth</h2>
                <p>The ACID properties (Atomicity, Consistency, Isolation, and Durability) are critical principles that guarantee that transactions are processed reliably. They ensure that the database adheres to rules of correctness, even when errors or system failures occur during transaction processing.</p>
                
                <h3>1. Atomicity</h3>
                <p>Atomicity ensures that all the operations within a transaction are treated as a single unit. This means that if one operation in the transaction fails, the entire transaction is rolled back, and no partial updates are saved to the database.</p>
                <p>Example: If a bank transfer consists of two operations—debiting one account and crediting another—both operations must succeed or fail together. If the debit succeeds but the credit fails, atomicity ensures that both operations are rolled back, avoiding partial changes to the database.</p>
                <CodeSnippet language="sql" code={`BEGIN;

-- Deduct from Account 1
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Credit Account 2
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT; -- If no errors, both operations will be committed together.
`} />
                
                <h3>2. Consistency</h3>
                <p>Consistency ensures that a transaction always brings the database from one valid state to another, maintaining integrity constraints such as primary keys, foreign keys, and other rules enforced by the database.</p>
                <p>Example: If you have a rule that the total balance across all accounts cannot exceed $1,000,000, a transaction that would result in exceeding this limit should be rejected, ensuring that the database remains consistent with defined rules.</p>
                <CodeSnippet language="sql" code={`BEGIN;

-- This should fail if the total balance exceeds the maximum limit
UPDATE accounts SET balance = balance + 500000 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 500000 WHERE account_id = 2;

COMMIT; -- If the limit is violated, the transaction would fail, preserving the consistency of the data.
`} />
                
                <h3>3. Isolation</h3>
                <p>Isolation ensures that the operations of one transaction are isolated from other transactions. This prevents other transactions from accessing or modifying data that is in the process of being changed by another transaction. This property helps avoid issues like dirty reads, non-repeatable reads, and phantom reads.</p>
                <p>Isolation is controlled using isolation levels, which define how much a transaction is isolated from others. The higher the isolation level, the less likely conflicts between transactions will occur, but this can lead to reduced performance due to locking mechanisms.</p>
                <CodeSnippet language="sql" code={`-- Example with higher isolation level (Serializable)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN;

-- Transaction 1: Deduct from Account 1
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Transaction 2 (running concurrently): This will be blocked until Transaction 1 completes.
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;
`} />

                <h3>4. Durability</h3>
                <p>Durability ensures that once a transaction is committed, the changes made to the database are permanent, even in the event of a system crash. The database will not lose any data after the transaction has been completed and committed.</p>
                <p>For example, if a transaction transfers money from one account to another and a crash happens after the <code>COMMIT</code> statement, the system will recover the data and ensure that the money has been transferred when the database restarts.</p>
            </Section>

            <Section>
                <h2>Practical Examples: COMMIT, ROLLBACK, and SAVEPOINT</h2>

                <h3>Using COMMIT</h3>
                <p>The <code>COMMIT</code> statement is used to save all changes made during the current transaction. Once you issue a <code>COMMIT</code>, all operations performed since the beginning of the transaction become permanent.</p>
                <p>Example: After transferring money between two accounts:</p>
                <CodeSnippet language="sql" code={`BEGIN;

-- Deducting from Account 1
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Credit to Account 2
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;  -- All changes are now permanent
`} />
                <p>In this example, once the <code>COMMIT</code> command is issued, the transaction is finalized, and changes cannot be rolled back.</p>

                <h3>Using ROLLBACK</h3>
                <p>The <code>ROLLBACK</code> statement undoes all changes made during the current transaction. If an error occurs at any point, you can use <code>ROLLBACK</code> to revert all modifications to their previous state.</p>
                <p>Example: If there’s an issue transferring funds, the transaction will be rolled back:</p>
                <CodeSnippet language="sql" code={`BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Simulate an error (e.g., insufficient funds in Account 1)
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- If something goes wrong, we can undo the entire transaction
ROLLBACK;
`} />
                <p>If there’s a problem, like insufficient funds, you can undo everything using <code>ROLLBACK</code>, so no partial changes are made to the database.</p>

                <h3>Using SAVEPOINT</h3>
                <p><code>SAVEPOINT</code> allows you to define intermediate points within a transaction. If a problem occurs, you can rollback to the savepoint without undoing all changes made before it. This allows for more granular control.</p>
                <p>Example: Using savepoints in a multi-step transaction:</p>
                <CodeSnippet language="sql" code={`BEGIN;

UPDATE accounts SET balance = balance - 50 WHERE account_id = 1;
SAVEPOINT midway;  -- Create a savepoint

-- Perform another operation (this will fail)
UPDATE accounts SET balance = balance - 100 WHERE account_id = 2;

-- Roll back to midway to undo the second update only
ROLLBACK TO midway;

COMMIT;  -- Finalize the changes that were successful
`} />
                <p>In this case, the transaction successfully deducts 50 from Account 1, but if there's an error with the second operation, we can revert just the second update (using the savepoint), while keeping the first one intact.</p>
            </Section>

            <Section>
                <h2>Importance of Atomicity and Consistency</h2>
                <p>Atomicity and consistency are two of the most important properties for ensuring that a database remains in a valid state after operations are performed. They both play a crucial role in preventing data corruption and ensuring that the database adheres to its constraints and business rules.</p>
                
                <h3>Atomicity</h3>
                <p>Atomicity is essential for cases where a transaction involves multiple operations. It guarantees that either all of them succeed or none of them are executed. Without atomicity, partial changes could be made, leading to inconsistent data. For example, in a bank transaction, if money is deducted from one account but not added to another, atomicity ensures the transaction is rolled back and nothing is left in an inconsistent state.</p>
                
                <h3>Consistency</h3>
                <p>Consistency ensures that the database follows all defined rules and constraints before and after a transaction. This prevents situations where invalid data is inserted, such as when a transaction violates business logic (e.g., an account balance falling below zero). By enforcing consistency, SQL ensures that the data is always in a valid state, even in the event of an error or system crash.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Transaction control is a powerful feature in SQL that ensures data integrity, consistency, and reliability. By using the <code>COMMIT</code>, <code>ROLLBACK</code>, and <code>SAVEPOINT</code> statements effectively, you can manage complex operations in a safe and controlled manner, ensuring that either all changes are saved or none at all. Understanding the ACID properties—Atomicity, Consistency, Isolation, and Durability—is fundamental to maintaining data integrity, especially in multi-step operations or scenarios involving concurrent transactions.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.COMPLEX_AGGREGATION} nextPage={RoutePath.CONCURRENCY_CONTROL} />
        </>
    );
}
