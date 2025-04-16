export default function DotNetAdvancedHome() {
    return (
        <>
            <br></br>
            <h1 className="display-4 text-center fw-bold">🛫 Airport Automation 🛫</h1>
            <p className="lead text-center">A full-stack web development project featuring a robust RESTful API with modern practices, and a front-end web interface.</p>
            <p className="lead text-center">This project showcases both backend and frontend best practices using ASP.NET Core.</p>

            <div className="container">

                <div className="row justify-content-center text-center">

                    <div className="col-auto">
                        <a href="https://github.com/crni99/AirportAutomation" target="_blank" rel="noopener noreferrer" className="btn custom-btn m-2">
                            &nbsp;&nbsp;🛫 Main &nbsp;&nbsp;
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://github.com/crni99/AirportAutomation/tree/main/AirportAutomation/Airport%D0%90utomationApi" target="_blank" rel="noopener noreferrer" className="btn custom-btn m-2">
                            📡 API Code
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://github.com/crni99/AirportAutomation/tree/main/AirportAutomation/AirportAutomationWeb" target="_blank" rel="noopener noreferrer" className="btn custom-btn m-2">
                            🌐 Web Code
                        </a>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <section>
                            <h2>📡 Airport Automation API</h2>
                            <ul>
                                <li><strong>Creating API & Returning Resources:</strong> Defined endpoints to retrieve and return data resources.</li>
                                <li><strong>Manipulating Resources & Input Validation:</strong> Ensured data integrity with validation mechanisms.</li>
                                <li><strong>Dependency Injection:</strong> Used DI to keep code modular and testable.</li>
                                <li><strong>Entity Framework Core:</strong> ORM for DB access and management.</li>
                                <li><strong>CRUD Operations in Controllers:</strong> Direct interaction with the database.</li>
                                <li><strong>Filtering, Paging & Searching:</strong> Improved usability and data handling.</li>
                                <li><strong>API Security & CORS:</strong> Secure access with CORS and authentication.</li>
                                <li><strong>Swagger & Versioning:</strong> Documented and versioned the API.</li>
                                <li><strong>Logging & Exception Handling:</strong> Centralized logging for errors and monitoring.</li>
                                <li><strong>Rate Limiting:</strong> Protect API from abuse and DDoS.</li>
                                <li><strong>xUnit Testing:</strong> Unit tested key components.</li>
                                <li><strong>Health Checks:</strong> Monitored service health via endpoints.</li>
                            </ul>
                        </section>
                    </div>

                    <div className="col-md-6">
                        <section>
                            <h2>🌐 Airport Automation WEB</h2>
                            <ul>
                                <li><strong>HttpClientFactory:</strong> Efficiently consumed backend APIs.</li>
                                <li><strong>Web Service Integration:</strong> Pulled real-time data from APIs.</li>
                                <li><strong>Data Binding & Forms:</strong> Handled user input and data display dynamically.</li>
                                <li><strong>AJAX & Client-Side Scripting:</strong> Created dynamic, responsive UIs.</li>
                                <li><strong>Web Security:</strong> Prevented XSS, CSRF, enforced HTTPS & CORS.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}