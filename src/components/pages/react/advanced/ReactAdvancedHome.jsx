export default function ReactAdvancedHome() {
    return (
        <>
            <br />
            <h1 className="display-4 text-center fw-bold">🛫 Airport Automation React App 🛫</h1>
            <p className="lead text-center">
                A comprehensive React application that interfaces seamlessly with the Airport Automation API, providing users with an intuitive and efficient experience.
            </p>
            <p className="lead text-center">
                This project showcases best practices in front-end development using React, including state management, data fetching, and routing.
            </p>

            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-auto">
                        <a
                            href="https://github.com/crni99/AirportAutomation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn custom-btn m-2"
                        >
                            &nbsp;&nbsp;🛫 Main &nbsp;&nbsp;
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <section>
                            <h2>🎨 User Interface Design</h2>
                            <ul>
                                <li>
                                    <strong>Responsive Layout:</strong> Implemented a user-friendly, mobile-first design using React and CSS frameworks.
                                </li>
                                <li>
                                    <strong>Modern React Practices:</strong> Used functional components, hooks, and context API to manage state and lifecycle.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>📦 State Management</h2>
                            <ul>
                                <li>
                                    <strong>Context API & Redux:</strong> Managed global state for smooth data flow and interactions across the app.
                                </li>
                                <li>
                                    <strong>Asynchronous Data Fetching:</strong> Utilized the native fetch API for retrieving data from the backend API.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>🔄 Fetching and Displaying Data</h2>
                            <ul>
                                <li>
                                    <strong>API Integration:</strong> Integrated with the <a href="https://github.com/crni99/AirportAutomation">AirportAutomation API</a> to retrieve and display flight, passenger, and airport data.
                                </li>
                                <li>
                                    <strong>Dynamic Components:</strong> Rendered components based on user interactions and API responses.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>📝 Form Handling and Validation</h2>
                            <ul>
                                <li>
                                    <strong>React Hook Form:</strong> Implemented forms with real-time feedback and validation for booking and reservations.
                                </li>
                                <li>
                                    <strong>Error Handling:</strong> Provided clear error messages to users during form submission.
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="col-md-6">
                        <section>
                            <h2>🔀 Routing and Navigation</h2>
                            <ul>
                                <li>
                                    <strong>React Router:</strong> Used React Router for smooth navigation and managing different views within the app.
                                </li>
                                <li>
                                    <strong>Nested Routes:</strong> Organized components using nested routes for maintainable and scalable code.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>🔒 Security and Authentication</h2>
                            <ul>
                                <li>
                                    <strong>JWT Authentication:</strong> Secured user sessions using JWT for authentication and role-based access control.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>⚡ Performance Optimization</h2>
                            <ul>
                                <li>
                                    <strong>Lazy Loading & Code Splitting:</strong> Enhanced app performance with lazy loading of components and code splitting.
                                </li>
                                <li>
                                    <strong>Memoization:</strong> Used memoization techniques to optimize re-rendering and component performance.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>🚀 Deployment and Monitoring</h2>
                            <ul>
                                <li>
                                    <strong>Deployed on Vercel & Netlify:</strong> Deployed the app on <a href="https://airport-automation-react.vercel.app/">Vercel</a> and <a href="https://airport-automation-react.netlify.app/">Netlify</a> for production use.
                                </li>
                                <li>
                                    <strong>Application Monitoring:</strong> Implemented logging and monitoring for application health and performance tracking.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
