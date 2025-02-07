import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="section-title text-center">
                <h1>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <p>It might have been moved or deleted.</p>
                <Link to="/" className="btn custom-btn mt-2" >Go back to the homepage</Link>
            </div>
        </div>
    );
}
