import React, { useState, useEffect } from 'react';
import GroupItemBackend from './GroupItemBackend';
import GroupItemFrontend from './GroupItemFrontend';
import GroupItemDatabases from './GroupItemDatabase';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark" ||
               (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        document.body.classList.toggle("bg-dark", isDarkMode);
        document.body.classList.toggle("bg-light", !isDarkMode);
        document.body.classList.toggle("text-light", isDarkMode);
        document.body.classList.toggle("text-dark", !isDarkMode);

        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.toggle("dropdown-menu-dark", isDarkMode);
        });
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">Ognjen's Courses</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <GroupItemBackend />
                            <GroupItemFrontend />
                            <GroupItemDatabases />
                        </ul>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`theme-toggle-icon btn ${isDarkMode ? "btn-light" : "btn-dark"} ms-3 me-3`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? "🌞" : "🌙"}
                    </button>
                </div>
            </nav>
        </header>
    );
}