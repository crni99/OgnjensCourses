import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstSQLAdvanced";

export default function DatabaseBackupAndRestoration() {
    return (
        <>
            <Lead
                title="Database Backup and Restoration"
                paragraph1="Database backup and restoration are critical tasks for ensuring data availability and business continuity. A backup creates a copy of your data, which can be used to restore the database in case of failure, corruption, or accidental loss."
                paragraph2="This section covers different types of backups (full, incremental, and differential), how to back up a Microsoft SQL Server database, and how to restore data from these backups. We’ll also review best practices for managing backups."
            />

            <Section>
                <h2>Backing Up Databases</h2>
                <p>Backing up your SQL Server database is essential for protecting against data loss. There are different types of backups: full backups, differential backups, and transaction log backups. Each serves a different purpose and should be selected based on your organization's data protection needs.</p>

                <h3>1. Full Backup</h3>
                <p>A full backup is a complete snapshot of the database, including all data and schema. This backup is essential for recovery in case of total failure or disaster. It’s recommended to perform a full backup regularly to ensure the database is completely recoverable.</p>
                <CodeSnippet language="sql" code={`-- Example of backing up a database using a full backup in SQL Server
BACKUP DATABASE [mydatabase]
TO DISK = 'C:\\path\\to\\backup\\full_backup.bak';
`} />
                <p>This command creates a full backup of the <code>mydatabase</code> database to a file on disk in SQL Server. The <code>DISK</code> option specifies the destination file where the backup will be stored.</p>

                <h3>2. Differential Backup</h3>
                <p>A differential backup captures all changes made since the last full backup. These backups are typically smaller in size compared to full backups, and they allow for faster restoration times since only the last full backup and the most recent differential backup are needed.</p>
                <CodeSnippet language="sql" code={`-- Example of performing a differential backup in SQL Server
BACKUP DATABASE [mydatabase]
TO DISK = 'C:\\path\\to\\backup\\diff_backup.bak'
WITH DIFFERENTIAL;
`} />
                <p>This command performs a differential backup in SQL Server, capturing all changes since the last full backup. You would restore the last full backup and then apply the differential backup to recover the data.</p>

                <h3>3. Transaction Log Backup</h3>
                <p>Transaction log backups allow you to capture and preserve all the transaction log entries since the last transaction log backup. This type of backup is important for point-in-time recovery and is usually performed frequently to minimize data loss.</p>
                <CodeSnippet language="sql" code={`-- Example of backing up transaction logs in SQL Server
BACKUP LOG [mydatabase]
TO DISK = 'C:\\path\\to\\backup\\log_backup.trn';
`} />
                <p>In this example, the <code>BACKUP LOG</code> command performs a transaction log backup of the <code>mydatabase</code> database. This allows for recovery of the database to a specific point in time by replaying the transactions from the log.</p>
            </Section>

            <Section>
                <h2>Restoring Databases from Backups</h2>
                <p>Restoring a database from a backup is the process of recovering data that has been lost, corrupted, or accidentally deleted. The restoration process depends on the type of backup and the database recovery model being used.</p>

                <h3>1. Restoring from a Full Backup</h3>
                <p>If you have a full backup, it can be restored easily using the <code>RESTORE DATABASE</code> command. This is typically used for recovery after a disaster or major failure.</p>
                <CodeSnippet language="sql" code={`-- Example of restoring a full backup in SQL Server
RESTORE DATABASE [mydatabase]
FROM DISK = 'C:\\path\\to\\backup\\full_backup.bak';
`} />
                <p>This command restores the <code>mydatabase</code> database from a full backup stored on disk. This is the basic form of database restoration.</p>

                <h3>2. Restoring from a Differential Backup</h3>
                <p>Restoring from a differential backup requires you to first restore the last full backup and then apply the differential backup to bring the database up to the point of the differential backup.</p>
                <CodeSnippet language="sql" code={`-- Example of restoring from a differential backup in SQL Server
RESTORE DATABASE [mydatabase]
FROM DISK = 'C:\\path\\to\\backup\\full_backup.bak';

RESTORE DATABASE [mydatabase]
FROM DISK = 'C:\\path\\to\\backup\\diff_backup.bak'
WITH NORECOVERY;
`} />
                <p>This sequence first restores the full backup and then applies the differential backup to bring the database to the most recent state. The <code>WITH NORECOVERY</code> option allows for additional restores (e.g., transaction logs) to be applied afterward.</p>

                <h3>3. Restoring from a Transaction Log Backup</h3>
                <p>When using transaction log backups, you must restore the last full backup, apply any differential backups, and then restore each transaction log backup in sequence to restore the database to the desired point in time.</p>
                <CodeSnippet language="sql" code={`-- Example of restoring a transaction log backup in SQL Server
RESTORE DATABASE [mydatabase]
FROM DISK = 'C:\\path\\to\\backup\\full_backup.bak';

RESTORE LOG [mydatabase]
FROM DISK = 'C:\\path\\to\\backup\\log_backup.trn';
`} />
                <p>This restores the full backup and then applies a transaction log backup to bring the database to a specific point in time.</p>
            </Section>

            <Section>
                <h2>Backup and Restoration Best Practices</h2>
                <p>To ensure effective and reliable backups, follow these best practices:</p>

                <ul>
                    <li><strong>Regular Backups:</strong> Schedule daily or weekly full backups, along with more frequent transaction log backups, depending on your needs.</li>
                    <li><strong>Offsite Backups:</strong> Store backups in multiple locations, including offsite or in the cloud, to protect against disasters such as hardware failure or natural events.</li>
                    <li><strong>Backup Validation:</strong> Regularly test your backups to ensure they are valid and can be restored. A backup is only useful if it can be restored when needed.</li>
                    <li><strong>Encrypt Backups:</strong> Ensure sensitive data in backups is encrypted to prevent unauthorized access.</li>
                    <li><strong>Backup Retention:</strong> Develop a backup retention policy to define how long backups are kept and when older backups are deleted, ensuring that enough backups are available for recovery.</li>
                </ul>
            </Section>

            <Section>
                <h2>Performance Considerations</h2>
                <p>Performing database backups on large databases can affect performance. Here are some considerations to minimize performance degradation:</p>

                <ul>
                    <li><strong>Schedule Backups During Off-Peak Hours:</strong> Perform backups during periods of low database activity to minimize the impact on users.</li>
                    <li><strong>Backup Compression:</strong> Use backup compression to reduce the size of backup files and speed up both backup and restoration times.</li>
                    <li><strong>Incremental Backups:</strong> Consider using incremental or transaction log backups to reduce backup size and duration.</li>
                    <li><strong>Optimize Database Performance:</strong> Ensure your database is optimized with proper indexing and maintenance to reduce performance issues during backups.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Database backup and restoration are crucial for data protection and business continuity. By performing regular backups, storing them offsite, and following best practices, you can protect your data and ensure it can be quickly restored if needed. Choose the right backup strategy (full, differential, or transaction log) based on your needs, and always test your backup and restoration processes to ensure their effectiveness.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.SECURITY_AND_USER_MANAGEMENT} nextPage={RoutePath.DISTRIBUTED_DATABASES_AND_SHARDING} />
        </>
    );
}
